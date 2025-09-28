"use client";

import { useState } from "react";
import "../styles/dashboard.css";

export default function UserSettings() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const themes = ["light", "dark", "system"];
  const languages = [
    { code: "en", label: "English" },
    { code: "sr", label: "Srpski" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <section className="settings-section">
      <h2 className="section-title">User Settings</h2>

      {/* Theme Selection */}
      <div className="settings-item">
        <label className="settings-label">Theme</label>
        <div className="theme-options">
          {themes.map((t) => (
            <button
              key={t}
              className={`theme-btn ${theme === t ? "active" : ""}`}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div className="settings-item">
        <label className="settings-label" htmlFor="language-select">
          Language
        </label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="settings-select"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Backup */}
      <div className="settings-item">
        <label className="settings-label">Backup</label>
        <div className="backup-actions">
          <button className="btn-primary">Export Data</button>
          <button className="btn-secondary">Restore Data</button>
        </div>
      </div>
    </section>
  );
}
