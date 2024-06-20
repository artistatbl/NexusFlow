"use server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const readSiteDomain = async (domain: string) => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  try {
    const { data, error } = await supabase
      .from("Domain")
      .select()
      .eq("subdomain", domain)
      // .single();

    if (error) {
      console.error("Error fetching domain data:", error);
      return { status: 500, message: "Internal server error" };
    }

    if (!data) {
      return { status: 404, message: "Domain not found." };
    }

    return { status: 200, domain: data };
  } catch (error: any) {
    console.error("Error fetching domain data:", error);
    return { status: 500, message: "Internal server error" };
  }
};
