
import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";
import { PaymentCards } from "@/components/subscriptions/PaymentCards";

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      <div className="flex h-full">
        <div className="flex-1 h-full flex flex-col max-w-[1559px] mx-auto">
          {/* Breadcrumb centered with improved responsiveness */}
          <div className="h-[60px] border-b border-gray-100 flex items-center justify-center px-4">
            <span className="text-lg sm:text-xl lg:text-[22px] leading-[26px] text-[#202295]">
              Подписки и платежи
            </span>
          </div>

          {/* Main content area with improved responsive layout */}
          <div className="flex-1 overflow-y-auto p-4 sm:px-6 lg:px-[59px] py-6 lg:py-[40px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,840px),minmax(0,1fr)]">
                <div className="space-y-4 sm:space-y-6">
                  <SubscriptionTable />
                  <PaymentHistory />
                </div>
                <div className="pt-4 sm:pt-6 lg:pt-[40px]">
                  <PaymentCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
