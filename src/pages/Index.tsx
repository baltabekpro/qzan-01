import { UserProfile } from "@/components/UserProfile";
import { RequestSection } from "@/components/requests/RequestSection";
export default function Index() {
  return <div className="min-h-screen w-full bg-[#F5F7FA]">
      {/* Breadcrumb */}
      

      <div className="flex justify-center px-4 sm:px-[59px] py-6 sm:py-[40px]">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col items-center space-y-6 w-full">
            <div className="w-full">
              <UserProfile />
            </div>
            <div className="w-full">
              <RequestSection />
            </div>
          </div>
        </div>
      </div>
    </div>;
}