
import { useState } from "react";
import { MessageSquare, User, Lock, Clock, CreditCard, File, Heart, Download, Plus, Robot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const menuItems = [
  { 
    icon: Plus,
    text: "Новый чат",
    href: "/chat",
    className: "text-[#9898BF] font-light" 
  },
  { 
    icon: Robot,
    text: "Чат с ИИ",
    href: "/ai-chat"
  },
  { 
    icon: Clock,
    text: "История запросов",
    href: "/requests" 
  },
  { 
    icon: User,
    text: "Личный кабинет",
    href: "/" 
  },
  { 
    icon: MessageSquare,
    text: "Уведомления",
    href: "/notifications" 
  },
  { 
    icon: Lock,
    text: "Конфиденциальность",
    href: "/privacy" 
  },
  { 
    icon: CreditCard,
    text: "Подписки и платежи",
    href: "/subscriptions" 
  },
];

const documentItems = [
  { text: "Договор конфиденциальности", href: "/docs/confidentiality" },
  { text: "Заявление на официальное раз", href: "/docs/official-statement" },
  { text: "Список требуемых документов", href: "/docs/required-docs" },
  { text: "Лист ожидания для ИП", href: "/docs/waiting-list" },
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
              location.pathname === item.href && "bg-[#202295] border-white",
              item.className
            )}
          >
            <item.icon className={cn(
              "w-[20px] h-[20px] stroke-[2.5px] group-hover:text-[#202295]",
              location.pathname === item.href ? "text-white" : "text-[#B3B3B3]"
            )} />
            <span className={cn(
              "ml-3 text-[16px] group-hover:text-[#202295] transition-opacity duration-300",
              !isMenuOpen && "opacity-0 w-0 ml-0",
              location.pathname === item.href ? "text-white" : item.className || "text-[#000000]"
            )}>
              {item.text}
            </span>
          </Link>
        ))}
      </nav>

      {/* Documents Section */}
      <div className="mt-12">
        <div className={cn(
          "flex items-center px-5 mb-4",
          !isMenuOpen && "px-2 justify-center"
        )}>
          <File className="w-[25px] h-[25px] text-[#000000]" />
          <span className={cn(
            "ml-3 text-[20px] font-semibold text-[#000000]",
            !isMenuOpen && "opacity-0 w-0 ml-0"
          )}>
            Документы/Файлы
          </span>
        </div>

        {documentItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group relative"
          >
            <span className={cn(
              "text-[17px] text-[#000000]",
              !isMenuOpen && "opacity-0"
            )}>
              {item.text}
            </span>
            {isMenuOpen && (
              <div className="absolute right-5 flex items-center space-x-2">
                <Heart className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295]" />
                <Download className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295]" />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
