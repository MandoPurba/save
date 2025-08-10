import { NextResponse } from "next/server"
import { serverClient } from "@/lib/supabase/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const supabase = await serverClient()
  await supabase.auth.signOut()
  // Clear cookies via serverClient cookies adapter, then redirect
  
  return NextResponse.redirect(new URL("/auth/signin", request.url))
}

export async function GET(request: Request) {
  const supabase = await serverClient()
  await supabase.auth.signOut()
  return NextResponse.redirect(new URL("/auth/signin", request.url))
}
