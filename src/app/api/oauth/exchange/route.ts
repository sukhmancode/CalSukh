import { auth } from "@/app/lib/auth";
import prisma from "@/app/lib/db";
import { NylasConfig, nylas } from "@/app/lib/nylas";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
    const session = await auth();
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    console.log("code is",code);
    

    if(!code) {
        return Response.json({
            message:'no code'
        },{
            status:400
        })
    }
    try {
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: NylasConfig.apiKey,
            clientId:NylasConfig.clientId ,
            redirectUri:NylasConfig.redirectUri,
            code:code
        })
        
        const { grantId,email } = response;
        await prisma.user.update({
            where: {
                id:session?.user?.id
            },data: {
                grantId:grantId,
                grantEmail:email
            }
        })
    }
    catch(error) {
        console.log(error)
    }
   return redirect("/dashboard")
}