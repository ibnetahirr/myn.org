"use client";
import React from "react";
import { Card, CardBody } from "reactstrap";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // ✅ import your AuthContext

const ProfileCard = () => {
  const router = useRouter();
  const { user, loading } = useAuth(); // ✅ get user info from context

  const handleEditClick = () => {
    router.push("/profile/edit"); // ✅ navigate to edit page
  };

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
          <p>No profile data available.</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="card">
      <CardBody className="card-body">
        <div className="profile-container">
          <div className="image-details">
            <div className="profile-image"></div>
            <div className="profile-pic">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                  <label htmlFor="imageUpload">
                    <i className="ti ti-photo-heart"></i>
                  </label>
                </div>
                <div className="avatar-preview">
                  <div id="imgPreview"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="person-details">
            <h5 className="f-w-600">
              {user.name || "Unnamed User"}{" "}
              <img
                width="20"
                height="20"
                src="/images/profile-app/01.png"
                alt="verified-check"
              />
            </h5>

            <p>Yoga Therapist</p>

            <div className="my-2">
              <button
                type="button"
                className="btn b-r-22 btn-primary"
                onClick={handleEditClick}
              >
                <i className="ph ph-pencil-simple"></i> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
