"use client";

import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | danger | info

  useEffect(() => {
    if (!user) return;

    // 🚫 Check for missing city
    if (!user.city) {
      setStatus("danger");
      setData(
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill text-danger me-2 fs-4"></i>
            <span>
              Please add your <strong>city</strong> or{" "}
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

    // ✅ Fetch jobs if city is present
    const fetchData = async () => {
      setLoading(true);
      setStatus("info");
      setData("Fetching jobs…");

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/n8n/jobs/public`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            Country: "us",
            Location: user.city,
            max_jobs_count: 5,
            Role: "Yoga Therapist",
          }),
        });

        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json.n8n_response || []);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("danger");
        setData("Error loading jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  return (
    <DefaultLayout>
      <div className="container py-4">
        <h3 className="mb-4">
          Yoga Therapist Jobs{" "}
          {user?.city && (
            <span className="text-primary">in {user.city}</span>
          )}
        </h3>

        {/* 🔴 Alert for missing city or error */}
        {status === "danger" && (
          <div className="alert alert-danger" role="alert">
            {data}
          </div>
        )}

        {/* 🔵 Info alert while loading */}
        {status === "info" && (
          <div className="alert alert-primary" role="alert">
            {data}
          </div>
        )}

        {/* 🟢 Success — show job results */}
        {status === "success" && data && data.length > 0 ? (
          <div className="row">
            {data.map((job, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={`${job.jobKey}-${index}`}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {job.companyName}
                    </h6>
                    <p className="mb-1">
                      <i className="bi bi-geo-alt"></i>{" "}
                      {job.location?.formattedAddressShort}
                    </p>
                    {job.salary?.salaryText && (
                      <p className="fw-bold text-success">
                        {job.salary.salaryText}
                      </p>
                    )}
                    <div className="small text-muted mb-2">
                      Published: {job.datePublished}
                    </div>
                    <div
                      className="flex-grow-1 overflow-auto mb-2"
                      style={{ maxHeight: "150px" }}
                      dangerouslySetInnerHTML={{
                        __html: job.descriptionHtml || "",
                      }}
                    />
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      className="btn btn-primary mt-auto"
                      rel="noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          status === "success" && (
            <div className="alert alert-warning">No jobs found.</div>
          )
        )}

        {loading && (
          <div className="alert alert-primary mt-3">Loading data…</div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Page;
