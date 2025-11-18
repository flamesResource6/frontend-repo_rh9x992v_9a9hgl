import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { Calendar, FileText, MessageSquare, TrendingUp } from "lucide-react"

function Card({ title, children, accent = false }) {
  return (
    <div className={`bg-white rounded-xl border border-black/5 shadow-sm p-4 ${accent ? 'ring-2 ring-[#279eff]/30' : ''}`}>
      <h3 className="text-sm font-semibold text-[#01070f]/80 mb-2">{title}</h3>
      {children}
    </div>
  )
}

export default function StudentDashboard() {
  const completion = 62
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Upcoming Consultation" accent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[#01070f]">Wed, 10:30 AM</p>
              <p className="text-sm text-[#01070f]/70">With Dr. Santos (Room 402)</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#279eff]/10 text-[#279eff] flex items-center justify-center"><Calendar className="w-5 h-5"/></div>
          </div>
        </Card>
        <Card title="Latest Feedback">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0c356a]/10 text-[#0c356a] flex items-center justify-center"><MessageSquare className="w-5 h-5"/></div>
            <div>
              <p className="font-semibold">Revise methodology section</p>
              <p className="text-sm text-[#01070f]/70">Due by Friday</p>
            </div>
          </div>
        </Card>
        <Card title="Milestones">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between"><span>Proposal Defense</span><span className="text-green-600 font-medium">Done</span></li>
            <li className="flex items-center justify-between"><span>Chapter 3 Draft</span><span className="text-yellow-600 font-medium">In Progress</span></li>
            <li className="flex items-center justify-between"><span>Initial Results</span><span className="text-gray-500 font-medium">Pending</span></li>
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Progress</h2>
            <div className="flex items-center gap-2 text-[#279eff]"><TrendingUp className="w-4 h-4"/><span className="text-sm font-medium">Weekly +8%</span></div>
          </div>
          <div className="h-48 bg-[#279eff]/10 rounded-lg flex items-end p-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 bg-[#279eff] rounded-t" style={{ height: `${20 + Math.abs(Math.sin(i)) * 70}%` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Thesis Completion</h2>
          <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#0c356a] rounded-full" style={{ width: `${completion}%` }}></div>
          </div>
          <p className="mt-2 text-sm text-[#01070f]/70">{completion}% complete</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Recent Documents</h2>
          <ul className="space-y-3">
            {[1,2,3].map(i => (
              <li key={i} className="flex items-center justify-between p-3 rounded-lg border border-black/5 hover:bg-black/5 transition">
                <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-md bg-[#0c356a]/10 text-[#0c356a] flex items-center justify-center"><FileText className="w-4 h-4"/></div><div><p className="font-medium">Chapter {i}.pdf</p><p className="text-xs text-[#01070f]/60">Edited 2d ago</p></div></div>
                <button className="text-sm text-[#279eff] font-medium">Open</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-black/5 shadow-sm p-6">
          <h2 className="text-lg font-bold mb-3">Consultations</h2>
          <ul className="space-y-3">
            {["Requested","Approved","Completed"].map((s, i) => (
              <li key={s} className="p-3 rounded-lg border border-black/5 flex items-center justify-between">
                <span className="text-sm">Meeting {i+1}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${i===0? 'bg-yellow-100 text-yellow-700' : i===1? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
