
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
      } else if (window.innerWidth > 1024) {
        setIsMenuOpen(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      
      {/* Main content area with responsive margin */}
      <div className={cn(
        "flex-1 w-full transition-all duration-300",
        isMobile && !isMenuOpen ? "ml-0" : "ml-[60px] sm:ml-[100px] lg:ml-[361px]",
        isMobile && !isMenuOpen ? "w-full" : "w-[calc(100%-60px)] sm:w-[calc(100%-100px)] lg:w-[calc(100%-361px)]"
      )}>
        <Header />
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
