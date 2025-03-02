import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "../../../public/logo.png";
import { DashboardLinks } from "../components/DashboardLinks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth, signOut } from "../lib/auth";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

async function getData(userId: string | undefined) {
    if (!userId) {
        console.error("User ID is required");
        return null;
    }

    const data = await prisma.user.findUnique({
        where: { id: userId },
        select: { userName: true, grantId: true },
    });

    if (!data?.userName) return redirect("/onboarding");
    if (!data?.grantId) return redirect("/onboarding/grant-id");

    return data;
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const session = await auth(); // Move auth call inside function
    if (!session?.user?.id) return redirect("/"); // Redirect if no user session

    await getData(session.user.id);

    return (
        <div className="min-h-screen w-full grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden md:block border-r bg-muted/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href={"/"} className="flex gap-2">
                            <Image src={Logo} alt="logo" className="size-6" width={40} height={40} />
                            <h4 className="text-xl font-semibold">
                                Cal<span className="text-blue-500">Sukh</span>
                            </h4>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 lg:px-4">
                            <DashboardLinks />
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="md:hidden shrink-0" size={"icon"} variant={"outline"}>
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side={"left"} className="flex flex-col">
                            <nav className="grid gap-2 mt-10">
                                <DashboardLinks />
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <div className="ml-auto flex items-center gap-x-4">
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="p-0 rounded-full">
                                    {session?.user?.image && (
                                        <Image
                                            alt="user image"
                                            src={session.user.image}
                                            className="size-10 rounded-full w-full h-full"
                                            width={50}
                                            height={50}
                                        />
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={"/dashboard/settings"}>Settings</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <form
                                        action={async () => {
                                            "use server";
                                            await signOut();
                                            return redirect("/dashboard");
                                        }}
                                    >
                                        <button>Log Out</button>
                                    </form>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
            </div>
        </div>
    );
}
