import React from "react";
import { cn } from "@/lib/utils";

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  backgroundType = "image",
  height = "md",
  children
}: {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundType?: "image" | "video";
  height?: "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}) => {
  const heightClass = {
    sm: "h-64",
    md: "h-96",
    lg: "h-[32rem]",
    xl: "h-screen"
  }[height];

  return (
    <section className={cn("relative overflow-hidden flex items-center", heightClass)}>
      {/* Background Video */}
      {backgroundType === "video" && backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Background Image Fallback */}
      {backgroundType === "image" && backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

    {/* Content */}
{/* Content */}
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center pt-24">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
  {subtitle && <h2 className="text-2xl md:text-3xl font-semibold mb-2">{subtitle}</h2>}
  {description && <p className="text-lg md:text-xl mb-6">{description}</p>}
  {children}
</div>


    </section>
  );
};

export default HeroSection;
