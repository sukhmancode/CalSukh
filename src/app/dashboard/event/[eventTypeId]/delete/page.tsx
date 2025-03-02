import { deleteEventAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteEvent({params}: {params:{eventTypeId:string}}) {
    return (
        <div className="flex flex-1 items-center justify-center ">
            <Card className="p-5 max-w-[320px] md:max-w-[400px] w-full">
                <CardHeader>
                    <CardTitle><h1 className="text-3xl">Delete Event</h1></CardTitle>
                    <CardDescription>Are you sure?</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between gap-4">
                     <Button variant={"secondary"}><Link href={"/dashboard"}>Cancel</Link></Button>
                     <form action={deleteEventAction}>
                    <input type="hidden" name="id" value={params.eventTypeId} />
                     <Button variant={"destructive"}>Delete</Button>
                     </form>
                </CardFooter>
            </Card>
        </div>
    )
}