import { Menu, Bell, LogOut, User } from "lucide-react"
import { Link } from "react-router-dom"
import BrandHeader from "./BrandHeader"

export default function Layout({ sidebar, children }) {
  return (
    <div className="min-h-screen bg-[#f2f4f7] text-[#01070f]">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg border border-black/5 bg-white shadow-sm md:hidden" aria-label="Toggle menu">
              <Menu className="w-5 h-5 text-[#0c356a]" />
            </button>
            <Link to="/" className="hidden sm:block">
              <BrandHeader />
            </Link>
            <Link to="/" className="sm:hidden text-xl font-extrabold tracking-tight text-[#0c356a]">ACADTRACK</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/notifications" className="relative p-2 rounded-lg hover:bg-black/5" aria-label="Notifications">
              <Bell className="w-5 h-5 text-[#0c356a]" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#279eff]"></span>
            </Link>
            <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Account">
              <User className="w-5 h-5 text-[#0c356a]" />
            </button>
            <button className="p-2 rounded-lg hover:bg-black/5" aria-label="Logout">
              <LogOut className="w-5 h-5 text-[#0c356a]" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 xl:col-span-2 hidden lg:block">
          <nav className="bg-white rounded-xl shadow-sm border border-black/5 p-3 sticky top-20">
            {sidebar}
          </nav>
        </aside>
        <main className="lg:col-span-9 xl:col-span-10">
          {children}
        </main>
      </div>

      <footer className="py-8 text-center text-sm text-[#01070f]/60">© {new Date().getFullYear()} ACADTRACK</footer>
    </div>
  )
}
