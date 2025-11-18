import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import { Eye, PenLine, Download, UploadCloud, FileText } from "lucide-react"

const docs = [
  { name: "Chapter 1 - Introduction.pdf", version: "v3", updated: "2d ago" },
  { name: "Chapter 2 - Review.pdf", version: "v1", updated: "5d ago" },
  { name: "Chapter 3 - Methodology.pdf", version: "v2", updated: "1d ago" },
]

export default function Documents() {
  return (
    <Layout sidebar={<Sidebar />}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-black/5 shadow-sm">
          <div className="p-4 flex items-center justify-between border-b border-black/5">
            <h2 className="text-lg font-bold">Documents</h2>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#279eff] text-white"><UploadCloud className="w-4 h-4"/> Upload</button>
          </div>
          <div className="p-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-[#01070f]/70">
                  <th className="py-2">Name</th>
                  <th className="py-2">Version</th>
                  <th className="py-2">Updated</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d) => (
                  <tr key={d.name} className="border-t border-black/5">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-md bg-[#0c356a]/10 text-[#0c356a] flex items-center justify-center"><FileText className="w-4 h-4"/></div>
                        <span className="font-medium">{d.name}</span>
                      </div>
                    </td>
                    <td className="py-3">{d.version}</td>
                    <td className="py-3">{d.updated}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="px-2.5 py-1.5 text-xs rounded-lg border border-black/10 inline-flex items-center gap-1"><Eye className="w-3.5 h-3.5"/> View</button>
                        <button className="px-2.5 py-1.5 text-xs rounded-lg border border-black/10 inline-flex items-center gap-1"><PenLine className="w-3.5 h-3.5"/> Annotate</button>
                        <button className="px-2.5 py-1.5 text-xs rounded-lg bg-[#0c356a] text-white inline-flex items-center gap-1"><Download className="w-3.5 h-3.5"/> Download</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-black/5 shadow-sm p-4">
            <h3 className="text-sm font-semibold text-[#01070f]/80 mb-2">Version History</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center justify-between"><span>Chapter 3 - v2</span><span className="text-[#01070f]/60">1d ago</span></li>
              <li className="flex items-center justify-between"><span>Chapter 1 - v3</span><span className="text-[#01070f]/60">2d ago</span></li>
              <li className="flex items-center justify-between"><span>Chapter 2 - v1</span><span className="text-[#01070f]/60">5d ago</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-black/5 shadow-sm p-4">
            <h3 className="text-sm font-semibold text-[#01070f]/80 mb-2">Preview</h3>
            <div className="aspect-[3/4] bg-black/5 rounded-lg grid place-items-center text-[#01070f]/50">
              <p className="text-sm">PDF preview</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
