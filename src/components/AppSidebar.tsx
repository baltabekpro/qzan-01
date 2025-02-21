
import { useState } from "react";
import { User, MessageSquare, Lock, Clock, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { icon: User, text: "Личный кабинет", href: "/" },
  { icon: MessageSquare, text: "Уведомления", href: "/notifications" },
  { icon: Lock, text: "Конфиденциальность", href: "/privacy" },
  { icon: Clock, text: "История запросов", href: "/requests" },
  { icon: CreditCard, text: "Подписки и платежи", href: "/subscriptions" },
];

export function AppSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const location = useLocation();

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
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent",
              !isMenuOpen && "px-2 justify-center",
              location.pathname === item.href && "bg-[#202295] border-white"
            )}
          >
            <item.icon className={cn(
              "w-[20px] h-[20px] stroke-[2.5px] group-hover:text-[#202295]",
              location.pathname === item.href ? "text-white" : "text-[#B3B3B3]"
            )} />
            <span className={cn(
              "ml-3 text-[16px] group-hover:text-[#202295] transition-opacity duration-300",
              !isMenuOpen && "opacity-0 w-0 ml-0",
              location.pathname === item.href ? "text-white" : "text-[#000000]"
            )}>
              {item.text}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
