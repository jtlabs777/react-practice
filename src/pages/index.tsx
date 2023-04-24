import Image from 'next/image'
import { Inter } from 'next/font/google'
import Name from './myinfo'
import Name2 from './anothercomponenttwo'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    <Name/>
    </>
  )
}
