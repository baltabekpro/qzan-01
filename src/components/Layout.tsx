
import { useState, useEffect } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsMenuOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Main content area with responsive margin and transition */}
      <div className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isMenuOpen ? "ml-[300px] sm:ml-[361px]" : "ml-[60px]",
        isMobile && !isMenuOpen && "ml-0"
      )}>
        <Header />
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
