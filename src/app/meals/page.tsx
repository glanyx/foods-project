import MealsGrid, { Meal } from "@/components/meals/MealsGrid"
import Link from "next/link"
import { getMeals } from "../../lib/meals"
import { Suspense } from "react"
import Loader from "@/components/utils/Loader"

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

const Meals = async () => {

  const meals = await getMeals<Meal>()
  
  return <MealsGrid meals={meals} />
}

const MealsPage = async () => {

  return(
    <>
      <header className="gap-12 mt-12 mb-20 mx-auto width-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl">
        <h1 className="font-montserrat">
          Delicious meals, created <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">by you</span>
        </h1>
        <p className="m-0">Choose your favourite recipe and cook it yourself. It is easy and fun!</p>
        <p className="m-0">
          <Link className="inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff8a05] text-white font-bold no-underline" href='/meals/share'>
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage