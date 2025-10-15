"use client";

import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  const [data, setData] = useState([]);   // ✅ no <any[]>
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/n8n/jobs/public`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            Country: "us",
            Location: "California",
            max_jobs_count: 5,
            Role: "Web Developer",
          }),
        });

        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json.n8n_response || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className="container py-4">
        <h3 className="mb-4">Job Listings</h3>

        {loading ? (
          <div className="alert alert-info">Loading jobs…</div>
        ) : data && data.length > 0 ? (
          <div className="row">
            {data.map((job) => (
              <div className="col-md-6 col-lg-4 mb-4" key={job.jobKey}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.companyName}</h6>
                    <p className="mb-1">
                      <i className="bi bi-geo-alt"></i>{" "}
                      {job.location?.formattedAddressShort}
                    </p>
                    {job.salary?.salaryText && (
                      <p className="fw-bold text-success">{job.salary.salaryText}</p>
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
          <div className="alert alert-warning">No jobs found.</div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Page;
