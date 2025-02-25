import { useState, useEffect } from "react";
import { MessageSquare, User, Lock, Clock, CreditCard, File, Heart, Download, Plus, Bot, MessageCircle, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const menuItems = [
  { 
    icon: Plus,
    text: "Новый чат",
    href: "/chat",
    className: "text-[#9898BF] font-light",
    mobileDialog: true
  },
  { 
    icon: Bot,
    text: "Чат с ИИ",
    href: "/ai-chat",
    mobileDialog: true
  },
  {
    icon: MessageCircle,
    text: "Тестовый чат",
    href: "/test-chat",
    mobileDialog: true
  },
  { 
    icon: Clock,
    text: "История запросов",
    href: "/requests",
    mobileDialog: true
  },
  { 
    icon: User,
    text: "Личный кабинет",
    href: "/",
    mobileDialog: true
  },
  { 
    icon: MessageSquare,
    text: "Уведомления",
    href: "/notifications",
    mobileDialog: true
  },
  { 
    icon: Lock,
    text: "Конфиденциальность",
    href: "/privacy",
    mobileDialog: true
  },
  { 
    icon: CreditCard,
    text: "Подписки и платежи",
    href: "/subscriptions",
    mobileDialog: true
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

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsMenuOpen(false);
      } else if (window.innerWidth > 1024) {
        setIsMenuOpen(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const MenuItem = ({ item }) => {
    if (isMobile && !isMenuOpen) {
      return null;
    }

    if (isMobile) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div className={cn(
              "h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer group border-l-4 border-transparent",
              location.pathname === item.href && "bg-[#202295] border-white"
            )}>
              <item.icon className={cn(
                "w-[20px] h-[20px] stroke-[2.5px]",
                location.pathname === item.href ? "text-white" : "text-[#B3B3B3]",
                "group-hover:text-[#202295]"
              )} />
              <span className="ml-3 text-[16px] group-hover:text-[#202295]">
                {item.text}
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[90%] w-[90%] p-0">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{item.text}</h3>
              <div className="space-y-4">
                <p className="text-gray-600">Содержимое для {item.text}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Link
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
    );
  };

  return (
    <div className={cn(
      "h-full bg-white border-r border-gray-200 transition-all duration-300 flex-shrink-0 fixed left-0 top-0 z-50",
      isMenuOpen ? "w-[300px] sm:w-[361px]" : "w-[60px]",
      isMobile && !isMenuOpen && "w-[50px]"
    )}>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={cn(
          "hover:bg-gray-50 p-2 transition-colors z-10",
          isMobile && !isMenuOpen ? "fixed top-4 left-4" : "absolute top-8 right-4"
        )}
      >
        <Menu className="w-6 h-6 text-[#B3B3B3]" />
      </button>

      <div className={cn(
        "transition-opacity duration-300",
        isMobile && !isMenuOpen && "hidden"
      )}>
        <div className="flex items-center px-4 sm:px-[30px] pt-8">
          <div className={cn("transition-opacity duration-300", !isMenuOpen && "opacity-0")}>
            <h1 className="text-3xl sm:text-[46px] font-bold">Qzan</h1>
            <p className="text-[14px] sm:text-[16px] text-[#B3B3B3]">qzan</p>
          </div>
        </div>

        <nav className="mt-12">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </nav>

        <div className={cn(
          "mt-12",
          (isMobile || !isMenuOpen) && "hidden"
        )}>
          <div className="flex items-center px-5 mb-4">
            <File className="w-[25px] h-[25px] text-[#000000]" />
            <span className="ml-3 text-[20px] font-semibold text-[#000000]">
              Документы/Файлы
            </span>
          </div>

          {documentItems.map((item, index) => (
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
    </div>
  );
}
