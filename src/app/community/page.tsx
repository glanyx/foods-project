import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className='gap-12 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl text-center'>
        <h1 className='font-montserrat'>
          One shared passion: <span className='bg-linear-to-r from-[#f9572a] to-[#ff8a05] text-transparent bg-clip-text'>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className='w-[90%] max-w-[40rem] my-0 mx-auto text-center'>
        <h2 className='font-montserrat text-3xl mb-12 text-[#ddd6cb]'>Community Perks</h2>

        <ul className='list-none my-12 mx-0 p-0'>
          <li className='flex flex-col items-center gap-8'>
            <Image className='w-32 h-32 object-contain' src={mealIcon} alt="A delicious meal" />
            <p className='font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]'>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center gap-8'>
            <Image className='w-32 h-32 object-contain' src={communityIcon} alt="A crowd of people, cooking" />
            <p className='font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]'>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center gap-8'>
            <Image
              className='w-32 h-32 object-contain' 
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className='font-montserrat text-2xl font-bold m-0 text-[#ddd6cb]'>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}