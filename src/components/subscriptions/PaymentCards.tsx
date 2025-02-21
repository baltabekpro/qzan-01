
import { Plus } from "lucide-react";

export function PaymentCards() {
  return (
    <div className="relative bg-[#202295] rounded-lg p-6 w-[386px] h-[282px]">
      <h3 className="text-white font-roboto font-semibold text-base mb-8">
        Платежные карты
      </h3>
      
      <div className="space-y-6">
        {/* MasterCard */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <img
              src="/mastercard-white.svg"
              alt="MasterCard"
              className="w-8 h-5 object-contain"
            />
          </div>
          <div className="text-white">
            <div className="font-roboto font-light text-sm">
              MasterCard **************6373
            </div>
            <div className="font-roboto font-light text-[11px]">
              срок действия: 04/25
            </div>
          </div>
        </div>

        {/* Visa */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <img
              src="/visa-white.svg"
              alt="Visa"
              className="w-8 h-3 object-contain"
            />
          </div>
          <div className="text-white">
            <div className="font-roboto font-light text-sm">
              VISA **************3354
            </div>
            <div className="font-roboto font-light text-[11px]">
              срок действия: 09/29
            </div>
          </div>
        </div>
      </div>

      {/* Add Card Button */}
      <button className="absolute top-6 right-6 text-white hover:bg-white/10 rounded-full p-1 transition-colors">
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
