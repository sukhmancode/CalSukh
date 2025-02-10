import { RenderCalendar } from "@/app/components/RenderCalendar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import prisma from "@/app/lib/db";
import { BookMarked, CalendarX2, Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { TimeTables } from "@/app/components/TimeTables";

async function getData(userName: string, eventName: string) {
  const eventType = await prisma.eventType.findFirst({
    where: {
      url: eventName,
      user: { userName: userName },
      active: true,
    },
    select: {
      id: true,
      description: true,
      title: true,
      duration: true,
      videoCallSoftware: true,
      user: {
        select: {
          image: true,
          name: true,
          availability: { select: { day: true, isActive: true } },
        },
      },
    },
  });

  if (!eventType) {
    return notFound();
  }
  

  return eventType;
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: { userName: string; eventName: string };
  searchParams: { date?: string; time?: string };
}) {
  const eventType = await getData(params.userName, params.eventName);
  return <BookingPageContent eventType={eventType} searchParams={searchParams} />;
}

// Keep the main component sync
function BookingPageContent({
  eventType,
  searchParams,
}: {
  eventType: any;
  searchParams: { date?: string; time?: string };
}) {
  const selectedDate = searchParams.date ? new Date(searchParams.date) : new Date();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(selectedDate);

  const showForm = !!searchParams.date && !!searchParams.time;

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      {showForm ? (
        <Card className="max-w-[600px]">
          <CardContent className="p-5 grid md:grid-cols-[1fr,auto,1fr] gap-4">
            {eventType.user && (
              <div>
                <Image
                  src={eventType.user.image as string}
                  alt={`${eventType.user.name}'s profile picture`}
                  className="size-9 rounded-full"
                  width={30}
                  height={30}
                />
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {eventType.user.name}
                </p>
                <h1 className="text-xl font-semibold mt-2">{eventType.title}</h1>
                <p className="text-sm font-medium text-muted-foreground">{eventType.description}</p>

                <div className="mt-5 grid gap-y-3">
                  <p className="flex items-center">
                    <CalendarX2 className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {formattedDate}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {eventType.duration} Mins
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BookMarked className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {eventType.videoCallSoftware}
                    </span>
                  </p>
                </div>
              </div>
            )}
            <Separator orientation="vertical" className="hidden md:block h-full w-[1px]" />
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-[1000px] mx-auto">
          <CardContent className="p-5 md:grid md:grid-cols-[1fr,auto,1fr,auto,1fr] md:gap-4">
            {eventType.user && (
              <div>
                <Image
                  src={eventType.user.image as string}
                  alt={`${eventType.user.name}'s profile picture`}
                  className="size-9 rounded-full"
                  width={30}
                  height={30}
                />
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {eventType.user.name}
                </p>
                <h1 className="text-xl font-semibold mt-2">{eventType.title}</h1>
                <p className="text-sm font-medium text-muted-foreground">{eventType.description}</p>
                <div className="mt-5 grid gap-y-3">
                  <p className="flex items-center">
                    <CalendarX2 className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {formattedDate}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <Clock className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {eventType.duration} Mins
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BookMarked className="size-4 mr-2 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Google Meet
                    </span>
                  </p>
                </div>
              </div>
            )}
            <Separator orientation="vertical" className="hidden md:block h-full w-[1px]" />
            {eventType.user && (
              <div className="my-4 md:my-0">
                <RenderCalendar availability={eventType.user.availability ?? []} />
              </div>
              
            )}
            <Separator orientation="vertical" className="hidden md:block h-full w-[1px]" />
      <TimeTables selectedDate={selectedDate} userName={eventType.user.userName}/>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
