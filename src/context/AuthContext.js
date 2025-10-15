"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);   // full profile from backend
  const [loading, setLoading] = useState(true);

  // Load profile on mount
  useEffect(() => {
    fetchProfile();
  }, []);


  // ...
const fetchProfile = async () => {
  try {
    const res = await fetch(`/api/auth/me`, { method: "GET", credentials: "include" });
    if (res.ok) setUser(await res.json());
    else setUser(null);
  } catch (e) {
    console.error("Profile fetch failed:", e);
    setUser(null);
  } finally {
    setLoading(false);
  }
};

const login = async (email, password) => {
  setLoading(true);
  try {
    const res = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Login failed");
    await fetchProfile();
    return true;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  } finally {
    setLoading(false);
  }
};

const logout = async () => {
  try {
    await fetch(`/api/auth/logout`, { method: "POST", credentials: "include" });
  } catch (e) {
    console.error("Logout failed:", e);
  }
  setUser(null);
  window.location.href = "/auth/login";
};

const authedFetch = async (url, options = {}) => {
  let res = await fetch(url.startsWith("/") ? url : `/api${url}`, {
    ...options,
    credentials: "include",
  });
  if (res.status === 401) {
    const refreshRes = await fetch(`/api/auth/refresh`, { method: "POST", credentials: "include" });
    if (refreshRes.ok) {
      res = await fetch(url.startsWith("/") ? url : `/api${url}`, {
        ...options,
        credentials: "include",
      });
    }
  }
  return res;
};

// Social login unchanged, but keep redirectTo same origin:
const socialLogin = async (provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${window.location.origin}/auth/callback` },
  });
  if (error) throw error;
};
// ...


  return (
    <AuthContext.Provider
      value={{
        user,        // full profile from /auth/me
        loading,
        login,
        logout,
        authedFetch,
        fetchProfile,
        socialLogin, // <- new
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
