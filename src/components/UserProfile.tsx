import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UserProfile() {
  return (
    <div className="relative flex gap-[7px]">
      {/* Left Profile Section */}
      <div className="w-[366px] h-[271px] bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="relative flex-shrink-0">
            <img
              src="/lovable-uploads/ca1b39ee-7b34-44b4-a030-2d8d495f98a1.png"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
              <PenLine className="w-4 h-4 text-[#B3B3B3]" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[467px] h-[271px] bg-white rounded-lg p-6 shadow-sm">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-[#202295]">Иван Иванов</h2>
              <p className="text-sm text-[#B3B3B3]">ivanov.i@gmail.com</p>
            </div>
            <Button variant="outline" size="sm" className="text-[#4338ca] border-[#4338ca] hover:bg-[#4338ca]/10">
              редактировать
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">Пол</p>
              <p className="text-[#202295]">Мужской</p>
            </div>
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">Адрес</p>
              <p className="text-[#202295]">Название 3/2</p>
            </div>
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">Контакты</p>
              <p className="text-[#202295]">+8101238923</p>
            </div>
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">ИП/ТОО</p>
              <p className="text-[#4338ca]">отсутствует</p>
            </div>
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">Дата регистрации</p>
              <p className="text-[#202295]">11.12.2023</p>
            </div>
            <div>
              <p className="text-sm text-[#B3B3B3] mb-1">Статус</p>
              <p className="text-[#202295]">активный</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
