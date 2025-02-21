
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";

export default function AIChatPage() {
  return (
    <div className="min-h-screen w-screen bg-[#F5F7FA] overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] h-full">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[361px] h-full flex flex-col">
          <Header />
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <h1 className="text-[48px] font-semibold font-roboto mb-4 text-center">
              Как я могу вам помочь ?
            </h1>
            <p className="text-[20px] font-light text-[#B3B3B3] text-center">
              ваш личный юридический помощник
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
