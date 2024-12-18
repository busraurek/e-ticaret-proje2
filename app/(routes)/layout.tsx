import React from 'react'
import Footer from './_components/Footer'
import Header from './_components/Menu/Header'
import { Toaster } from '@/components/ui/toaster'

interface RoutesLayoutProps{
    children:React.ReactNode
}

const RoutesLayout = ({children} : RoutesLayoutProps) => {
  return (
  <>
   <Header/>
<div className='min-h-screen'>
{children}

</div>
   <Toaster/>
   <Footer/>
  </>
  )
}

export default RoutesLayout