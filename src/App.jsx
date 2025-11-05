import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavSidebar from "./components/sidebar/nav-sidebar";
import { SiteHeader } from "./components/header/header-layout";

function DashboardPage() {
  return <p>Dashboard page content</p>;
}

function SettingsPage() {
  return <p>Settings page content</p>;
}

function App() {
  return (
    <BrowserRouter>
      <NavSidebar>
        <div className="flex flex-col h-screen flex-1">
          <SiteHeader />
          <main className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </NavSidebar>
    </BrowserRouter>
  );
}

export default App;
