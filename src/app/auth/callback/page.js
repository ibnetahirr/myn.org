"use client";
import { useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function AuthCallback() {
  useEffect(() => {
    const completeOAuth = async () => {
      console.log("⚡ OAuth callback mounted");

      const { data, error } = await supabase.auth.getSession();
      console.log("🔍 getSession:", { data, error });

      const token = data?.session?.access_token;
      if (!token) {
        console.log("❌ No Supabase session token on callback");
        window.location.href = "/auth/login";
        return;
      }

      try {
        const res = await fetch("/api/auth/supabase-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ supabase_token: token }),
        });
        console.log("🔍 /supabase-login status:", res.status);
        if (res.ok) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/auth/login";
        }
      } catch (e) {
        console.error("🔥 OAuth exchange failed:", e);
        window.location.href = "/auth/login";
      }
    };

    completeOAuth();
  }, []);

  return <p style={{textAlign:"center",marginTop:16}}>Completing login…</p>;
}
