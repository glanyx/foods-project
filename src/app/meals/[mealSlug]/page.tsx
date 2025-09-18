import Image from "next/image"
import { getMeal } from "@/lib/meals"
import { Meal } from "@/components/meals/MealsGrid"
import { notFound } from "next/navigation"

interface IMealSlugParams {
  params: Promise<{
    mealSlug: string
  }>
}

export const generateMetadata = async (props: IMealSlugParams) => {
  const params = await props.params
  const meal = getMeal<Meal>(params.mealSlug)
  if (!meal) notFound()
  return {
    title: meal.title,
    description: meal.summary,
  }
}

const SpecificMealPage = async (props: IMealSlugParams) => {

  const params = await props.params
  const meal = getMeal<Meal>(params.mealSlug)

  if (!meal) notFound()

  meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  return(
    <>
      <header className="flex py-8 px-4 gap-12 m-auto max-w-[80rem]">
        <div className="relative w-120 h-80">
          <Image className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0_0_0_/_0.5)] animate-fade-slide-left" src={meal.image} alt={meal.title} fill />
        </div>
        <div className="pt-2 pb-0 px-4 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-right">
          <h1 className="m-0 text-5xl uppercase font-montserrat text-shadow-[0_0_0.5rem_rgba(0_0_0_/_0.5)]">{meal.title}</h1>
          <p className="font-2xl text-[#cfa69b] font-italic">by <a className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-shadow-[0_0_18px_rgba(248_190_42_/_0.8)] active:text-shadow-[0_0_18px_rgba(248_190_42_/_0.8)]" href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className="text-xl/6 bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0_0_0_/_0.5)] p-8 max-w-[60rem] my-8 mx-auto animate-fade-slide-bottom" dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}></p>
      </main>
    </>
  )
}

export default SpecificMealPage