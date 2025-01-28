import { z } from "zod";

export const onBoardingSchema = z.object({
    fullName: z.string().min(3).max(150),
    userName: z.string().min(3).max(150).regex(/^[a-zA-Z0-9-]+$/, {
        message: "Username can only contain letters, numbers, and -"
    })
});

export const onBoardingSchemaValidation = ({
    isUsernameUnique,
}: {
    isUsernameUnique: (username: string) => Promise<boolean>;
}) => {
    return onBoardingSchema.superRefine(async (data, ctx) => {
        const isUnique = await isUsernameUnique(data.userName);
        if (!isUnique) {
            ctx.addIssue({
                code: "custom",
                message: "Username already taken",
                path: ["userName"],
            });
        }
    });
};

export const settingsSchema = z.object({
    fullName: z.string().min(3).max(150),
})

export const availabilitySchema = z.object({
    
})

export const eventTypeSchema = z.object({
    title:z.string().min(3).max(150),
    duration:z.number().min(15).max(60),
    url:z.string().min(3).max(150),
    description:z.string().min(3),
    videoCallSoftware:z.string().min(3)
})