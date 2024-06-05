import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const userUpdate = async ({
  email,
  first_name,
  last_name,
  profile_image_url,
  user_id,
}: {
  email: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  user_id: string;
}) => {
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
      .from("user")
      .update([{ email, first_name, last_name, profile_image_url, user_id }])
      .eq("user_id", user_id);

    if (error?.code) return error;

    // Check if the user has a billing record, if not, create one
    const { data: billingData, error: billingError } = await supabase
      .from("billing")
      .select("*")
      .eq("user_id", user_id);

    if (billingError?.code) return billingError;

    if (billingData && billingData.length === 0) {
      // No billing record exists, create one
      const { error: billingCreationError } = await supabase
        .from("billing")
        .insert([{
          user_id: user_id,
          plan: 'STANDARD'
        }]);

      if (billingCreationError?.code) return billingCreationError;
    }

    return data;
  } catch (error: any) {
    return error;
  }
};