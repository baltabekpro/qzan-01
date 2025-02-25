import { useState, useEffect } from "react";
import { MessageSquare, User, Lock, Clock, CreditCard, File, Heart, Download, Plus, Bot, MessageCircle } from "lucide-react";
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
    icon: Bot,
    text: "Чат с ИИ",
    href: "/ai-chat"
  },
  {
    icon: MessageCircle,
    text: "Тестовый чат",
    href: "/test-chat"
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
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check for mobile screen on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsMenuOpen(false);
      } else if (window.innerWidth > 1024) {
        setIsMenuOpen(true);
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={cn(
      "h-full bg-white border border-black transition-all duration-300 flex-shrink-0",
      isMenuOpen ? "w-[300px] sm:w-[361px]" : "w-[80px] sm:w-[100px]",
      isMobile && !isMenuOpen && "w-[60px]"
    )}>
      <div className="flex items-center justify-between px-4 sm:px-[30px] pt-8">
        <div className={cn("transition-opacity duration-300", !isMenuOpen && "opacity-0")}>
          <h1 className="text-3xl sm:text-[46px] font-bold">Qzan</h1>
          <p className="text-[14px] sm:text-[16px] text-[#B3B3B3]">qzan</p>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hover:bg-gray-50 p-2 transition-colors z-10"
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

      {/* Documents Section - Hide completely on very small screens when menu is closed */}
      <div className={cn(
        "mt-12",
        isMobile && !isMenuOpen && "hidden"
      )}>
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

        {isMenuOpen && documentItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group relative"
          >
            <span className="text-[17px] text-[#000000]">
              {item.text}
            </span>
            <div className="absolute right-5 flex items-center space-x-2">
              <Heart className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295]" />
              <Download className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
