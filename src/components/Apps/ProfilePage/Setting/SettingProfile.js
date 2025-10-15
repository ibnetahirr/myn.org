"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useAuth } from "@/context/AuthContext";

function SettingProfile() {
  const { user, token, fetchProfile } = useAuth(); // 🔹 get from context
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    instagram: "",
    city: "",
    bio: "",
  });
  const [message, setMessage] = useState("");

  // Fill form when user context is loaded
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        website: user.website || "",
        linkedin: user.linkedin || "",
        instagram: user.instagram || "",
        city: user.city || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Using token:", token);

    const res = await fetch("http://127.0.0.1:8000/profile/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
       },
      credentials: "include",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Profile updated successfully!");
      await fetchProfile(token); // 🔹 refresh AuthContext profile
    } else {
      setMessage(data.detail || "Update failed");
    }
  };

  return (
    <Card className="setting-profile-tab">
      <CardHeader>
        <h5>Profile</h5>
      </CardHeader>
      <CardBody>
        <div className="profile-tab profile-container">
          {/* Profile Picture Section */}
          <div className="image-details">
            <div className="profile-image"></div>
            <div className="profile-pic">
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <Input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" />
                  <Label htmlFor="imageUpload">
                    <i className="ti ti-photo-heart"></i>
                  </Label>
                </div>
                <div className="avatar-preview">
                  <div id="imgPreview"></div>
                </div>
              </div>
            </div>
          </div>

          {/* User Info Form */}
          <Form className="app-form" onSubmit={handleSubmit}>
            <h5 className="mb-2 text-dark fw-bold">Personal Information</h5>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Website</Label>
                  <Input
                    type="text"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    value={form.website}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>LinkedIn</Label>
                  <Input
                    type="text"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={form.linkedin}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Instagram</Label>
                  <Input
                    type="text"
                    name="instagram"
                    placeholder="https://instagram.com/username"
                    value={form.instagram}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label>Bio</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <div className="app-divider-v dotted my-3"></div>

              <Col md="12">
                <div className="text-end">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </div>
                {message && <p className="mt-2">{message}</p>}
              </Col>
            </Row>
          </Form>
        </div>
      </CardBody>
    </Card>
  );
}

export default SettingProfile;
