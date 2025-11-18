import { CheckCircle2, Clock, CalendarDays, BarChart3, Target } from "lucide-react"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"

function ProgressBar({ value }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#0c356a]">Overall Progress</span>
        <span className="text-sm font-semibold text-[#0c356a]">{value}%</span>
      </div>
      <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#279eff] rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function Milestone({ title, due, status }) {
  const statusStyles = {
    completed: "text-emerald-600 bg-emerald-50 border-emerald-100",
    pending: "text-amber-600 bg-amber-50 border-amber-100",
    overdue: "text-rose-600 bg-rose-50 border-rose-100",
  }[status]

  const Icon = status === "completed" ? CheckCircle2 : status === "pending" ? Clock : CalendarDays

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${statusStyles}`}>
      <div className="p-2 rounded-md bg-white shadow-sm border border-black/5">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-[#0c356a]">{title}</p>
        <p className="text-sm text-[#01070f]/70">Due {due}</p>
      </div>
      <span className="text-xs font-medium px-2 py-1 rounded-full bg-white border border-black/5 capitalize">
        {status}
      </span>
    </div>
  )
}

function ContributionBar({ name, percent, color }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-[#01070f]/70">{percent}%</span>
      </div>
      <div className="h-2.5 bg-black/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${percent}%`, backgroundColor: color }} />
      </div>
    </div>
  )
}

export default function Progress() {
  const overall = 62
  const milestones = [
    { title: "Proposal Approved", due: "Mar 12, 2025", status: "completed" },
    { title: "Chapter 1-3 Draft", due: "Apr 5, 2025", status: "completed" },
    { title: "Methodology Setup", due: "May 2, 2025", status: "pending" },
    { title: "Data Collection", due: "May 28, 2025", status: "pending" },
    { title: "Defense Rehearsal", due: "Jun 15, 2025", status: "overdue" },
  ]

  const members = [
    { name: "Ana", percent: 70, color: "#279eff" },
    { name: "Bryan", percent: 58, color: "#0c356a" },
    { name: "Chloe", percent: 49, color: "#7cafff" },
  ]

  return (
    <Layout sidebar={<Sidebar />}>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#0c356a]/10 text-[#0c356a]">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-[#0c356a] tracking-tight">Progress</h1>
            <p className="text-sm text-[#01070f]/70">Track milestones, deadlines, and team contributions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 bg-white rounded-xl shadow-sm border border-black/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#0c356a]">Thesis Progress</h2>
              <div className="flex items-center gap-2 text-sm text-[#01070f]/70">
                <Target className="w-4 h-4" />
                <span>Goal: 100% by Jun 30</span>
              </div>
            </div>
            <ProgressBar value={overall} />

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[#0c356a] mb-3">Upcoming Milestones</h3>
              <div className="space-y-3">
                {milestones.map((m, idx) => (
                  <Milestone key={idx} {...m} />
                ))}
              </div>
            </div>
          </section>

          <section className="lg:col-span-5 bg-white rounded-xl shadow-sm border border-black/5 p-5">
            <h2 className="font-semibold text-[#0c356a] mb-4">Team Contributions</h2>
            <div className="space-y-4">
              {members.map((m) => (
                <ContributionBar key={m.name} {...m} />
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[#0c356a] mb-2">Upcoming Deadlines</h3>
              <div className="grid grid-cols-3 gap-3 text-sm">
                {[
                  { day: "Mon", date: 12 },
                  { day: "Tue", date: 13 },
                  { day: "Wed", date: 14 },
                  { day: "Thu", date: 15 },
                  { day: "Fri", date: 16 },
                  { day: "Sat", date: 17 },
                ].map((d) => (
                  <div key={d.date} className="p-3 rounded-lg border border-black/5 bg-[#f2f4f7]">
                    <p className="text-xs text-[#01070f]/70">{d.day}</p>
                    <p className="font-semibold text-[#0c356a]">{d.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
