"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";

const SignUpBg = () => {
  const [fullName, setFullName] = useState("");  // 🔹 changed to fullName
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,   // 🔹 send full_name
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Signup failed");

      setSuccess(data.message || "Account created! Please verify your email.");
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <div className="login-form-container">
            <div className="my-4 text-center">
              <Link className="logo d-inline-block" href="/">
                <img
                  src="/images/logo/myn.png"
                  className="img-fluid"
                  alt="logo"
                  style={{ maxWidth: "50px", height: "auto" }}
                />
              </Link>
            </div>

            <div className="form_container">
              <form className="app-form p-3" onSubmit={handleSignup}>
                <div className="mb-3 text-center">
                  <h3>Create Account</h3>
                  <p className="f-s-12 text-secondary">Get started For Free Today.</p>
                </div>

                {error && <p className="text-danger text-center">{error}</p>}
                {success && <p className="text-success text-center">{success}</p>}

                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck1" />
                  <label className="form-check-label" htmlFor="formCheck1">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-100"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>
                </div>

                <div className="app-divider-v justify-content-center">
                  <p>OR</p>
                </div>

                <div className="mb-3 text-center">
                  <button type="button" className="btn btn-primary icon-btn b-r-5 m-1">
                    <i className="ti ti-brand-facebook text-white"></i>
                  </button>
                  <button type="button" className="btn btn-danger icon-btn b-r-5 m-1">
                    <i className="ti ti-brand-google text-white"></i>
                  </button>
                  <button type="button" className="btn btn-dark icon-btn b-r-5 m-1">
                    <i className="ti ti-brand-github text-white"></i>
                  </button>
                </div>

                <div className="text-center">
                  <Link
                    href="/admin-pages/other_pages/terms_condition"
                    className="text-secondary text-decoration-underline"
                  >
                    Terms of use &amp; Conditions
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpBg;
