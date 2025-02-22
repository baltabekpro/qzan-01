import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full">
      {/* Fixed sidebar */}
      <div className="fixed left-0 top-0 h-full w-[361px]">
        <AppSidebar />
      </div>
      {/* Main area with margin-left set to sidebar width */}
      <div className="flex-1 ml-[361px]">
        {/* Constrain main content width to prevent overflow off-screen */}
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
