"use client";

import { useRouter } from "next/navigation";
import "./style/pricing.css";

export default function PricingPage() {
  const router = useRouter();

  return (
    <section className="pricing mt-20">
      <h1 className="pricing-title">Choose Your Plan</h1>
      <p className="pricing-subtitle">
        Select the plan that fits your fitness journey with DVeb Motion™
      </p>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="card">
          <h2 className="card-title">Free Plan</h2>
          <p className="card-price">€0 / month</p>
          <ul className="card-features">
            <li>✅ Workouts</li>
            <li>✅ Basic Nutrition</li>
            <li>✅ Community Access</li>
            <li>❌ Advanced Analytics</li>
            <li>❌ Personal Plans</li>
          </ul>
          <button
            className="btn-primary"
            onClick={() => router.push("/auth/register")}
          >
            Start Free
          </button>
        </div>

        {/* Premium Plan */}
        <div className="card premium">
          <h2 className="card-title">Premium Plan</h2>
          <p className="card-price">
            €9.99 <span>/ month</span>
          </p>
          <p className="card-discount">Save 20% with yearly plan</p>
          <ul className="card-features">
            <li>✅ Workouts</li>
            <li>✅ Advanced Nutrition</li>
            <li>✅ Analytics & Reports</li>
            <li>✅ Personalized Plans</li>
            <li>✅ Offline Mode</li>
            <li>✅ Priority Support</li>
          </ul>
          <button
            className="btn-secondary"
            onClick={() => router.push("/auth/subscription")}
          >
            Upgrade to Premium
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="comparison">
        <h2 className="comparison-title">Plan Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Workouts</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Nutrition</td>
              <td>Basic</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Personalized Plans</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Offline Mode</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Community</td>
              <td>Priority</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
