import { cn } from "@/lib/utils";
import React from "react";

export function DotBackgroundDemo({children, color = "bg-primary"}) {
  return (
    <div className={cn("relative flex h-screen w-full items-center justify-center", color)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#6366f1_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )} />
        
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-deep [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>      
      <div className="relative z-10 w-full h-full justify-center">
        {children}
      </div>

    </div>
  );
}
