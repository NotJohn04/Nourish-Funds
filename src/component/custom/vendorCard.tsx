"use client";

import Link from "next/link";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl = "/wallpaper.jpg";

  return (
    <div className="flex justify-center items-center gap-8 mt-10">
      {/* First Card - Clickable */}
      <Link href="/kfc-details" className="h-[40rem] relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">KFC</p>
          <p className="font-normal text-sm">The best fried chicken</p>
        </DirectionAwareHover>
      </Link>

      {/* Second Card */}
      <div className="h-[40rem] relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">MCD</p>
          <p className="font-normal text-sm">Clown Food</p>
        </DirectionAwareHover>
      </div>

      {/* Third Card */}
      <div className="h-[40rem] relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Nandos</p>
          <p className="font-normal text-sm">The best grilled chicken</p>
        </DirectionAwareHover>
      </div>
    </div>
  );
}


