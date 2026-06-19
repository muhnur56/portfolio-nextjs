"use client";

import Image from "next/image";
import { useRef } from "react";

interface IDCardProps {
  name: string;
  role: string;
  photo?: string | null;
}

export default function IDCard({ name, role, photo }: IDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 25;
    const rotateX = ((y / rect.height) - 0.5) * -25;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.04,1.04,1.04)
    `;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex justify-end pt-4 px-4">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          overflow-hidden
          w-full
          max-w-[280px]
          rounded-[24px]
          p-5 md:p-6
          flex
          flex-col
          items-center
          gap-4
          border
          border-purple-700/30
          backdrop-blur-xl
          transition-all
          duration-300
          ease-out
          [transform-style:preserve-3d]
          bg-[linear-gradient(135deg,rgba(20,20,31,0.96),rgba(71, 28, 141, 0.96))]
          shadow-[0_30px_80px_rgba(124,58,237,0.25)]
        "
      >
        {/* Glow Background */}
        <div
          className="
            absolute
            inset-0
            opacity-80
            pointer-events-none
          "
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(255, 255, 255, 0.11), transparent 35%)",
          }}
        />

        {/* Top Glow */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-violet-700/20
            via-transparent
            to-fuchsia-700/10
            pointer-events-none
          "
        />

        {/* Foto */}
        <div
          className="
            relative
            z-10
            [transform:translateZ(60px)]
            w-[130px]
            sm:w-[150px]
            md:w-[170px]
            aspect-[4/5]
            rounded-2xl
            overflow-hidden
            border-2
            border-purple-500/40
            bg-[linear-gradient(135deg,rgba(35, 12, 74, 0.2),rgba(90, 4, 171, 0.1))]
            shadow-[0_0_30px_rgba(124,58,237,0.25)]
          "
        >
          {photo ? (
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[5rem] text-purple-500/25">👤</span>
            </div>
          )}
        </div>

        {/* Nama */}
        <div
          className="
            relative
            z-10
            text-center
            [transform:translateZ(45px)]
          "
        >
          <h3
            className="
              text-[18px]
              md:text-[22px]
              font-bold
              text-white
              tracking-wide
            "
          >
            {name.split(" ").slice(0, 2).join(" ")}
          </h3>

          <p
            className="
              mt-1
              text-[13px]
              md:text-[14px]
              font-semibold
              font-mono
              text-violet-600
            "
          >
            {role}
          </p>
        </div>

        {/* Line */}
        <div
          className="
            relative
            z-10
            [transform:translateZ(30px)]
            w-12
            h-[2px]
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-violet-500
            to-transparent
          "
        />

        {/* Border Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-[24px]
            border
            border-white/5
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}