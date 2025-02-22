import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full">
      <div className="fixed left-0 top-0 h-full">
        <AppSidebar />
      </div>
      <div className="flex-1 ml-[361px]">
        <div className="max-w-[1559px] mx-auto">
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
