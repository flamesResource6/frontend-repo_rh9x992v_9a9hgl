import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { Calendar, Clock } from "lucide-react"

const slots = [
  { day: "Mon", time: "10:00 - 12:00" },
  { day: "Wed", time: "13:00 - 15:00" },
  { day: "Fri", time: "14:00 - 17:00" },
]

export default function Consultations() {
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4 text-[#0c356a]"><Calendar className="w-5 h-5"/><h2 className="text-lg font-bold">Schedule</h2></div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => (
              <button key={i} className={`aspect-square rounded-lg text-sm ${
                i % 7 === 0 ? 'bg-[#279eff] text-white' : 'bg-black/5 hover:bg-black/10'
              }`}>{i+1}</button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Adviser Availability</h2>
          <ul className="space-y-2">
            {slots.map(s => (
              <li key={s.day} className="p-3 rounded-lg border border-black/5 flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#279eff]"/> {s.day}</span>
                <span className="text-sm text-[#01070f]/70">{s.time}</span>
              </li>
            ))}
          </ul>
          <button className="w-full mt-4 bg-white border-2 border-[#0c356a] text-[#0c356a] hover:bg-[#0c356a] hover:text-white transition font-semibold py-2.5 rounded-lg">Request Consultation</button>
        </div>
      </div>
    </Layout>
  )
}
