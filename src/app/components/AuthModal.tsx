import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import { AuthButtons } from "./AuthButtons";
export function AuthModal() {
    return(
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Try for free</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[360px]">
                    <DialogTitle>
                        <DialogHeader className="flex flex-row items-center justify-center gap-2">
                          <Image src={Logo} className="size-10" alt="better image" width={40} height={40}></Image>
                            <h4 className="text-3xl font-semibold">Cal<span className="text-primary">Sukh</span></h4>
                        </DialogHeader>
                    </DialogTitle>
                    <AuthButtons/>
                </DialogContent>
            </Dialog>
        </>
    )
}