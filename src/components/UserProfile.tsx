import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UserProfile() {
  return (
    <div className="relative flex gap-[7px]">
      {/* Left Profile Section */}
      <div className="w-[366px] h-[271px] bg-white">
      <div className="flex flex-col items-center pt-8">
        <div className="relative">
        <img
          src="https://picsum.photos/200/300"
          alt="Profile"
          className="w-[89px] h-[86px] rounded-full object-cover"
        />
        </div>
        <h2 className="text-[24px] font-normal text-[#202295] mt-4">Иван Иванов</h2>
        <p className="text-[14px] text-[#B3B3B3] mt-1">ivanov@gmail.com</p>
        <Button 
        variant="ghost"
        className="mt-3 h-[32px] w-[150px] text-[12px] text-[#B3B3B3] border border-[#D9D9D9] rounded-none"
        >
        редактировать
        </Button>
      </div>
      </div>

      {/* Right Details Section */}
      <div className="w-[467px] h-[271px] bg-white">
      <div className="grid grid-cols-2 gap-x-12 gap-y-4 p-6">
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">Пол</p>
        <p className="text-[#202295]">Мужской</p>
        </div>
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">Адрес</p>
        <p className="text-[#202295]">Название 3/2</p>
        </div>
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">Контакты</p>
        <p className="text-[#202295]">+8101238923</p>
        </div>
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">ИП/ТОО</p>
        <p className="text-[#202295]">отсутствует</p>
        </div>
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">Дата регистрации</p>
        <p className="text-[#202295]">11.12.2023</p>
        </div>
        <div className="justify-start">
        <p className="text-sm text-[#B3B3B3] mb-1">Статус</p>
        <p className="text-[#202295]">активный</p>
        </div>
      </div>
      </div>
    </div>
  );
}
