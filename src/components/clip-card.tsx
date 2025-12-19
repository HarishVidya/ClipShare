"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ClipCardProps {
  streamer: string
  avatar: string
  caption: string
  clipUrl: string
  likes: number
  comments: number
  timestamp: string
}

export function ClipCard({ streamer, avatar, caption, clipUrl, likes, comments, timestamp }: ClipCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <Card className="bg-transparent border-none shadow-none text-foreground w-full">
      <CardHeader className="p-0 pb-3 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary/20">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={streamer} />
            <AvatarFallback>{streamer[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm hover:underline cursor-pointer">{streamer}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span className="text-xs text-muted-foreground">{timestamp}</span>
            </div>
            <p className="text-xs text-primary font-medium hover:underline cursor-pointer">Follow</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="p-0 space-y-3">
        <p className="text-sm leading-relaxed">{caption}</p>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted group shadow-2xl shadow-black/50">
          <iframe src={clipUrl} height="100%" width="100%" allowFullScreen className="absolute inset-0 border-0" />
        </div>
      </CardContent>

      <CardFooter className="p-0 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group"
          >
            <Heart
              className={cn(
                "h-6 w-6 transition-transform group-active:scale-125",
                isLiked ? "fill-primary text-primary" : "text-muted-foreground",
              )}
            />
            <span>{likeCount.toLocaleString()}</span>
          </button>

          <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group">
            <MessageCircle className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span>{comments.toLocaleString()}</span>
          </button>

          <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group">
            <Share2 className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="sr-only">Share</span>
          </button>
        </div>

        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
          <Bookmark className="h-6 w-6" />
        </Button>
      </CardFooter>
      <div className="h-px bg-border/40 mt-10" />
    </Card>
  )
}
