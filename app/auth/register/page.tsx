"use client";

import Link from "next/link";
import "../styles/auth.css"
import Goals from "../components/Goals";
import TrainingPrefer from "../components/TrainingPrefer";

export default function RegisterForm() {
  return (
    <main className="page-bg">
      <section className="form-section">
        <div className="form-card">
          <h2 className="form-title">Create Your Account</h2>

          <form className="form-fields">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required className="input-field" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required className="input-field" />
            </div>

            <Goals />
            <TrainingPrefer />

            <button type="submit" className="primary btn-full">
              Register
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-btn">
              <span>🔍</span> Sign up with Google
            </button>
            <button className="social-btn">
              <span>🍎</span> Sign up with Apple
            </button>
            <button className="social-btn">
              <span>📘</span> Sign up with Facebook
            </button>
          </div>

          <p className="already-account">
            Already have an account?{" "}
            <Link href="/auth/login" className="link-primary">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
