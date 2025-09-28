"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import "../styles/auth.css";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Ovde ide autentikacija (trenutno samo simulacija)
    router.push("/dashboard");
  };

  return (
    <main className="login-page">
      <section className="login-container">
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            <div className="forgot-password">
              <Link href="/auth/reset">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn-primary">
              Log In
            </button>
          </form>

          <div className="divider">
            <div className="line"></div>
            <span>or continue with</span>
            <div className="line"></div>
          </div>

          <div className="social-login">
            <button className="social-btn">
              <span>🔍</span> Log in with Google
            </button>
            <button className="social-btn">
              <span>🍎</span> Log in with Apple
            </button>
            <button className="social-btn">
              <span>📘</span> Log in with Facebook
            </button>
          </div>

          <p className="signup-text">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register">Sign up</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
