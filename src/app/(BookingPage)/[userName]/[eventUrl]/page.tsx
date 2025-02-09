import { RenderCalendar } from "@/app/components/RenderCalendar";
import prisma from "@/app/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarX2, Clock, VideoIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

type Availability = {
  day: Day;
  isActive: boolean;
};

type UserData = {
  id: string;
  userName: string | null;
  image: string;
  availability: Availability[];
};

type EventData = {
  id: string;
  description: string;
  title: string;
  duration: number;
  videoCallSoftware: string;
  user: UserData | null;
};

interface BookingProps {
  params: Awaited<{ userName: string; eventUrl: string }>;
  searchParams: { date?: string };
}

/**
 * Fetch event data from Prisma
 */
async function getData(eventUrl: string, userName: string): Promise<EventData | null> {
  try {
    const data = await prisma.eventType.findFirst({
      where: {
        url: eventUrl,
        active: true,
        user: { userName },
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
            image: true,
            availability: {
              select: { day: true, isActive: true },
            },
          },
        },
      },
    });

    return data ?? null;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return null;
  }
}


export default async function BookingForm({ params, searchParams }: BookingProps) {
  if (!params?.userName || !params?.eventUrl) {
    notFound();
  }

  const data = await getData(params.eventUrl, params.userName);
  if (!data) {
    notFound();
  }

  const selectedDate = searchParams.date ? new Date(searchParams.date) : new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(selectedDate);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-[1000px] w-full mx-auto p-5">
        <CardContent className="p-5 md:grid md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-4">
          {/* User & Event Info */}
          <div className="flex flex-col justify-start">
            {data.user?.image && (
              <Image
                src={data.user.image}
                width={50}
                height={50}
                alt={`${data.user.userName || "User"}'s profile picture`}
                className="size-16 rounded-full"
              />
            )}
            <p className="text-sm font-medium text-muted-foreground mt-1">
              {data.user?.userName}
            </p>
            <h1 className="font-semibold text-xl mt-1">{data.title}</h1>
            <p className="text-sm font-medium text-muted-foreground">{data.description}</p>

            {/* Event Details */}
            <div className="mt-5 flex flex-col gap-y-3">
              <div className="flex">
                <CalendarX2 className="size-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">{formattedDate}</span>
              </div>
              <div className="flex">
                <Clock className="size-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">{data.duration} Minutes</span>
              </div>
              <div className="flex">
                <VideoIcon className="size-4 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">{data.videoCallSoftware}</span>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="h-full w-[1px]" />

          {/* Render Calendar Component */}
          <RenderCalendar availability={data.user?.availability || []} />

          {/* Vertical Separator */}
          <Separator orientation="vertical" className="h-full w-[1px]" />
        </CardContent>
      </Card>
    </div>
  );
}
