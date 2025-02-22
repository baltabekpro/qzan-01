import { Header } from "@/components/Header";
import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";
import { PaymentCards } from "@/components/subscriptions/PaymentCards";

export default function SubscriptionsPage() {
  return (
    <div className="h-screen w-screen bg-[#F5F7FA] overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] h-full">
        {/* Main Content: no need for additional margin offset */}
        <div className="flex-1 h-full flex flex-col">
          <Header />
          
          {/* Breadcrumb centered */}
          <div className="h-[60px] border-b border-gray-100 flex items-center justify-center">
            <span className="text-[22px] leading-[26px] text-[#202295]">
              Подписки и платежи
            </span>
          </div>

          {/* Main content area with centered container */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-[59px] py-[40px]">
            <div className="max-w-[1200px] mx-auto">
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
    </div>
  );
}
