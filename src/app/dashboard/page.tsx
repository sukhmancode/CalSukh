import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from "../lib/auth";
import prisma from "../lib/db";
import { EmptyEvent } from "../components/EmptyEvent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar1Icon, ExternalLink, Pen, Settings, Trash, Users2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CopyLinkMenu } from "../components/CopyLinkMenu";
import { MenuEventSwitch } from "../components/EventTypeSwitcher";

async function getData(userId:string) {
    if (!userId) {
        return redirect("/");
    }
    const data = await prisma.user.findUnique({
        where:{
            id:userId,
        },
        select: {
            userName:true,
            eventType: {
                select: {
                    id:true,
                    active:true,
                    title:true,
                    duration:true,
                    url:true
                }
            }
        }
    })
    if(!data) {
        return redirect("/");
    }
    else {
    return data;
    }
}

export default async function Dashboard() {
    const session = await auth();
    const data = await getData(session?.user?.id as string)
    if(!session) {
        redirect("/sign-in")
    }

    return (
    <Suspense fallback={<div>Loading...</div>}>
        <div>
            {
                data.eventType.length === 0 ? <EmptyEvent title={"YOU HAVE NO EVENTS"} description={"please create your events"}  buttonText={"Add Event Type"} href={"/dashboard/new"}/>: 
                <>
                <div className="flex items-center justify-between px-2">
                    <div className="hidden sm:grid gap-y-1">
                        <h1 className="text-3xl md:text-4xl font-semibold">Event Types</h1>
                        <p className="text-muted-foreground mt-2">Create and manage your event types right here.</p>
                    </div>
                    <Button >
                        <Calendar1Icon/>
                        <Link href={"/dashboard/new"}>Create New Event</Link>
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.eventType.map((item) => (
                        <div key={item.id} className="overflow-hidden p-21 shadow rounded-lg border relative mt-5">
                            <div className="absolute top-2 right-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={"outline"} >
                                            <Settings className="size-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Hello</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <Link href={`/${data.userName}/${item.url}`} className="flex"> 
                                                    <ExternalLink className="mr-2 size-4"/>
                                                Preview

                                                </Link>
                                            </DropdownMenuItem>
                                            
                                            <CopyLinkMenu meetingUrl={`${process.env.NEXT_PUBLIC_URL}/${data.userName}/${item.url}`} />
                                            <DropdownMenuItem asChild>
                                                <Link href={`/dashboard/event/${item.id}`}>
                                                <Pen className="mr-2 size-4"/>
                                                Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuItem asChild>
                                                <Link href={`/dashboard/event/${item.id}/delete`}>
                                                <Trash className="mr-2 size-4"/>
                                                Trash
                                                </Link>
                                              
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <Link href={"/"} className="flex items-center p-5">
                                <div className="flex-shrink-0">
                                    <Users2 className="size-6"/>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-muted-foreground">{item.duration} Minutes Meeting</dt>
                                        <dd className="text-lg font-medium">{item.title}</dd>
                                    </dl>
                                </div>
                            </Link>
                            <div className="bg-muted flex items-center justify-between px-5 py-3">
                                <MenuEventSwitch initialChecked={item.active} eventTypeId={item.id}/>
                                <Button asChild>
                                    <Link href={`/dashboard/event/${item.id}`}>
                                    Edit Event
                                    </Link></Button>
                            </div>
                        </div>
                    ))}
                </div>
                </>
            }
        </div>
    </Suspense>
    );
}  
