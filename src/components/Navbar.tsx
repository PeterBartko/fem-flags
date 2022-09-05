import Link from 'next/link'
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { useEffect, useState } from 'react'

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false)
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDark(false)
    }
  }, [])

  const toggleDarkMode = () => {
    if (localStorage.theme == 'light') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setDark(false)
    }
  }

  return (
    <nav className='bg-white dark:bg-darkBlue px-5 flex items-center justify-between py-3 font-bold sm:px-16 shadow dark:text-white transition-colors'>
      <Link href="/">
        <h1 className="sm:text-[1.3rem] cursor-pointer">Where in the world?</h1>
      </Link>
      <button className='flex items-center gap-2' onClick={toggleDarkMode}>
        {dark ? <BsMoonFill /> : <BsMoon />}
        <p className='text-sm'>Dark Mode</p>
      </button>
    </nav>
  )
}

export default Navbar