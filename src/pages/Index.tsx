
import { UserProfile } from "@/components/UserProfile";
import { RequestSection } from "@/components/requests/RequestSection";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 p-4">
        <span className="text-lg sm:text-[22px] leading-[26px] text-[#202295]">Личный кабинет</span>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83325 14H22.1666M22.1666 14L13.9999 5.83331M22.1666 14L13.9999 22.1666" stroke="#202295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg sm:text-[22px] leading-[26px] text-[#202295]">Иван Иванов</span>
      </div>

      {/* Main content with proper mobile padding */}
      <div className="px-4 sm:px-[59px] py-6 sm:py-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          <div className="space-y-6">
            <UserProfile />
            <RequestSection />
          </div>
        </div>
      </div>
    </div>
  );
}
