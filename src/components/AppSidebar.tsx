import { User, MessageSquare, Lock, Clock, CreditCard } from "lucide-react";

const menuItems = [
  { icon: User, text: "Личный кабинет", href: "#", active: true },
  { icon: MessageSquare, text: "Уведомления", href: "#" },
  { icon: Lock, text: "Конфиденциальность", href: "#" },
  { icon: Clock, text: "История запросов", href: "#" },
  { icon: CreditCard, text: "Подписки и платежи", href: "#" },
];

export function AppSidebar() {
  return (
    <div className="w-[361px] h-[982px] bg-white border border-black">
      <div className="flex items-center justify-between px-[76px] pt-8">
        <div>
          <h1 className="text-[46px] font-bold">Logo</h1>
          <p className="text-[16px] text-[#B3B3B3]">slogan</p>
        </div>
        <button className="hover:bg-gray-50 p-2">
          <svg 
            width="29" 
            height="29" 
            viewBox="0 0 29 29" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3.625 14.5H25.375M3.625 7.25H25.375M3.625 21.75H25.375" 
              stroke="#B3B3B3" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <nav className="mt-12">
        {/* Active menu item */}
        <div className="h-[45px] bg-[#202295] flex items-center px-5 border-l-4 border-white">
          <User className="w-[20px] h-[20px] text-white stroke-[2.5px]" />
          <span className="ml-3 text-[16px] text-white">Личный кабинет</span>
        </div>

        {/* Menu items container */}
        <div className="flex flex-col">
          {/* Menu items */}
          <div className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent">
            <MessageSquare className="w-[20px] h-[20px] text-[#B3B3B3] stroke-[2.5px] group-hover:text-[#202295]" />
            <span className="ml-3 text-[16px] text-[#000000] group-hover:text-[#202295]">Уведомления</span>
          </div>
          
          <div className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent">
            <Lock className="w-[20px] h-[20px] text-[#B3B3B3] stroke-[2.5px] group-hover:text-[#202295]" />
            <span className="ml-3 text-[16px] text-[#000000] group-hover:text-[#202295]">Конфиденциальность</span>
          </div>
          
          <div className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent">
            <Clock className="w-[20px] h-[20px] text-[#B3B3B3] stroke-[2.5px] group-hover:text-[#202295]" />
            <span className="ml-3 text-[16px] text-[#000000] group-hover:text-[#202295]">История запросов</span>
          </div>
          
          <div className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent">
            <CreditCard className="w-[20px] h-[20px] text-[#B3B3B3] stroke-[2.5px] group-hover:text-[#202295]" />
            <span className="ml-3 text-[16px] text-[#000000] group-hover:text-[#202295]">Подписки и платежи</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
