"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import GoogleLogo from "../../../public/google.svg";
import GithubLogo from "../../../public/github.svg";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface iAppProps {
    text: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    className: string;
}

export const SubmitButtons = ({ text, variant, className }: iAppProps) => {
    const { pending } = useFormStatus();
    try {
        return (
            <div>
                {pending ? (
                    <div>
                        <Button disabled variant={"outline"} className={cn("w-fit", className)}>
                            <Loader2 className="size-4 mr-2 animate-spin" />
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button type="submit" variant={variant} className={cn("w-fit", className)}>
                            {text}
                        </Button>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error in SubmitButtons:", error);
        return <div>Error occurred, please try again.</div>;
    }
};

export const GoogleAuthButton = () => {
    const { pending } = useFormStatus();
    try {
        return (
            <div>
                {pending ? (
                    <div>
                        <Button disabled variant={"outline"} className="w-full">
                            <Loader2 className="size-4 mr-2 animate-spin" />
                        </Button>
                    </div>
                ) : (
                    <Button className="w-full" variant={"outline"}>
                        <Image src={GoogleLogo} alt="google logo" className="size-5"></Image>Sign In with Google
                    </Button>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error in GoogleAuthButton:", error);
        return <div>Error occurred, please try again.</div>;
    }
};

export const GithubAuthButton = () => {
    const { pending } = useFormStatus();
    try {
        return (
            <div>
                {pending ? (
                    <div>
                        <Button disabled variant={"outline"} className="w-full">
                            <Loader2 className="size-4 mr-2 animate-spin" /> Loading...
                        </Button>
                    </div>
                ) : (
                    <Button className="w-full" variant={"outline"}>
                        <Image src={GithubLogo} alt="Github logo" className="size-5"></Image>Sign In with Github
                    </Button>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error in GithubAuthButton:", error);
        return <div>Error occurred, please try again.</div>;
    }
};
