import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipCard } from "@/components/clip-card"
import { Grid, Video, Settings, ExternalLink } from "lucide-react"

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params

  // Mock data for the profile
  const user = {
    username: username,
    displayName: username.charAt(0).toUpperCase() + username.slice(1),
    bio: "I build accessible, pixel-perfect digital experiences for the web. Currently focusing on high-octane gaming clips. 🎮",
    followers: 12400,
    following: 432,
    posts: 48,
    avatar: `/shroud-avatar.jpg?height=160&width=160&query=${username}-avatar`,
    banner: `/placeholder.svg?height=300&width=1200&query=gaming-banner`,
    isFollowing: false,
  }

  const clips = [
    {
      id: 1,
      streamer: user.displayName,
      avatar: user.avatar,
      caption: "Insane 1v4 clutch in the final circle! #Gaming #Clutch",
      clipUrl: "https://clips.twitch.tv/embed?clip=StrongShortEggplantNononoCat-2Z0m_8G2Y1_8Z2Y1&parent=v0.app",
      likes: 1205,
      comments: 84,
      timestamp: "2 days ago",
    },
    {
      id: 2,
      streamer: user.displayName,
      avatar: user.avatar,
      caption: "Fastest speedrun world record attempt? 🏃‍♂️💨",
      clipUrl: "https://clips.twitch.tv/embed?clip=FastestSpeedrunAttempt-2Z0m_8G2Y1_8Z2Y1&parent=v0.app",
      likes: 842,
      comments: 32,
      timestamp: "5 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="flex max-w-7xl mx-auto pt-16">
        <Sidebar className="hidden lg:block w-64 fixed left-[max(0px,calc(50%-640px))] h-[calc(100vh-64px)] overflow-y-auto" />

        <main className="flex-1 lg:ml-64 pb-20">
          {/* Profile Header / Banner */}
          <div className="relative h-48 md:h-64 bg-muted overflow-hidden group">
            <img
              src={user.banner || "/placeholder.svg"}
              alt="Profile Banner"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </div>

          {/* Profile Info Section */}
          <div className="px-6 -mt-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl rounded-2xl">
                  <AvatarImage
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.displayName}
                    className="object-cover"
                  />
                  <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                </Avatar>

                <div className="pb-2 space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{user.displayName}</h1>
                    <div className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                      Partner
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium flex items-center gap-1.5">
                    @{user.username}
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                    twitch.tv/{user.username} <ExternalLink className="h-3 w-3" />
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-2">
                <Button className="rounded-xl px-8 font-bold shadow-lg shadow-primary/20">Follow</Button>
                <Button variant="outline" className="rounded-xl font-bold border-border/40 bg-transparent">
                  Message
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl border border-border/40">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-8 py-8 border-b border-border/40 mt-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold">{user.posts}</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Posts</span>
              </div>
              <div className="h-8 w-px bg-border/40" />
              <div className="flex flex-col cursor-pointer group">
                <span className="text-xl font-bold group-hover:text-primary transition-colors">
                  {(user.followers / 1000).toFixed(1)}K
                </span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Followers</span>
              </div>
              <div className="h-8 w-px bg-border/40" />
              <div className="flex flex-col cursor-pointer group">
                <span className="text-xl font-bold group-hover:text-primary transition-colors">{user.following}</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Following</span>
              </div>
            </div>

            <div className="py-6 max-w-2xl">
              <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="bg-transparent border-b border-border/40 w-full justify-start h-auto p-0 gap-8 rounded-none">
                <TabsTrigger
                  value="posts"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground font-bold px-0 py-4 transition-all"
                >
                  <Grid className="h-4 w-4 mr-2" />
                  Posts
                </TabsTrigger>
                <TabsTrigger
                  value="clips"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground font-bold px-0 py-4 transition-all"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Twitch Clips
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground font-bold px-0 py-4 transition-all"
                >
                  About
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="py-12 animate-in fade-in duration-500">
                <div className="max-w-2xl mx-auto space-y-12">
                  {clips.map((clip) => (
                    <ClipCard key={clip.id} {...clip} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="clips" className="py-12 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-muted rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-colors cursor-pointer group"
                    >
                      <div className="w-full h-full relative">
                        <img
                          src={`/twitch-clip-thumbnail-.jpg?height=200&width=350&query=twitch-clip-thumbnail-${i}`}
                          alt="Clip Thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Video className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
