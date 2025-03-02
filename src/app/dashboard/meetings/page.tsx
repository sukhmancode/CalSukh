import { cancelMeeting } from "@/app/actions";
import { EmptyEvent } from "@/app/components/EmptyEvent";
import { SubmitButtons } from "@/app/components/SubmitButton";
import { auth } from "@/app/lib/auth";
import prisma from "@/app/lib/db";
import { nylas } from "@/app/lib/nylas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format, fromUnixTime } from "date-fns";
import { Video } from "lucide-react";

async function getData(userId: string) {
    const userData = await prisma.user.findUnique({
        where: { id: userId },
        select: { grantEmail: true, grantId: true },
    });

    if (!userData) {
        throw new Error("User not found");
    }

    const data = await nylas.events.list({
        identifier: userData.grantId as string,
        queryParams: { calendarId: userData.grantEmail as string },
    });

    return data;
}

export default async function Meetings() {
    const session = await auth();
    const data = await getData(session?.user?.id as string);
    console.log(data);

    return (
        <div>
            {data.data.length < 1 ? (
                <div>
                    <EmptyEvent 
                        title="No meetings found" 
                        description="You don’t have any meetings" 
                        buttonText="Create a new event type" 
                        href="/dashboard/new" 
                    />
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Bookings</CardTitle>
                        <CardDescription>See upcoming events booked with you.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {data.data.map((item) => {
                            const when = item.when as { startTime?: number; endTime?: number; date?: string };

                            return (
                                <form action={cancelMeeting} key={item.id}>
                                    <input type="hidden" name="eventId" value={item.id} />

                                    <div className="grid grid-cols-3 justify-between items-center">
                                        <div>
                                            {when.startTime && when.endTime ? (
                                                <>
                                                    <p className="text-muted-foreground text-sm">
                                                        {format(fromUnixTime(when.startTime), "EEE, dd MMM")}
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {format(fromUnixTime(when.startTime), "hh:mm a")} -{" "}
                                                        {format(fromUnixTime(when.endTime), "hh:mm a")}
                                                    </p>
                                                </>
                                            ) : when.date ? (
                                                <p className="text-muted-foreground text-sm">{when.date}</p>
                                            ) : (
                                                <p className="text-muted-foreground text-sm">Time not available</p>
                                            )}

                                {item.conferencing && "details" in item.conferencing && item.conferencing.details?.url && (
                                    <div className="flex items-center mt-1">
                                        <Video className="size-4 mr-2 text-primary" />
                                        <a
                                            href={item.conferencing.details.url}
                                            target="_blank"
                                            className="text-sm text-primary underline underline-offset-4"
                                        >
                                            Join Meeting
                                        </a>
                                    </div>
                                )}

                                        </div>

                                        <div className="flex flex-col items-start">
                                            <h2 className="text-sm font-medium">{item.title}</h2>
                                            {item.participants.length > 0 && (
                                                <p className="text-sm text-muted-foreground">
                                                    You and {item.participants[0].name}
                                                </p>
                                            )}
                                        </div>

                                        <SubmitButtons 
                                            text="Cancel Event" 
                                            variant="destructive" 
                                            className="w-fit flex ml-auto" 
                                        />
                                    </div>

                                    <Separator className="my-5" />
                                </form>
                            );
                        })}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
