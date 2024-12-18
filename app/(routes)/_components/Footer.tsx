'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
const router = useRouter();
const handleclick = () => {
  router.push("/")
}
  return (
    <div className='text-sm text-center flex flex-col p-4'>
     <div>
       <Button variant="link" onClick={handleclick}>All right reserved Busra Webtite</Button>
    </div>
     <div>
       <Link href={`https://www.google.com.tr/?hl=tr`} target='_blank'>Copyright @Busra</Link>
     </div> 
    </div>
  )
}

export default Footer