"use client";

import { DateValue } from "@react-aria/calendar";
import { Calendar } from "./Calender";
import { today,getLocalTimeZone,parseDate,CalendarDate} from '@internationalized/date';
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface iAppProps {
    availability: {
        day:string,
        isActive:boolean
    }[];
}

export function RenderCalendar({availability}:iAppProps) {
    const searchParams = useSearchParams();
    const router = useRouter()
    const [date,setDate] = useState(() => {
        const dateParam = searchParams.get('date');
        return dateParam ? parseDate(dateParam) : today(getLocalTimeZone())
    })
    const handleDateChange = (date:DateValue) => {
        setDate(date as CalendarDate)
        const url = new URL(window.location.href)
        url.searchParams.set("date",date.toString());
        router.push(url.toString())

    }
    const isDayUnavailable = (date:DateValue) => {
        const dayOfWeek = date.toDate(getLocalTimeZone()).getDay()
                
        const adjustedIndex = dayOfWeek ===  0 ? 6 : dayOfWeek - 1;
        return !availability[adjustedIndex].isActive
    }
    
    return <Calendar minValue={today(getLocalTimeZone())} isDayUnavailable={isDayUnavailable} value={date} onChange={handleDateChange}/>
}