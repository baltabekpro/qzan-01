
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Plus, Bell, Search, User, Lock, Clock, CreditCard, Bot, MessageCircle } from "lucide-react";
import { RequestSection } from "@/components/requests/RequestSection";
import { Link } from "react-router-dom";

export default function Index() {
  const menuCards = [
    {
      icon: MessageSquare,
      title: "Входящие",
      href: "/",
      description: "Просмотр входящих сообщений и запросов",
      color: "bg-blue-100"
    },
    {
      icon: User,
      title: "Мой профиль",
      href: "/profile",
      description: "Управление личными данными",
      color: "bg-green-100"
    },
    {
      icon: Lock,
      title: "Пароли",
      href: "/passwords",
      description: "Управление паролями и безопасностью",
      color: "bg-purple-100"
    },
    {
      icon: Clock,
      title: "История",
      href: "/history",
      description: "История действий и операций",
      color: "bg-yellow-100"
    },
    {
      icon: CreditCard,
      title: "Подписки",
      href: "/subscriptions",
      description: "Управление подписками",
      color: "bg-pink-100"
    },
    {
      icon: Bot,
      title: "AI Чат",
      href: "/ai-chat",
      description: "Общение с AI ассистентом",
      color: "bg-indigo-100"
    },
    {
      icon: MessageCircle,
      title: "Тестовый чат",
      href: "/test-chat",
      description: "Тестирование чата",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 p-4">
        <span className="text-lg sm:text-[22px] leading-[26px] text-[#202295]">Личный кабинет</span>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83325 14H22.1666M22.1666 14L13.9999 5.83331M22.1666 14L13.9999 22.1666" stroke="#202295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-lg sm:text-[22px] leading-[26px] text-[#202295]">Иван Иванов</span>
      </div>

      {/* Main content with proper mobile padding */}
      <div className="px-4 sm:px-[59px] py-6 sm:py-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {menuCards.map((card, index) => (
            <Link key={index} to={card.href}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                    <card.icon className="w-6 h-6 text-[#202295]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
