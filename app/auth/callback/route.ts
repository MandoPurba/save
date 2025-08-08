import { serverClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log("DATA", request.url);
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    console.log(`[Auth Callback] Received error: ${error}`);

    let next = searchParams.get('next') || 'dashboard';
    if (!next.startsWith('/')) {
        // if "next" is not a relative URL, use the default
        next = 'dashboard'
    }

    if (code) {
        const supabase = await serverClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
            const forwardedHost = request.headers.get('x-forwarded-host'); // original origin berfore load balancer
            const isLocalEnv = process.env.NODE_ENV !== 'production';
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/signin?error=no_code&message=No+authorization+code+provided`)
}