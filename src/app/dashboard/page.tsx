
import { notFound, redirect } from "next/navigation";
import { auth } from "../lib/auth";
import prisma from "../lib/db";
import { EmptyEvent } from "../components/EmptyEvent";


async function getData(userId:string) {
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
        return notFound()
    }
    return data;
}

const DashboardPage = async() => {
    const session = await auth();
    const data = await getData(session?.user?.id as string)
    if(!session) {
        return redirect("/")
    }

    return (
    <div>
       {
        data.eventType.length === 0 ? <EmptyEvent title={"YOU HAVE NO EVENTS"} description={"please create your events"}  buttonText={"Add Event Type"} href={"/dashboard/new"}/>: <p>We have event Type</p>
       }
    </div>
    );
}
export default DashboardPage;  
