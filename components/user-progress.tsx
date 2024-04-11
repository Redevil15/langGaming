import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react"

type Props = {
  activeCourse: any
  hearts: number
  points: number
  hasActiveSuscription: boolean
}

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSuscription
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            height={28}
            width={28}
            alt="Points icon"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            height={22}
            width={22}
            alt="Hearts icon"
            className="mr-2"
          />
          {hasActiveSuscription
            ? <InfinityIcon className="h-4 w-4 stroke-[3]" />
            : hearts}
        </Button>
      </Link>
    </div>
  )
}