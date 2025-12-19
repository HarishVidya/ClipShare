import { Home, Compass, TrendingUp, Users, Clapperboard, Flame, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { icon: Home, label: "Feed", active: true },
  { icon: Compass, label: "Discover" },
  { icon: TrendingUp, label: "Trending" },
  { icon: Users, label: "Following" },
  { icon: Clapperboard, label: "Shorts" },
]

const CATEGORIES = [
  { icon: Flame, label: "Hot Clips" },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Users, label: "IRL" },
]

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("p-6 space-y-8 border-r border-border/40", className)}>
      <div className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group",
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
            )}
          >
            <item.icon className={cn("h-5 w-5", item.active ? "text-primary" : "group-hover:text-primary")} />
            <span className="text-sm font-semibold">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3">Categories</h3>
        <div className="space-y-1">
          {CATEGORIES.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-muted/50 hover:text-foreground cursor-pointer transition-all duration-200 group"
            >
              <item.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8">
        <div className="p-4 bg-muted/30 rounded-2xl border border-border/40">
          <p className="text-xs font-medium text-muted-foreground mb-3 leading-relaxed">
            Create an account to like, comment and share your own clips!
          </p>
          <button className="w-full bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </aside>
  )
}
