import Link from "next/link"
import logo from '@/assets/logo.png'
import Image from "next/image"
import MainHeaderBackground from "./MainHeaderBackground"
import NavLink from "./NavLink"

const MainHeader = () => {

  return(
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
        <Link
          href='/'
          className='flex items-center justify-center gap-8 no-underline, text-[#ddd6cb] font-bold font-montserrat tracking-[0.15rem] uppercase text-2xl'
        >
          <Image
            src={logo} alt='A plate with food on it' 
            className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0_0_0_/_0.5)]"
            priority
          />
          NextLevel Food
        </Link>
        <nav>
          <ul 
            className="list-none m-0 p-0 flex gap-6 text-lg"
          >
            <li><NavLink href='/meals'>Browse Meals</NavLink></li>
            <li><NavLink href='/community'>Foodies Community</NavLink></li>
          </ul>
        </nav>
      </header>`
    </>
  )
}

export default MainHeader