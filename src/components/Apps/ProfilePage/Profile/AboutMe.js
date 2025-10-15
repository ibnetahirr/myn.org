"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useAuth } from "@/context/AuthContext";

const AboutMe = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Card>
        <CardBody>
          <p>Loading profile...</p>
        </CardBody>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card>
        <CardBody>
          <p>No user profile found.</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h5>About Me</h5>
      </CardHeader>

      <CardBody>
        <p className="text-muted f-s-13">
          {user.bio && user.bio.trim() !== ""
            ? user.bio
            : "No biography available. You can update your profile to add a short introduction about yourself."}
        </p>

        <div className="about-list">
          <div>
            <span className="fw-medium">
              <i className="ti ti-user"></i> Name
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.name || "Not provided"}
            </span>
          </div>

          <div>
            <span className="fw-medium">
              <i className="ti ti-mail"></i> Email
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.email || "Not provided"}
            </span>
          </div>

          <div>
            <span className="fw-medium">
              <i className="ti ti-phone"></i> Phone
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.phone || "Not provided"}
            </span>
          </div>

          <div>
            <span className="fw-semibold">
              <i className="ti ti-map-pin"></i> City
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.city || "Not specified"}
            </span>
          </div>

          <div>
            <span className="fw-semibold">
              <i className="ti ti-device-laptop"></i> Website
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.website ? (
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-underline"
                >
                  {user.website}
                </a>
              ) : (
                "Not provided"
              )}
            </span>
          </div>

          <div>
            <span className="fw-semibold">
              <i className="ti ti-brand-linkedin"></i> LinkedIn
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.linkedin ? (
                <a
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-underline"
                >
                  {user.linkedin}
                </a>
              ) : (
                "Not linked"
              )}
            </span>
          </div>

          <div>
            <span className="fw-semibold">
              <i className="ti ti-brand-instagram"></i> Instagram
            </span>
            <span className="float-end f-s-13 text-secondary">
              {user.instagram ? (
                <a
                  href={user.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-underline"
                >
                  {user.instagram}
                </a>
              ) : (
                "Not linked"
              )}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutMe;
