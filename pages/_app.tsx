import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='bg-veryLightGray dark:bg-veryDarkBlue text-veryDarkText dark:text-white'>
      <Navbar />
      <Component {...pageProps} />
    </main>
  ) 
}

export default MyApp
