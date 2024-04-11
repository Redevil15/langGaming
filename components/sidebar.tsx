import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";

type Props = {
  className?: string;
}

export const Sidebar = ({
  className,
}: Props) => {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className
    )}>
      <Link
        href="/learn"
      >
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/mascot.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            LangGaming
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          iconSrc="/learn.svg"
          href="/learn"
          label="Learn"
        />
        <SidebarItem
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
          label="Leaderboard"
        />
        <SidebarItem
          iconSrc="/quests.svg"
          href="/quests"
          label="quests"
        />
        <SidebarItem
          iconSrc="/shop.svg"
          href="/shop"
          label="shop"
        />
      </div>
    </div>
  );
}