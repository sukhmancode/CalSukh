import { SettingsForm } from '@/app/components/SettingsForm'
import { auth } from '@/app/lib/auth';
import prisma from '@/app/lib/db'
import { notFound } from 'next/navigation';
import React from 'react'

async function GETDATA(id:string) {
    const data = await prisma.user.findUnique({
        where:{
            id: id
        },
        select: {
            name:true,
            email:true,
        }
    });
    if(!data) {
        return notFound();
    }
    return data;
}

export const Settings = async() => {
    const session = await auth();
    const data = await GETDATA(session?.user?.id as string);
  return (
    <SettingsForm fullName={data.name as string} email={data.email as string}  />
  )
}

export default Settings