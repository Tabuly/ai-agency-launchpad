import { AvatarCircles } from "@/components/ui/avatar-circles"

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "",
  },
]

export const AvatarCirclesComponent = () => {
  return <AvatarCircles size="sm" avatarUrls={avatars} />
}
