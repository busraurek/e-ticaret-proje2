'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { ProductType } from '@/constans'
  
interface ProductModalProps{
    product : ProductType
}

const ProductModal = ({product}: ProductModalProps) => {

  const [quantity, setQuantity] = useState(1)

  const handleInc = ()=>{
    setQuantity(quantity+1)

  }
  const handleDec = ()=>{
    if(quantity>1)
{
  setQuantity(quantity-1)

}
  }
  return (

    <Dialog>
  <DialogTrigger asChild>
  <Button variant='destructive'>Detail</Button>

  </DialogTrigger>
  <DialogContent className='sm:max-w-[900px]'>
    <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
            <Image 
        alt={product.title} 
        src={product.image}
        width={500}
        height={500}
        className='w-full h-96 object-cover mb-4 rounded-xl'
        />
            </div>
            <div className='p-4'>
                <h2 className='text-4xl font-semibold'>{product.title} </h2>
                <p className='mt-5 font-light'>{product.description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed minima, aliquam numquam fugit reiciendis consectetur asperiores ratione temporibus voluptatum, ullam sunt aliquid, dolorem laudantium minus!
                 </p>
            <div className='flex mt-8 justify-between items-center'>
            <span>${product.price} </span>
            <span className='line-through'>${product.mrp} </span>

        </div>
        <div className='mt-8'>
            <div className='flex flex-row items-center gap-4'>
        <Button onClick={handleDec} variant={'destructive'} size={'icon'}>-</Button>
       {quantity}
        <Button onClick={handleInc} variant={'destructive'} size={'icon'}>+</Button>
       </div>
            </div>
            </div>
            
        </div>
       
    </div>
    <DialogFooter className='flex justify-start'>
      <Button type="submit">Add to Cart</Button>
    </DialogFooter>
  </DialogContent>
   
</Dialog>


  )
}

export default ProductModal