"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton({ className = "" }) {
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:8000/auth/logout", {
        method: "POST",
        credentials: "include", // send cookies
      });

      if (!res.ok) throw new Error("Logout failed");

      // Redirect to login page
      router.push("/admin-pages/auth_pages/sign_in");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
   <a className="mb-0 text-danger" href="#" onClick={handleLogout}>
    <i className="ph-duotone ph-sign-out pe-1 f-s-20"></i> Log Out
  </a>
  );
}
