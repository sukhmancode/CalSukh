"use client";

import { availabilityAction } from "@/app/actions";
import { SubmitButtons } from "@/app/components/SubmitButton";
import { times } from "@/app/lib/times";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useActionState } from "react";

export default function AvailabilityForm({ data }: { data: any[] }) {
    const [state, formAction] = useActionState(availabilityAction, null);

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Availability</CardTitle>
                    <CardDescription>Manage your availability settings</CardDescription>
                </CardHeader>

                <form action={formAction}>
                    <CardContent>
                        {data.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
                                <input type="hidden" name={`id-${item.id}`} value={item.id} />

                                <div className="flex items-center gap-4">
                                    <Switch defaultChecked={item.isActive} name={`isActive-${item.id}`} />
                                    <p>{item.day}</p>
                                </div>

                                <Select name={`fromTime-${item.id}`} defaultValue={item.fromTime}>
                                    <SelectTrigger className="w-full flex gap-3">
                                        <SelectValue placeholder="From Time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {times.map((time) => (
                                                <SelectItem value={time.time} key={time.id}>
                                                    {time.time}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <Select name={`tillTime-${item.id}`} defaultValue={item.tillTime}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Till Time" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {times.map((time) => (
                                                <SelectItem value={time.time} key={time.id}>
                                                    {time.time}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        ))}
                    </CardContent>

                    <CardFooter>
                        <SubmitButtons text="Save Changes" className="w-full" />
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
