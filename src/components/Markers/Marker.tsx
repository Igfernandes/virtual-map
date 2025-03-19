"use client";

import { useMapNavigationContext } from "@/contexts/MapNavigation";
import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  src: string;
  x: number;
  y: number;
  isEvent?: boolean;
  zIndex?: number;
};

export function Marker({
  src,
  x = 0,
  y = 0,
  isEvent = false,
  zIndex,
  title,
}: Props) {
  const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);
  const { handleToggleProfile } = useMapNavigationContext();

  return (
    <div
      className="absolute"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        zIndex: zIndex,
      }}
    >
      <Image
        src={src}
        width={25}
        height={10}
        alt="Marcador"
        className={` cursor-pointer ${isEvent ? "animate-bounce" : ""}`}
        onMouseEnter={() => setIsShowTooltip(true)}
        onMouseLeave={() => setIsShowTooltip(false)}
        onClick={() => handleToggleProfile(1)}
      />
      <div
        className="absolute bottom-10 left-5 w-32 bg-white text-center shadow px-2 py-1 rounded-br-xl rounded-tr-xl rounded-tl-xl z-10"
        style={{
          display: isShowTooltip ? "block" : "none",
        }}
      >
        <span className="text-xs text-neutral-800 italic line-clamp-2">{title}</span>
      </div>
    </div>
  );
}
