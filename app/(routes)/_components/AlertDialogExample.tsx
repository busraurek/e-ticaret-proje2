'use client'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'
const AlertDialogExample = () => {
const  handleBildirim = ()  =>{
    console.log("Bildirim")
}

  return (
    <AlertDialog>
  <AlertDialogTrigger>
    <Button variant={'outline'}><Bell/></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Bildirimler</AlertDialogTitle>
      <AlertDialogDescription>
      Bildirimleri Açmak İstiyor Musunuz?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>İptal</AlertDialogCancel>
      <AlertDialogAction onClick={handleBildirim}>Evet</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default AlertDialogExample