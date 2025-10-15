"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; 

const SignInBg = () => {
  const { login, loading, socialLogin } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password); 
      window.location.href = "/dashboard"; 
    } catch (err) {
      setError(err.message || "Something went wrong");
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
              <form className="app-form" onSubmit={handleLogin}>
                <div className="mb-3 text-center">
                  <h3>Login to your Account</h3>
                  <p className="f-s-12 text-secondary">
                    Get started with our app, just log in and enjoy the experience.
                  </p>
                </div>

                {error && <p className="text-danger text-center">{error}</p>}

                <div className="mb-3">
                  <label className="form-label">Email address</label>
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
                  <Link
                    href="/admin-pages/auth_pages/password_reset"
                    className="link-primary float-end"
                  >
                    Forgot Password?
                  </Link>
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
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </div>

                <div className="app-divider-v justify-content-center">
                  <p>OR</p>
                </div>

                <div className="mb-3 text-center">
                    <button
                      type="button"
                      className="btn btn-primary icon-btn b-r-5 m-1"
                      onClick={() => socialLogin("facebook")}
                    >
                      <i className="ti ti-brand-facebook text-white"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger icon-btn b-r-5 m-1"
                      onClick={() => socialLogin("google")}
                    >
                      <i className="ti ti-brand-google text-white"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-info icon-btn b-r-5 m-1"
                      onClick={() => socialLogin("linkedin_oidc")}
                    >
                      <i className="ti ti-brand-linkedin text-white"></i>
                    </button>
                  </div>

                <div className="text-center">
                  <span>Don&apos;t have an account? </span>
                  <Link
                    href="/auth/signup"
                    className="link-primary text-decoration-underline"
                  >
                    Sign up
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

export default SignInBg;
