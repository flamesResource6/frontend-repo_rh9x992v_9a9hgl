import { GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#f2f4f7]">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-black/5 p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#0c356a] text-white flex items-center justify-center shadow-sm">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#0c356a]/80">ACADTRACK</p>
              <h1 className="text-2xl font-extrabold text-[#01070f]">Welcome back</h1>
              <p className="text-sm text-[#01070f]/70">Sign in to continue</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#01070f]">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-4 focus:ring-[#279eff]/20 focus:border-[#279eff]" placeholder="name@university.edu" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#01070f]">Password</label>
              <input type="password" className="w-full px-3 py-2 rounded-lg border border-black/10 focus:outline-none focus:ring-4 focus:ring-[#279eff]/20 focus:border-[#279eff]" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-[#0c356a] hover:bg-[#0a2a54] text-white font-semibold py-2.5 rounded-lg shadow-sm transition-colors">Login</button>
          </form>

          <p className="mt-6 text-center text-sm text-[#01070f]/60">Student demo? <Link to="/student" className="text-[#279eff] font-medium">Open dashboard</Link></p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center p-8 bg-gradient-to-br from-[#0c356a] to-[#279eff]">
        <div className="max-w-lg text-white">
          <h2 className="text-3xl font-bold mb-3">Manage your research with clarity</h2>
          <p className="text-white/80">Track milestones, collaborate with advisers, and keep documents organized — all in one academic workspace.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {["Documents", "Consultations", "Progress"].map((t) => (
              <div key={t} className="bg-white/10 rounded-xl p-4 shadow-sm">
                <p className="font-semibold">{t}</p>
                <p className="text-sm text-white/70">Streamlined</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
