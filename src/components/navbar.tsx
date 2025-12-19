import { Search, Bell, Upload, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">Gamma Clips</span>
        </div>

        <div className="flex-1 max-w-xl relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search streamers, games, or clips..."
            className="bg-muted/50 border-none pl-10 h-10 w-full focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
            <Upload className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
            <User className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </nav>
  )
}
