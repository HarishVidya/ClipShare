import { ClipFeed } from "@/components/clip-feed"
import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="flex max-w-7xl mx-auto pt-16">
        <Sidebar className="hidden lg:block w-64 fixed left-[max(0px,calc(50%-640px))] h-[calc(100vh-64px)] overflow-y-auto" />
        <main className="flex-1 lg:ml-64 px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-12">
            <ClipFeed />
          </div>
        </main>
      </div>
    </div>
  )
}
