import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/sidebar/nav-sidebar"

function DashboardPage() {
  return <p>Dashboard page content</p>
}

function SettingsPage() {
  return <p>Settings page content</p>
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
