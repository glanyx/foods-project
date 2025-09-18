import MealItem from "./MealItem"

export type Meal = {
  id: string
  slug: string
  title: string
  image: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
}


interface IMealsGrid {
  meals: Array<Meal>
}

const MealsGrid = ({
  meals,
}: IMealsGrid) => {

  return(
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-3 gap-20 my-8 mx-auto list-none p-0">
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}

export default MealsGrid