import { Button } from "@/components/ui/button";

export function UserProfile() {
  return (
    <div className="relative flex gap-[7px]">
      <div className="w-[266px] h-[271px] bg-white">
        <div className="md:w-[266px] h-[271px] flex flex-col items-center bg-white">
          <img
            src="/profile-image.jpg"
            alt="Profile"
            className="w-[120px] h-[120px] rounded-full object-cover"
          />
          <div className="mt-6 text-center">
            <h2 className="text-[24px] font-semibold text-[#202295]">Иван Иванов</h2>
            <p className="text-[16px] text-[#B3B3B3] mt-2">ivanov@gmail.com</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-4 h-[36px] w-[140px] text-[#B3B3B3] border border-[#B3B3B3] rounded hover:bg-gray-50"
            >
              редактировать
            </Button>
          </div>
        </div>
      </div>

      <div className="w-[367px] h-[271px] bg-white">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-6">
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Пол</p>
            <p className="text-[16px] text-[#202295]">Мужской</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Адрес</p>
            <p className="text-[16px] text-[#202295]">Название 3/2</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Контакты</p>
            <p className="text-[16px] text-[#202295]">+81012389923</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">ИП/ТОО</p>
            <p className="text-[#202295]">отсутствует</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Вид деятельности</p>
            <p className="text-[16px] text-[#202295]">Производство шин</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Статус</p>
            <p className="text-[16px] text-[#202295] ">активный</p>
          </div>
          <div>
            <p className="text-[14px] text-[#B3B3B3] mb-1 font-medium">Дата регистрации</p>
            <p className="text-[16px] text-[#202295]">11.12.2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
