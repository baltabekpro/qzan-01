
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen w-screen bg-[#F5F7FA] overflow-x-hidden">
      <div className="relative mx-auto max-w-[1920px] min-h-screen">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[361px]">
          <Header />
          
          {/* Breadcrumb */}
          <div className="relative h-[60px] border-b border-gray-100">
            <span className="absolute left-[59px] top-[17px] text-[22px] leading-[26px] text-[#202295]">
              Подписки и платежи
            </span>
          </div>

          {/* Main content area */}
          <div className="px-4 sm:px-[59px] py-[40px]">
            <div className="max-w-[840px] space-y-6">
              <SubscriptionTable />
              <PaymentHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
