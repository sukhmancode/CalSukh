import { Button } from "@/components/ui/button"
import { Ban, PlusCircle } from "lucide-react"
import Link from "next/link"

interface iAppProps  {
    title:string,
    description:string,
    buttonText:string,
    href:string,

}
export const EmptyEvent = ({title,description,buttonText,href}:iAppProps) => {
    return (
        <div className="flex flex-1 flex-col h-full items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
            <Ban className="size-10 text-primary"/>

            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mb-8 mt-2 text-sm max-w-xs mx-auto text-muted-foreground">{description}</p>

            <Button asChild>
                <Link href={href}>
                    <PlusCircle/>
                    {buttonText}
                </Link>
            </Button>

        </div>
    )
}