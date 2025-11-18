import { Routes, Route, Navigate, Link } from "react-router-dom"
import Login from "./pages/Login"
import StudentDashboard from "./pages/StudentDashboard"
import AdviserDashboard from "./pages/AdviserDashboard"
import Documents from "./pages/Documents"
import Consultations from "./pages/Consultations"

function Landing() {
  return (
    <div className="min-h-screen bg-[#f2f4f7] text-[#01070f] flex items-center justify-center p-8">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-[#0c356a] mb-2 tracking-tight">ACADTRACK</h1>
        <p className="text-[#01070f]/70 mb-6">A modern workspace for managing theses and capstone projects. Explore the UI concept below.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/login" className="px-4 py-2 rounded-lg bg-[#0c356a] text-white font-semibold">Login</Link>
          <Link to="/student" className="px-4 py-2 rounded-lg border border-black/10">Student Dashboard</Link>
          <Link to="/adviser" className="px-4 py-2 rounded-lg border border-black/10">Adviser Dashboard</Link>
          <Link to="/documents" className="px-4 py-2 rounded-lg border border-black/10">Documents</Link>
          <Link to="/consultations" className="px-4 py-2 rounded-lg border border-black/10">Consultations</Link>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/adviser" element={<AdviserDashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/consultations" element={<Consultations />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
