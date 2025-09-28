"use client";

import "../styles/dashboard.css";


import ProgressOverview from "../components/ProgressOverview";
import Notifications from "../components/Notifications";
import ConnectedDevices from "../components/ConnectedDevices";
import UserSettings from "../components/UserSettings";

export default function DashboardPage() {
  return (
    <main className="dashboard-main mt-25">
      <h1 className="dashboard-title">Welcome back, User!</h1>
      <UserSettings/>
      <ProgressOverview />
      <Notifications/>
      <ConnectedDevices/>
    </main>
  );
}
