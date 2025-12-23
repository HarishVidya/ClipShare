"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Video, Sparkles, AlertCircle } from "lucide-react"

export default function PostPage() {
  const [clipUrl, setClipUrl] = useState("")
  const [caption, setCaption] = useState("")
  const [category, setCategory] = useState("")
  const [isValidUrl, setIsValidUrl] = useState(false)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setClipUrl(url)
    // Simple Twitch URL validation
    setIsValidUrl(url.includes("twitch.tv/") || url.includes("clips.twitch.tv/"))
  }

  const handlePost = () => {
    if (!clipUrl || !caption || !category) {
      alert("Please fill in all fields")
      return
    }
    // Simulate posting
    alert("Clip posted successfully!")
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="flex max-w-7xl mx-auto pt-16">
        <Sidebar className="hidden lg:block w-64 fixed left-[max(0px,calc(50%-640px))] h-[calc(100vh-64px)] overflow-y-auto" />
        <main className="flex-1 lg:ml-64 px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                <div className="h-10 w-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                Create a New Post
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Share your favorite Twitch clips with the community
              </p>
            </div>

            <Separator className="my-6" />

            {/* Form Card */}
            <Card className="border-border/40 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Clip Details
                </CardTitle>
                <CardDescription>Paste a Twitch clip URL and add your commentary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Clip URL Input */}
                <div className="space-y-2">
                  <Label htmlFor="clip-url" className="text-sm font-semibold">
                    Twitch Clip URL
                  </Label>
                  <Input
                    id="clip-url"
                    type="url"
                    placeholder="https://clips.twitch.tv/..."
                    value={clipUrl}
                    onChange={handleUrlChange}
                    className="h-11"
                  />
                  {clipUrl && !isValidUrl && (
                    <div className="flex items-center gap-2 text-destructive text-xs">
                      <AlertCircle className="h-3 w-3" />
                      <span>Please enter a valid Twitch clip URL</span>
                    </div>
                  )}
                  {clipUrl && isValidUrl && (
                    <div className="flex items-center gap-2 text-primary text-xs">
                      <Sparkles className="h-3 w-3" />
                      <span>Valid Twitch URL detected</span>
                    </div>
                  )}
                </div>

                {/* Caption Input */}
                <div className="space-y-2">
                  <Label htmlFor="caption" className="text-sm font-semibold">
                    Caption
                  </Label>
                  <Textarea
                    id="caption"
                    placeholder="Add a caption to your clip... What makes this moment special?"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="min-h-32 resize-none"
                    maxLength={280}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Share your thoughts, tag streamers, or add context</p>
                    <span className="text-xs text-muted-foreground">{caption.length}/280</span>
                  </div>
                </div>

                {/* Category Selector */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-semibold">
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="h-11 w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="hot-clips">Hot Clips</SelectItem>
                      <SelectItem value="funny">Funny Moments</SelectItem>
                      <SelectItem value="irl">IRL</SelectItem>
                      <SelectItem value="esports">Esports</SelectItem>
                      <SelectItem value="fails">Epic Fails</SelectItem>
                      <SelectItem value="wins">Clutch Wins</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="my-4" />

                {/* Preview Section */}
                {clipUrl && isValidUrl && (
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold">Preview</Label>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border/40 shadow-lg">
                      <iframe
                        src={`${clipUrl}&parent=localhost&parent=v0.app`}
                        height="100%"
                        width="100%"
                        allowFullScreen
                        className="absolute inset-0 border-0"
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handlePost}
                    disabled={!clipUrl || !caption || !category || !isValidUrl}
                    className="flex-1 h-11 text-base font-semibold"
                  >
                    <Video className="h-4 w-4" />
                    Post Clip
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setClipUrl("")
                      setCaption("")
                      setCategory("")
                    }}
                    className="h-11"
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">Tips for great posts</h3>
                    <ul className="text-xs text-muted-foreground space-y-1 leading-relaxed">
                      <li>• Add context to help viewers understand what makes the clip special</li>
                      <li>• Tag the streamer or game to help people discover your post</li>
                      <li>• Choose the right category to reach the right audience</li>
                      <li>• Keep captions concise but descriptive</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}