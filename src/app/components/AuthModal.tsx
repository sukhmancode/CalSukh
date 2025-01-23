import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButton";
export function AuthModal() {
    return(
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Try for free</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[360px]">
                    <DialogTitle>
                        <DialogHeader className="flex flex-row items-center justify-center gap-2">
                          <Image src={Logo} className="size-10" alt="better image"></Image>
                            <h4 className="text-3xl font-semibold">Cal<span className="text-primary">Sukh</span></h4>
                        </DialogHeader>
                    </DialogTitle>
                    <div className="flex gap-3 flex-col mt-5">
                        <form action={async() => {
                            "use server"
                            await signIn("google")
                        }}>
                            <GoogleAuthButton />
                        </form>
                        <form action={async() => {
                            "use server"
                            await signIn("github")
                        }}>
                            <GithubAuthButton />
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}