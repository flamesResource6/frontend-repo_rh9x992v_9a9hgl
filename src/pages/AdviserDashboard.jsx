import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { Users, FileCheck, CalendarClock, LineChart } from "lucide-react"

function Stat({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white rounded-xl border border-black/5 shadow-sm p-4 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-[#01070f]/70">{label}</p>
        <p className="text-xl font-bold text-[#01070f]">{value}</p>
      </div>
    </div>
  )
}

export default function AdviserDashboard() {
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Stat icon={Users} label="Supervised Groups" value={8} color="bg-[#0c356a]" />
        <Stat icon={FileCheck} label="Docs to Review" value={5} color="bg-[#279eff]" />
        <Stat icon={CalendarClock} label="Consultation Requests" value={3} color="bg-[#0c356a]" />
        <Stat icon={LineChart} label="Avg. Progress" value="64%" color="bg-[#279eff]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Supervised Groups</h2>
          <ul className="divide-y divide-black/5">
            {[1,2,3,4].map(i => (
              <li key={i} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Group {i} — Smart Campus System</p>
                  <p className="text-sm text-[#01070f]/70">Members: 4 • Adviser: You • 58% complete</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-sm rounded-lg bg-[#0c356a] text-white">Review</button>
                  <button className="px-3 py-1.5 text-sm rounded-lg border border-black/10">Open</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Consultation Requests</h2>
          <ul className="space-y-3">
            {[1,2,3].map(i => (
              <li key={i} className="p-3 rounded-lg border border-black/5 flex items-center justify-between">
                <span className="text-sm">Group {i} — Friday, 2:00 PM</span>
                <div className="flex gap-2">
                  <button className="px-2.5 py-1.5 text-xs rounded-lg bg-[#279eff] text-white">Approve</button>
                  <button className="px-2.5 py-1.5 text-xs rounded-lg border border-black/10">Reschedule</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">Progress Overview</h3>
            <div className="h-40 bg-[#279eff]/10 rounded-lg flex items-end p-3 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="flex-1 bg-[#279eff] rounded-t" style={{ height: `${25 + Math.abs(Math.cos(i)) * 60}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
