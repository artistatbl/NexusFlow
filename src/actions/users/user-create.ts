import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const userCreate = async ({
  email,
  name,
  profileImage,
  user_id,
}: {
  email: string;
  name: string;
  profileImage: string;
  user_id: string;
}) => {
  const cookieStore = cookies();

  console.log("Supabase URL:", supabaseUrl);
  console.log("Supabase Key:", supabaseAnonKey);

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
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
      .from("User")
      .insert([{ email, name, profileImage, user_id }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return error;
    }

    return data;
  } catch (error: any) {
    console.error("Catch error:", error.message);
    return error;
  }
};
