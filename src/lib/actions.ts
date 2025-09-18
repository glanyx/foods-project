'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

interface IState {
  message: string | null
}

export const shareSubmitHandler = async (_: IState, formData: FormData): Promise<IState> => {

  const isInvalid = (text: string) => {
    return !text || text.trim() === ''
  }

  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
  };

  const invalid = [...Object.values(meal)].filter(attrib => typeof attrib === 'string').some(attrib => isInvalid(attrib)) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0

  if (invalid) return { message: 'Invalid input!' }

  await saveMeal(meal)

  revalidatePath('/meals')
  redirect('/meals')
  }