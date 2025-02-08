"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import {  useFormState } from 'react-dom'
import { OnBoardingAction } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { onBoardingSchema } from '../lib/zodSchema'
import { SubmitButtons } from '../components/SubmitButton'

const Onboarding = () => {
  const [state, action] = useFormState(OnBoardingAction, null);
  const [form, fields] = useForm({
    lastResult: state,
    onValidate({formData}) {
      return parseWithZod(formData, { schema: onBoardingSchema })
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput"
  });

  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
      <Card className='w-[380px]'>
        <CardHeader>
          <CardTitle className='text-center text-3xl'>Welcome to Cal<span className='text-primary'>Sukh</span></CardTitle>
          <CardDescription className='text-center'>We need the following information</CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
          <CardContent>
            <div className='grid gap-y-2'>
                <Label  className='text-[16px]'>Full Name</Label>
                <Input 
                  name={fields.fullName.name} 
                  defaultValue={fields.fullName.initialValue?.toString()} 
                  key={fields.fullName.key} 
                  placeholder='john doe'
                />
                  <p className='text-red-500 text-sm'>{fields.fullName.errors}</p>
            </div>
            <div className='grid gap-y-2 mt-5'>
                <Label className='text-[16px]'>Username</Label>
                <div className='flex rounded-md'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm'>
                      CalSukh.com/
                  </span>
                  <Input 
                      name={fields.userName.name} 
                      defaultValue={fields.userName.initialValue?.toString()} 
                      key={fields.userName.key} 
                      placeholder='example-user-1' 
                      className='rounded-l-none'
                  />
                </div>
                <p className='text-red-500 text-sm'>{fields.userName.errors}</p>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButtons text="Submit" className='w-full'/>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default Onboarding