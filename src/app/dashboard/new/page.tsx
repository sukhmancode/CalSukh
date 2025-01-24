"use client";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

 const New = () => {

    type VideoCallProvider = "Meet" | "Zoom" | "Microsoft Teams"
    const [activeMeetingProvider,setActiveMeetingProvider] = useState<VideoCallProvider>("")
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Add new appointment Type</CardTitle>
                <CardDescription>Create new appointment that allows people to book you.</CardDescription>
            </CardHeader>

            <form >
                <CardContent>
                    <div className="mt-3 flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input placeholder="30 minute meeting"/>
                    </div>
                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>URL Slug</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                            <span>CalSukh.com/</span>
                            <Input placeholder="Example-url-1"/> 
                        </div>
                        
                    </div>

                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                           <Textarea placeholder="Meet me in the meeting."/> 
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Label>Duration</Label>
                            <Select>
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
                            <ButtonGroup className="flex gap-2 mt-1">
                                <Button onClick={() => setActiveMeetingProvider("Meet")}>Meet</Button>
                                <Button onClick={() => setActiveMeetingProvider("Zoom")}>Zoom</Button>
                                <Button onClick={() => setActiveMeetingProvider("Microsoft Teams")}>Microsoft Teams</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                </CardContent>
            </form>
        </Card>
    </div>
  )
}
export default New;