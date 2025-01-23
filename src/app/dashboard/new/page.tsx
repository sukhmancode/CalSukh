import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

 const New = () => {
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center">
        <Card>
            <CardHeader>
                <CardTitle>Add new appointment Type</CardTitle>
                <CardDescription>Create new appointment that allows people to book you.</CardDescription>
            </CardHeader>

            <form >
                <CardContent>
                    <div className="mt-3 flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input placeholder="30 minute meeting"/>
                    </div>
                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>URL Slug</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                            <span>CalSukh.com/</span>
                            <Input placeholder="Example-url-1"/> 
                        </div>
                        
                    </div>

                    <div className="mt-5 flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <div className="flex rounded-md items-center justify-center gap-2">
                           <Textarea placeholder="Meet me in the meeting."/> 
                        </div>
                        
                    </div>

                </CardContent>
            </form>
        </Card>
    </div>
  )
}
export default New;