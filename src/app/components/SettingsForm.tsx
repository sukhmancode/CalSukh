"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButtons } from "./SubmitButton";
import { useActionState } from "react";
import { settingsAction } from "../actions";
import { SubmissionResult, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingsSchema } from "../lib/zodSchema";

interface SettingsFormProps {
    fullName: string;
    email: string;
}

export const SettingsForm = ({ email, fullName }: SettingsFormProps) => {
  

    const [lastResult, action] = useActionState(
      async (
        _prevState: SubmissionResult<string[]> | null,
        formData: FormData
      ): Promise<SubmissionResult<string[]>> => {
        return await settingsAction(formData);
      },
      null
    );
    

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: settingsSchema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>

            <form id={form.id} onSubmit={form.onSubmit} action={action} method="post">
                <CardContent className="flex flex-col gap-y-4">
                    {/* Full Name Field */}
                    <div className="flex flex-col gap-y-2">
                        <Label htmlFor={fields.fullName.id}>Full Name</Label>
                        <Input
                            id={fields.fullName.id}
                            name={fields.fullName.name}
                            key={fields.fullName.key}
                            defaultValue={fullName}
                            placeholder="Enter your full name"
                        />
                        {fields.fullName.errors && (
                            <p className="text-red-500 text-sm">{fields.fullName.errors.join(", ")}</p>
                        )}
                    </div>

                    {/* Email Field (Read-Only) */}
                    <div className="flex flex-col gap-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" disabled placeholder="Email" defaultValue={email} />
                    </div>
                </CardContent>

                <CardFooter>
                    <SubmitButtons text="Submit" className="w-full" />
                </CardFooter>
            </form>
        </Card>
    );
};
