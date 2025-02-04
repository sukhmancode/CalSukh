import { signIn } from "../lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./SubmitButton";

export function AuthButtons() {

    return (
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
    )
}

