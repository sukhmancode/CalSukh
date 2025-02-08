"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButtons } from "./SubmitButton";
import { useActionState} from "react";
import { settingsAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingsSchema } from "../lib/zodSchema";

interface iAppProps {
    fullName: string,
    email: string,
}
export const SettingsForm = ({email,fullName} : iAppProps) => {
    const [lastResult,action] = useActionState(settingsAction, null);

    const [form,fields] = useForm({
        lastResult,
        onValidate({formData}) {
            return parseWithZod(formData,{
                schema:settingsSchema
            })
        },
        shouldValidate:"onBlur",
        shouldRevalidate:"onInput"
     })
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>Manage your account settings</CardDescription>
                </CardHeader>

                <form  id={form.id} onSubmit={form.onSubmit} action={action}>
                    <CardContent className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <Label>Full Name</Label>
                            <Input name={fields.fullName.name} key={fields.fullName.key} defaultValue={fullName} placeholder="Sukhman"/>
                            <p className="text-red-500">{fields.fullName.errors}</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                        <Label>Email</Label>
                         <Input disabled placeholder="test@gmail.com" defaultValue={email}/>
                        </div>
                    </CardContent>

                    <CardFooter>
                      <SubmitButtons text="Submit" className='w-full'/>
                    </CardFooter>
                </form>
            </Card>
            
        </div>
    )
}