"use client";

import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const { user } = useAuth();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | danger | info

  useEffect(() => {
    if (!user) return;

    // 🚫 If website not found in profile
    if (!user.website) {
      setStatus("danger");
      setData(
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill text-danger me-2 fs-4"></i>
            <span>
              Please add your <strong>website</strong> or{" "}
              <strong>complete your profile</strong> before using this feature.
            </span>
          </div>
          <Link href="/profile" className="btn btn-danger mt-3 mt-md-0">
            Go to Profile
          </Link>
        </div>
      );
      return;
    }

    // ✅ Website exists — run API
    const fetchData = async () => {
      setLoading(true);
      setStatus("info");
      setData("Fetching website data…");

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/n8n/website/public`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ website: user.website }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        let response = json.n8n_response;

        // ✅ Handle array/object formats
        if (Array.isArray(response)) {
          response = response[0]?.output || JSON.stringify(response, null, 2);
        } else if (typeof response === "object") {
          response = response.output || JSON.stringify(response, null, 2);
        }

        // ✅ Basic markdown-like formatting
        const formatted = response
          .replace(/^### (.*$)/gim, "<h4>$1</h4>")
          .replace(/^## (.*$)/gim, "<h3>$1</h3>")
          .replace(/^# (.*$)/gim, "<h2>$1</h2>")
          .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")
          .replace(/\*(.*?)\*/gim, "<i>$1</i>")
          .replace(/\n/g, "<br/>");

        setStatus("success");
        setData(formatted || "No response received");
      } catch (err) {
        console.error(err);
        setStatus("danger");
        setData("An error occurred while loading data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const getAlertClass = () => {
    switch (status) {
      case "danger":
        return "alert alert-danger d-flex align-items-center justify-content-between flex-wrap";
      case "info":
        return "alert alert-primary";
      default:
        return "";
    }
  };

  return (
    <DefaultLayout>
      <div className="container py-4">
        <h3 className="mb-4">
          Website Insights{" "}
          {user?.website && (
            <span className="text-primary">for {user.website}</span>
          )}
        </h3>

        {/* 🔴 or 🔵 Alerts for info/error */}
        {(status === "danger" || status === "info") && (
          <div className={getAlertClass()} role="alert">
            {status === "danger" && typeof data !== "string" ? data : data}
          </div>
        )}

        {/* 🟢 Success output only in card */}
        {status === "success" && (
          <div
            className="card shadow-lg border-success mt-4"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #19875433",
            }}
          >
            <div
              className="card-body"
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: "#2c2c2c",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                padding: "24px",
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: data,
                }}
              />
            </div>
          </div>
        )}

        {/* 🔵 Loading message */}
        {loading && (
          <div className="alert alert-primary mt-3 d-flex align-items-center">
            <div
              className="spinner-border spinner-border-sm text-primary me-2"
              role="status"
            ></div>
            Loading website insights…
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Page;
