import fs from 'node:fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

interface MealInput {
  title: string
  summary: string
  instructions: string
  image: File
  creator: string
  creator_email: string
}

const db = sql('meals.db')

export const getMeals = async <T>(): Promise<Array<T>> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // throw new Error('Loading meals failed')
  return db.prepare<Array<unknown>, T>('SELECT * FROM meals').all()
}

export const getMeal = <T>(slug: string) => {
  return db.prepare<string, T>('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export const saveMeal = async (meal: MealInput) => {
  
  const saveMealObject = {
    ...meal,
    slug: slugify(meal.title, { lower: true }),
    instructions: xss(meal.instructions),
    image: '',
  }

  const extension = meal.image.name.split('.').pop()
  const filename = `${saveMealObject.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${filename}`)
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {

    if (error) throw new Error('Saving image failed!')
    saveMealObject.image = `/images/${filename}`
    
    db.prepare(`
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `).run(saveMealObject)

  })

}