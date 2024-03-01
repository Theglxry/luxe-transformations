 
import React from "react";
import Header from "@/components/header/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`relative h-screen text-white w-full overflow-x-hidden`}
      >
        <Header />
        <main className="relative h-auto w-full mx-auto rounded-3xl z-0  pt-48 md:pt-56">
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;
