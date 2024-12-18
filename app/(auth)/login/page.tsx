'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})
const LoginPage = () => {

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password:"",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage className='validateError' />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='validateLabel'>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage className='validateError'/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>

      <div className='mt-8'>
         <Label>Don&apos;t have an account?</Label>
         <Link href="/register"> Click Here Register</Link>

      </div>
    </Form>
  )
}

export default LoginPage