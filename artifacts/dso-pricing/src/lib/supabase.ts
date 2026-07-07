import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Vendor {
  id: string;
  title: string;
  description: string;
  logo: string | null;
  website: string | null;
  offerTitle: string | null;
  offerDescription: string | null;
  calendarLink: string | null;
  showCalendarLink: boolean;
  coupon: string | null;
  showCoupon: boolean;
  discount: string | null;
  showDiscount: boolean;
  pricingLink: string | null;
  showPricingLink: boolean;
  categoryIds: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author: string | null;
  published_at: string;
  created_at: string;
  published: boolean;
}
