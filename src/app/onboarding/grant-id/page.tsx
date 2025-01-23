import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import videoGif from "../../../../public/work-is-almost-over-happy.gif"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck2 } from "lucide-react";
export default function onBoardingRouteTwo() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">You are almost done!</CardTitle>
                    <CardDescription>
                        We have to connect your calender
                    </CardDescription>
                    <Image src={videoGif} alt="happy video" width={300} className="w-full rounded-md"/>
                </CardHeader>
                <CardContent>
                    <Button asChild className="w-full">
                        
                        <Link href={"/api/auth"}> <CalendarCheck2/>Connect</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}