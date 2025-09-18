import Link from 'next/link';
import Image from 'next/image';

import { Meal } from './MealsGrid'

interface IMealItem extends Meal {}

const MealItem = ({
  title,
  slug,
  image,
  summary,
  creator,
}: IMealItem) => {
  return (
    <article className='flex flex-col justify-between h-full rounded-sm shadow-[0_0_12px_rgba(0_0_0_/_0.3)] overflow-hidden transition-all ease-in-out duration-300 text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]'>
      <header>
        <div className='relative h-60'>
          <Image className='object-cover' src={image} alt={title} fill />
        </div>
        <div className='pt-2 pb-0 px-4'>
          <h2 className='m-0 text-2xl font-montserrat'>{title}</h2>
          <p className='m-0 text-xs text-[#cfa69b] font-italic'>by {creator}</p>
        </div>
      </header>
      <div className='flex flex-col justify-between h-full'>
        <p className='pt-4 pb-0 px-4'>{summary}</p>
        <div className='p-4 text-right'>
          <Link
            className='
              inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline
              hover:bg-linear-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242_100_18_/_0.8)]
              active:bg-linear-to-r active:from-[#fd4715] active:to-[#f9b241] active:shadow-[0_0_12px_rgba(242_100_18_/_0.8)]
            '
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem