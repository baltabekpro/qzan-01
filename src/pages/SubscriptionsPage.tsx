
import { Header } from "@/components/Header";
import { AppSidebar } from "@/components/AppSidebar";
import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";
import { PaymentCards } from "@/components/subscriptions/PaymentCards";

export default function SubscriptionsPage() {
  return (
    <div className="h-screen w-screen bg-[#F5F7FA] overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] h-full">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[361px] h-full flex flex-col">
          <Header />
          
          {/* Breadcrumb */}
          <div className="h-[60px] border-b border-gray-100 flex items-center">
            <span className="ml-[59px] text-[22px] leading-[26px] text-[#202295]">
              Подписки и платежи
            </span>
          </div>

          {/* Main content area */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-[59px] py-[40px]">
            <div className="grid grid-cols-1 xl:grid-cols-[840px,1fr] gap-6">
              <div className="space-y-6">
                <SubscriptionTable />
                <PaymentHistory />
              </div>
              <div className="pt-[40px]">
                <PaymentCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
