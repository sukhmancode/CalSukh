import { NylasConfig, nylas } from "@/app/lib/nylas";
import { redirect } from "next/navigation";

export async function GET() {
    const authUrl = nylas.auth.urlForOAuth2({
        clientId:NylasConfig.clientId,
        redirectUri:NylasConfig.redirectUri
    })

    return redirect(authUrl)
}