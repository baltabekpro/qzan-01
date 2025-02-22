
import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";
import { PaymentCards } from "@/components/subscriptions/PaymentCards";

export default function SubscriptionsPage() {
  return (
    <div className="h-screen w-full bg-[#F5F7FA] overflow-hidden">
      <div className="flex h-full">
        <div className="flex-1 h-full flex flex-col">
          {/* Breadcrumb with reduced height */}
          <div className="h-12 border-b border-gray-100 flex items-center justify-center px-4">
            <span className="text-lg leading-none text-[#202295]">
              Подписки и платежи
            </span>
          </div>

          {/* Main content area with fixed height and no overflow */}
          <div className="flex-1 p-4 h-[calc(100vh-48px)]">
            <div className="h-full">
              <div className="grid h-full grid-cols-1 gap-4 xl:grid-cols-[minmax(0,840px),minmax(0,1fr)]">
                <div className="space-y-4 min-h-0">
                  <div className="h-[45%]">
                    <SubscriptionTable />
                  </div>
                  <div className="h-[45%]">
                    <PaymentHistory />
                  </div>
                </div>
                <div className="h-full">
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
