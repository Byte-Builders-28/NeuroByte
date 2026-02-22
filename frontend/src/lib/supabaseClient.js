import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pvlbekgpzwefinffszrr.supabase.co";
const supabaseAnonKey = "sb_publishable_5oQN4ibvbFKawKXh3l61BA_-6BrVJW7";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
