import { Home, FileText, Calendar, BarChart3, Bell } from "lucide-react"
import { NavLink } from "react-router-dom"

const nav = [
  { to: "/student", label: "Dashboard", icon: Home },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/consultations", label: "Consultations", icon: Calendar },
  { to: "/progress", label: "Progress", icon: BarChart3 },
  { to: "/notifications", label: "Notifications", icon: Bell },
]

export default function Sidebar() {
  return (
    <ul className="space-y-1">
      {nav.map(({ to, label, icon: Icon }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive ? "bg-[#0c356a] text-white" : "text-[#0c356a] hover:bg-[#0c356a]/5"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
