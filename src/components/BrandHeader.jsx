import { GraduationCap } from "lucide-react"

export default function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#0c356a] text-white flex items-center justify-center shadow-sm">
        <GraduationCap className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-widest text-[#0c356a]/80">ACADTRACK</p>
        <h1 className="text-[22px] font-extrabold leading-none text-[#01070f]">Thesis & Capstone Manager</h1>
      </div>
    </div>
  )
}
