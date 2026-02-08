import { cn } from "@/lib/utils"

interface Avatar {
  imageUrl: string
  profileUrl: string
}
const sizeClasses = {
  sm: { avatar: "h-6 w-6", overlap: "-space-x-2", border: "border-2" },
  md: { avatar: "h-8 w-8", overlap: "-space-x-3", border: "border-2" },
  lg: { avatar: "h-10 w-10", overlap: "-space-x-4", border: "border-2" },
} as const

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
  size?: "sm" | "md" | "lg"
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
  size = "lg",
}: AvatarCirclesProps) => {
  const { avatar, overlap, border } = sizeClasses[size]
  const pixelSize = size === "sm" ? 24 : size === "md" ? 32 : 40

  return (
    <div className={cn("z-10 flex rtl:space-x-reverse", overlap, className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            className={cn(avatar, "rounded-full", border, "border-white dark:border-gray-800")}
            src={url.imageUrl}
            width={pixelSize}
            height={pixelSize}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className={cn("flex items-center justify-center rounded-full text-center text-xs font-medium text-white hover:bg-gray-600 dark:bg-white dark:text-black", avatar, border, "border-white bg-black dark:border-gray-800")}
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  )
}
