"use client"
import { Switch } from "@/components/ui/switch";
import { UpdateEventStatusAction } from "../actions";
import { useActionState, useEffect, useTransition } from "react";
import { toast } from "sonner";

export function MenuEventSwitch({initialChecked,eventTypeId} : {initialChecked:boolean,eventTypeId:string}) {
    const [state,action] = useActionState(UpdateEventStatusAction,undefined)

    const [isPending,startTransition] = useTransition();
    useEffect(() => {
        if(state?.status==="success") {
            toast.success(state.message)
        }
        else if(state?.status==="error") {
            toast.error(state.message)
        }
    },[state])
    return (
        <div>
            <Switch disabled={isPending} defaultChecked={initialChecked} 
            onCheckedChange={(isChecked) => {startTransition(() => {
                action({isChecked:isChecked,eventTypeId:eventTypeId })
            })}}/>
        </div>
    )
}