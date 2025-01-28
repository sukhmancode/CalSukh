"use client";
import { eventCreationAction } from "@/app/actions";
import { SubmitButtons } from "@/app/components/SubmitButton";
import { eventTypeSchema } from "@/app/lib/zodSchema";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { act, useActionState, useState } from "react";
import { useFormState } from "react-dom";

 const New = () => {

    type VideoCallProvider = "Meet" | "Zoom" | "Microsoft Teams"
    const [activeMeetingProvider,setActiveMeetingProvider] = useState<VideoCallProvider>("Meet");
    const providers: VideoCallProvider[] = ["Meet", "Zoom", "Microsoft Teams"];
    const [lastResult,action] = useActionState(eventCreationAction,null)
    const [form,fields] = useForm(
        {lastResult, onValidate({formData}) {
            return parseWithZod(formData, {
                schema:eventTypeSchema
            })
        },
    shouldValidate:'onBlur',
    shouldRevalidate:'onInput'
}
    )
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Add new appointment Type</CardTitle>
                <CardDescription>Create new appointment that allows people to book you.</CardDescription>
            </CardHeader>

            <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
                <CardContent>
                    <div className="mt-3 flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input placeholder="30 minute meeting" name={fields.title.name} key={fields.title.key} defaultValue={fields.title.initialValue}/>
                        <p className="text-red-500">{fields.title.errors}</p>
                    </div>
                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>URL Slug</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                            <span>CalSukh.com/</span>
                            <Input placeholder="Example-url-1" name={fields.url.name} key={fields.url.key} defaultValue={fields.url.initialValue}/> 
                        <p className="text-red-500">{fields.url.errors}</p>

                        </div>
                        
                    </div>

                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                           <Textarea placeholder="Meet me in the meeting." 
                           name={fields.description.name} key={fields.description.key} defaultValue={fields.description.initialValue}/> 
                        <p className="text-red-500">{fields.description.errors}</p>

                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Duration</Label>
                            <Select name={fields.duration.name} key={fields.duration.key} defaultValue={fields.duration.initialValue}>
                            <p className="text-red-500">{fields.duration.errors}</p>
                            
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Duration</SelectLabel>
                                        <SelectItem value="15">15 Mins</SelectItem>
                                        <SelectItem value="30">30 Mins</SelectItem>
                                        <SelectItem value="45">45 Mins</SelectItem>
                                        <SelectItem value="60">60 Mins</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-2 mt-5">
                        <Label>Meeting Provider</Label>
                        <input type="hidden" name={fields.videoCallSoftware.name} value={activeMeetingProvider} />
                        <ButtonGroup className="flex  mt-1">
                            {providers.map((provider) => (
                                <Button
                                type="button"
                                key={provider}
                                className={activeMeetingProvider === provider ? "bg-blue-500 w-full" : " w-full bg-blue-300"}
                                onClick={() => setActiveMeetingProvider(provider)}
                                >
                                {provider}
                                </Button>
                            ))}
                            </ButtonGroup>
                        <p className="text-red-500">{fields.videoCallSoftware.errors}</p>

                        </div>
                    </div>
                    <SubmitButtons className="w-full mt-5" text="Save Changes" /> 

                </CardContent>
            </form>
        </Card>
    </div>
  )
}
export default New;