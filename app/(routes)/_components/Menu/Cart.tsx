import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ShoppingBagIcon } from 'lucide-react'
  

const CartMenu = () => {
  return (
    <Sheet>
    <SheetTrigger>
       <ShoppingBagIcon/>
    </SheetTrigger>
    <SheetContent className=''>
    <div className='flex flex-col mt-8 space-y-6'>
   EmptyCart
    </div>
    </SheetContent>
         
  </Sheet>
  )
}

export default CartMenu