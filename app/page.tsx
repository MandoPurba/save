import { serverClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await serverClient();
  const {data, error} = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/auth/signin')
  }
  redirect('/dashboard')
 }
