"use client"
import { ClipCard } from "@/components/clip-card"

const MOCK_CLIPS = [
  {
    id: "1",
    streamer: "shroud",
    avatar: "/shroud-avatar.jpg",
    caption: "Insane 4k with the Wingman in Apex Legends! 🎯🎯",
    clipUrl: "https://player.twitch.tv/?clip=CuriousEasySnailVoteNay-Yp9Yw8ZkK8JqG5h5&parent=v0.app&autoplay=false",
    likes: 12400,
    comments: 423,
    timestamp: "2h ago",
  },
  {
    id: "2",
    streamer: "xQc",
    avatar: "/xqc-avatar.jpg",
    caption: "MY BROTHER WAS ACTUALLY STREAM SNIPING ME OMEGALUL",
    clipUrl:
      "https://player.twitch.tv/?clip=ProductivePlainGooseKeyboardCat-x9Z8_q1j_m_n_p&parent=v0.app&autoplay=false",
    likes: 8500,
    comments: 1102,
    timestamp: "5h ago",
  },
  {
    id: "3",
    streamer: "Pokimane",
    avatar: "/pokimane-avatar.jpg",
    caption: "Wholesome moment with a fan in Valorant today! 💖",
    clipUrl: "https://player.twitch.tv/?clip=TenderSpicyPonyOSkomp-8z4r5t6y7u8i9o&parent=v0.app&autoplay=false",
    likes: 15600,
    comments: 890,
    timestamp: "8h ago",
  },
]

export function ClipFeed() {
  return (
    <div className="flex flex-col gap-12">
      {MOCK_CLIPS.map((clip) => (
        <ClipCard key={clip.id} {...clip} />
      ))}
    </div>
  )
}
