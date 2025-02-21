import { useState } from "react";
import { User, MessageSquare, Lock, Clock, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: User, text: "Личный кабинет", href: "#", active: true },
  { icon: MessageSquare, text: "Уведомления", href: "#" },
  { icon: Lock, text: "Конфиденциальность", href: "#" },
  { icon: Clock, text: "История запросов", href: "#" },
  { icon: CreditCard, text: "Подписки и платежи", href: "#" },
];

export function AppSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className={cn(
      "w-[361px] h-[982px] bg-white border border-black transition-all duration-300",
      !isMenuOpen && "w-[100px]"
    )}>
      <div className="flex items-center justify-between px-[30px] pt-8">
        <div className={cn("transition-opacity duration-300", !isMenuOpen && "opacity-0")}>
          <h1 className="text-[46px] font-bold">Qzan</h1>
          <p className="text-[16px] text-[#B3B3B3]">qzan</p>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:bg-gray-50 p-2 transition-colors"
        >
          <svg 
            width="29" 
            height="29" 
            viewBox="0 0 29 29" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "transition-transform duration-300",
              !isMenuOpen && "rotate-180"
            )}
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
        <div className={cn(
          "h-[45px] bg-[#202295] flex items-center px-5 border-l-4 border-white",
          !isMenuOpen && "px-2 justify-center"
        )}>
          <User className="w-[20px] h-[20px] text-white stroke-[2.5px]" />
          <span className={cn(
            "ml-3 text-[16px] text-white transition-opacity duration-300",
            !isMenuOpen && "opacity-0 w-0 ml-0"
          )}>
            Личный кабинет
          </span>
        </div>

        <div className="flex flex-col">
          {menuItems.slice(1).map((item, index) => (
            <div 
              key={index}
              className={cn(
                "h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent",
                !isMenuOpen && "px-2 justify-center"
              )}
            >
              <item.icon className="w-[20px] h-[20px] text-[#B3B3B3] stroke-[2.5px] group-hover:text-[#202295]" />
              <span className={cn(
                "ml-3 text-[16px] text-[#000000] group-hover:text-[#202295] transition-opacity duration-300",
                !isMenuOpen && "opacity-0 w-0 ml-0"
              )}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
