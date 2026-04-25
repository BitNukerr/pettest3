import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jxezoimfmfqjzhacstng.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_6V0F0kJGuSH9AzttAqLSrg_E9IT5w6K";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
