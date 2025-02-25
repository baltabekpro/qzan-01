
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
      
      {/* Main content area with centered positioning */}
      <div 
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isMenuOpen ? "pl-[300px] sm:pl-[361px]" : "pl-[60px]",
          isMobile && !isMenuOpen && "pl-0"
        )}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '100%'
        }}
      >
        <div className="max-w-[1600px] mx-auto">
          <Header />
          <main className="w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
