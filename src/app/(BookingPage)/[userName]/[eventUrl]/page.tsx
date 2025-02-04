import { Calendar } from "@/app/components/Calender";
import { RenderCalendar } from "@/app/components/RenderCalendar";
import { auth } from "@/app/lib/auth";
import prisma from "@/app/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarX2, Clock, VideoIcon } from "lucide-react";
import { notFound } from "next/navigation";

interface BookingFormProps {
    params: {
      userName: string;
      eventUrl: string;
    };
    searchParams: {
        date?:string
    }
  }

async function getData(eventUrl: string, userName: string) {
    const data =  await prisma.eventType.findFirst({
        where: {
            url: eventUrl,
            active: true,
            user: {
                userName:userName, 
            },
        },
        select: {
            id: true,
            description: true,
            title: true,
            duration: true,
            videoCallSoftware: true,
            user: {
                select: {
                    id: true,
                    userName: true,
                    image:true,
                    availabilty: {
                        select: {
                            day:true,
                            isActive:true
                        }
                    }
                },
            },
        },
    });
    if(!data) {
        return notFound();
    }
    return data;

}

export default async function BookingForm({ params,searchParams }:BookingFormProps) {
    const data = await getData(params.eventUrl,params.userName);
    const selectedDate = searchParams.date ? new Date(searchParams.date) : new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {weekday:"long",day:"numeric","month":"long"}).format(selectedDate)

    return(
        <div className="min-h-screen flex items-center justify-center">
            <Card className="max-w-[1000px] w-full mx-auto p-5">
                <CardContent className="p-5 md:grid md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-4">
                <div className="flex flex-col justify-start">
                    <img src={data.user?.image} alt="user image" className="size-16  rounded-full"/>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{data.user?.userName}</p>
                    <h1 className="font-semibold text-xl mt-1">{data.title}</h1>
                    <p className="text-sm font-medium text-muted-foreground">{data.description}</p>

                    <div className="mt-5 flex flex-col gap-y-3">
                        <div className="flex">
                            <p><CalendarX2 className="size-4 mr-2 text-primary"/></p>
                            <span className="text-sm text-muted-foreground">{formattedDate}</span>
                        </div>
                        <div className="flex">
                            <p><Clock className="size-4 mr-2 text-primary"/></p>
                            <span className="text-sm text-muted-foreground">{data.duration} Minutes</span>
                        </div>
                        <div className="flex">
                            <p><VideoIcon className="size-4 mr-2 text-primary"/></p>
                            <span className="text-sm text-muted-foreground">{data.videoCallSoftware} Minutes</span>
                        </div>

                    </div>
                </div>
                    <Separator orientation="vertical" className="h-full w-[1px]"/>
                        <RenderCalendar availability={data.user?.availabilty as any}/>
                    <Separator orientation="vertical" className="h-full w-[1px]"/>
                    
                </CardContent>
                
            </Card>
        </div>
    )
}