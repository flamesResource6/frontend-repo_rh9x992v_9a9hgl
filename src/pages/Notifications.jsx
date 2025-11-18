import { Bell, Mail, MessageSquare, FileText, CheckCircle2, AlertTriangle } from "lucide-react"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"

function Pill({ children, tone = "info" }) {
  const tones = {
    info: "text-[#0c356a] bg-[#0c356a]/10",
    success: "text-emerald-700 bg-emerald-50",
    warning: "text-amber-700 bg-amber-50",
  }
  return <span className={`text-xs font-medium px-2 py-1 rounded-full ${tones[tone]}`}>{children}</span>
}

function NotificationItem({ icon: Icon, title, time, desc, tone = "info" }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-black/5 bg-white hover:shadow-sm transition-shadow">
      <div className="p-2 rounded-md bg-white shadow-sm border border-black/5 text-[#0c356a]">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[#0c356a]">{title}</p>
          <Pill tone={tone}>{time}</Pill>
        </div>
        <p className="text-sm text-[#01070f]/70">{desc}</p>
      </div>
    </div>
  )
}

export default function Notifications() {
  const items = [
    { icon: FileText, title: "Adviser commented on Chapter 2", time: "2h ago", desc: "See inline notes and address citations.", tone: "info" },
    { icon: CheckCircle2, title: "Proposal approved", time: "Yesterday", desc: "Your proposal has been approved by the panel.", tone: "success" },
    { icon: MessageSquare, title: "Consultation confirmed", time: "Mon 4:00 PM", desc: "Your request with Prof. Santos is confirmed.", tone: "success" },
    { icon: AlertTriangle, title: "Deadline approaching", time: "Due Fri", desc: "Chapter 3 draft submission is due this Friday.", tone: "warning" },
    { icon: Mail, title: "Reviewer invited", time: "Last week", desc: "External reviewer has been invited to your defense.", tone: "info" },
  ]

  return (
    <Layout sidebar={<Sidebar />}>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#0c356a]/10 text-[#0c356a]">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-[#0c356a] tracking-tight">Notifications</h1>
            <p className="text-sm text-[#01070f]/70">Stay on top of comments, approvals, and deadlines.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-8 space-y-3">
            {items.map((n, idx) => (
              <NotificationItem key={idx} {...n} />
            ))}
          </section>

          <aside className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5">
              <h2 className="font-semibold text-[#0c356a] mb-3">Filters</h2>
              <div className="flex flex-wrap gap-2">
                <Pill>All</Pill>
                <Pill tone="success">Approvals</Pill>
                <Pill>Comments</Pill>
                <Pill tone="warning">Deadlines</Pill>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-black/5 p-5 mt-6">
              <h2 className="font-semibold text-[#0c356a] mb-2">Digest</h2>
              <p className="text-sm text-[#01070f]/70">You have 3 pending actions and 1 upcoming deadline this week.</p>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  )
}
