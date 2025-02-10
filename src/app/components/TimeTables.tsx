import {format} from "date-fns"
import prisma from "../lib/db"
import { notFound } from "next/navigation"
import { Prisma } from "@prisma/client"
import { nylas } from "../lib/nylas"

interface iAppProps {
    selectedDate: Date,
    userName:string
}

async function getData(userName:string,selectedDate:Date) {
    const currentDay = format(selectedDate,"EEE") + "day"
    
    const data = await prisma.availability.findFirst({
        where: {
            day: currentDay as Prisma.EnumDayFilter,
            user:{
                userName:userName,
            }
        }, select: {
            fromTime:true,
            tillTime:true,
            id:true,
            user:{
                select: {
                    grantEmail:true,
                    grantId:true
                }
            }
        }
    })
    if(!data) {
        return notFound();
    }
    console.log(data);
    
    const nylasData = await nylas.calendars.getFreeBusy({
        identifier: data.user?.grantId as string,
        requestBody: {
            
        }
    })
    return data;
}
export async function TimeTables({selectedDate,userName}:iAppProps) {
    const data = await getData(userName,selectedDate)
    return (
        <div>
            <p className="text-base font-semibold">{format(selectedDate,"EEE")}
             <span className="text-sm text-muted-foreground ml-2">{format(selectedDate,"MMM. d")}</span>
            </p>
            <div>{data.user?.grantEmail}</div>

        </div>
    )
}