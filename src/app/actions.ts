"use server";

import { auth } from "./lib/auth";
import prisma from "./lib/db";
import { parseWithZod } from "@conform-to/zod";
import { eventTypeSchema, onBoardingSchemaValidation, settingsSchema } from "./lib/zodSchema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function OnBoardingAction(prevState: any, formData: FormData) {
    try {
        const session = await auth();
        if (!session?.user?.id) {
            return { status: "error" as const, error: { _form: ["Authentication required"] } };
        }

        const result = await parseWithZod(formData, {
            schema: onBoardingSchemaValidation({
                async isUsernameUnique(userName: string) {
                    const existingUser = await prisma.user.findUnique({
                        where: { userName }
                    });
                    return !existingUser;
                },
            }),
            async: true,
        });

        if (result.status !== "success") {
            return result.reply();
        }

        await prisma.user.update({
            where: { id: session.user.id },
            data: {
                userName: result.value.userName,
                name: result.value.fullName,
                availability: {
                    createMany: {
                        data: [
                            { day: "Monday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Tuesday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Wednesday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Thursday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Friday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Saturday", fromTime: "08:00", tillTime: "18:00" },
                            { day: "Sunday", fromTime: "08:00", tillTime: "18:00" },
                        ],
                    },
                },
            },
        });
        return redirect("/onboarding/grant-id");
    } catch (error) {
        if (error instanceof Response) throw error;
        return { status: "error" as const, error: { _form: ["Something went wrong"] } };
    }
}

export async function settingsAction(formData: FormData) {
    const session = await auth();
    const submission = parseWithZod(formData, { schema: settingsSchema });

    if (submission.status !== "success") {
        return submission.reply();
    }

    await prisma.user.update({
        where: { id: session?.user?.id },
        data: { name: submission.value.fullName as string },
    });

    return redirect("/dashboard");
}


export async function availabilityAction(prevState:any,formData: FormData) {
    const session = await auth();
    if (!session || !session.user?.id) {
        return { status: "error", error: { _form: ["Authentication required"] } };
    }

    const rawData = Object.fromEntries(formData.entries());
    const availabiltyData = Object.keys(rawData)
        .filter((key) => key.startsWith("id-"))
        .map((key) => {
            const id = key.replace("id-", "");
            return {
                id,
                isActive: rawData[`isActive-${id}`] === "on",
                fromTime: rawData[`fromTime-${id}`] as string,
                tillTime: rawData[`tillTime-${id}`] as string, // FIXED CASE SENSITIVITY
            };
        });

    try {
        await prisma.$transaction(
            availabiltyData.map((item) =>
                prisma.availability.update({
                    where: { id: item.id },
                    data: {
                        isActive: item.isActive,
                        fromTime: item.fromTime,
                        tillTime: item.tillTime,
                    },
                })
            )
        );
        revalidatePath("/dashboard/availability");
    } catch (error) {
        console.log(error);
    }
}

import { SubmissionResult } from "@conform-to/react";

export const eventCreationAction = async (
    prevState: any,
    formData: FormData
): Promise<SubmissionResult<string[]> | null> => {
    const session = await auth();
    if (!session || !session.user?.id) {
        return { status: "error", error: { _form: ["Authentication required"] } }; // Ensure correct structure
    }

    const submission = parseWithZod(formData, {
        schema: eventTypeSchema,
    });

    if (submission.status !== "success") {
        return submission.reply();
    }

    try {
        await prisma.eventType.create({
            data: {
                title: submission.value.title,
                description: submission.value.description,
                url: submission.value.url,
                duration: submission.value.duration,
                videoCallSoftware: submission.value.videoCallSoftware,
                userId: session?.user?.id,
            },
        });

        return { status: "success" }; 
    } catch (error) {
        return { status: "error", error: { _form: ["Something went wrong"] },};
    }
};
