"use server";
import { auth } from "./lib/auth";
import prisma from "./lib/db";
import { parseWithZod } from "@conform-to/zod";
import { eventTypeSchema ,settingsSchema, onboardingSchema } from "./lib/zodSchema";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { SubmissionResult } from "@conform-to/react";
import { nylas } from "./lib/nylas";
export async function onboardingAction(prevState: any, formData: FormData) {
    const session = await auth();
  
    const submission = await parseWithZod(formData, {
      schema: onboardingSchema({
        async isUsernameUnique() {
          const exisitngSubDirectory = await prisma.user.findUnique({
            where: {
              userName: formData.get("username") as string,
            },
          });
          return !exisitngSubDirectory;
        },
      }),
  
      async: true,
    });
  
    if (submission.status !== "success") {
      return submission.reply();
    }
  
    const OnboardingData = await prisma.user.update({
      where: {
        id: session?.user?.id,
      },
      data: {
        userName: submission.value.username,
        name: submission.value.fullName,
        availability: {
          createMany: {
            data: [
              {
                day: "Monday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Tuesday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Wednesday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Thursday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Friday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Saturday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
              {
                day: "Sunday",
                fromTime: "08:00",
                tillTime: "18:00",
              },
            ],
          },
        },
      },
    });
  
    return redirect("/onboarding/grant-id");
  }
export async function settingsAction(formData: FormData) {
    try {
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
       

    } catch (error) {
        return { status: "error", error: { _form: ["Something went wrong"] } };
    }
}


export async function availabilityAction(formData: FormData): Promise<void> {
    const session = await auth();
    if (!session?.user) {
        return notFound();
    }

    const rawData = Object.fromEntries(formData.entries());
    const availabilityData = Object.keys(rawData)
        .filter((key) => key.startsWith("id-"))
        .map((key) => {
            const id = key.replace("id-", "");
            return {
                id,
                isActive: rawData[`isActive-${id}`] === "on",
                fromTime: rawData[`fromTime-${id}`] as string,
                tillTime: rawData[`tillTime-${id}`] as string,
            };
        });

    if (availabilityData.length === 0) {
        return; // No updates, exit early
    }

    try {
        await prisma.$transaction(
            availabilityData.map((item) =>
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
        console.error("Error updating availability:", error);
    }
}


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

      return  redirect("/dashboard")
    } catch (error) {
        return { status: "error", error: { _form: ["Something went wrong"] },};
    }
};
export async function CreateMeetingAction(formData: FormData) {
    try {
        const getUserData = await prisma.user.findUnique({
            where: { userName: formData.get("userName") as string },
            select: { grantEmail: true, grantId: true },
        });

        if (!getUserData) {
            return { status: "error", error: { _form: ["User not found."] } };
        }

        const eventTypeData = await prisma.eventType.findUnique({
            where: { id: formData.get("eventTypeId") as string },
            select: { title: true, description: true },
        });

        if (!eventTypeData) {
            return { status: "error", error: { _form: ["Event type not found."] } };
        }

        const fromTime = formData.get("fromTime") as string;
        const meetingLength = Number(formData.get("meetingLength"));
        const eventDate = formData.get("eventDate") as string;
        const provider = formData.get("provider") as string;

        if (!fromTime || !eventDate || isNaN(meetingLength)) {
            return { status: "error", error: { _form: ["Invalid meeting details provided."] } };
        }

        const startDateTime = new Date(`${eventDate}T${fromTime}:00`);
        const endDateTime = new Date(startDateTime.getTime() + meetingLength * 60000);

        if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
            return { status: "error", error: { _form: ["Invalid date/time format."] } };
        }

        await nylas.events.create({
            identifier: getUserData.grantId as string,
            requestBody: {
                title: eventTypeData.title,
                description: eventTypeData.description,
                when: {
                    startTime: Math.floor(startDateTime.getTime() / 1000),
                    endTime: Math.floor(endDateTime.getTime() / 1000),
                },
                conferencing: { autocreate: {}, provider: provider as any },
                participants: [
                    {
                        name: formData.get("name") as string,
                        email: formData.get("email") as string,
                        status: "yes",
                    },
                ],
            },
            queryParams: {
                calendarId: getUserData.grantEmail as string,
                notifyParticipants: true,
            },
        });

       return redirect("/dashboard");

    } catch (error) {
        console.error("Error creating meeting:", error);
        return { status: "error", error: { _form: ["Something went wrong"] } };
    }
}
export async function cancelMeeting(formData:FormData) {
    const session = await auth();
    
    const userData = await prisma.user.findUnique({
        where: {
            id: session?.user?.id
        },select : {
            grantEmail:true,
            grantId:true
        }
    })
    if(!userData) {
        throw new Error("user not found")
    }
    const data = await nylas.events.destroy({
        eventId:formData.get('eventId') as string,
        identifier: userData.grantId as string,
        queryParams:{
            calendarId:userData.grantEmail as string
        }
    });
    revalidatePath("/dashboard/meetings")
}
export async function EditEventTypeAction(prevState:any,formData:FormData) {
    const session = await auth();

    const submission =  parseWithZod(formData,{
        schema:eventTypeSchema,
    })
    if(submission.status !== "success") {
        return submission.reply();
    }
    const data = await prisma.eventType.update({
        where: {
            id:formData.get("id") as string,
            userId:session?.user?.id
        },
        data: {
            title:submission.value.title,
            duration:submission.value.duration,
            url:submission.value.url,
            description:submission.value.description,
            videoCallSoftware:submission.value.videoCallSoftware
        }
    });
    return redirect("/dashboard")
}
export async function UpdateEventStatusAction(prevState:any,{isChecked,eventTypeId}:{isChecked:boolean,eventTypeId:string}) {
    try {
        const session = await auth();

        const data = await prisma.eventType.update({
            where: {
                id:eventTypeId,
                userId:session?.user?.id
            },
            data:{
                active:isChecked
            }
        })
        revalidatePath("/dashboard")
        return {status:"success",message:"event type status updated"}
    }
    catch(error) {
        return {status:"error",message:"something went wrong"}
    }
 
}
export async function deleteEventAction(formData:FormData) {
    const session = await auth();
    const data = await prisma.eventType.delete({
        where: {
        id:formData.get("id") as string,
        userId:session?.user?.id
        }
    })
    return redirect("/dashboard")
}