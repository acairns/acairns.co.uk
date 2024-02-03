import { redirect } from "@remix-run/cloudflare";

export async function loader() {
    return redirect(`https://discord.gg/4xhhNW9v44`, 301);
}
