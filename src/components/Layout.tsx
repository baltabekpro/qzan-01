
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar wrapper with responsive positioning */}
      <div className="fixed left-0 top-0 h-full w-[60px] sm:w-[100px] lg:w-[361px] z-20">
        <AppSidebar />
      </div>

      {/* Main content area with responsive margin */}
      <div className="flex-1 ml-[60px] sm:ml-[100px] lg:ml-[361px] w-[calc(100%-60px)] sm:w-[calc(100%-100px)] lg:w-[calc(100%-361px)]">
        <Header />
        <main className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
