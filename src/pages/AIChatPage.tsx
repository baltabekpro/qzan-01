
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Lock, Clock, CreditCard, User, PaperclipIcon, ArrowRightCircle } from "lucide-react";

export default function AIChatPage() {
  const profileSections = [
    {
      title: "Личный кабинет",
      icon: User,
      description: "Управление личными данными и настройками профиля"
    },
    {
      title: "Уведомления",
      icon: Bell,
      description: "Настройка уведомлений и просмотр сообщений"
    },
    {
      title: "Конфиденциальность",
      icon: Lock,
      description: "Настройки безопасности и конфиденциальности"
    },
    {
      title: "История запросов",
      icon: Clock,
      description: "Просмотр истории всех запросов и действий"
    },
    {
      title: "Подписки и платежи",
      icon: CreditCard,
      description: "Управление подписками и история платежей"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA] relative">
        <div className="flex-1 h-full flex flex-col max-w-[1200px] mx-auto">
          <div className="flex-1 flex flex-col p-4 pb-24">
            <h1 className="text-3xl font-bold mb-6">AI Чат</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {profileSections.map((section, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <section.icon className="h-8 w-8 text-[#202295]" />
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{section.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="w-full max-w-[814px] mx-auto mt-8">
              <h2 className="font-roboto text-2xl font-semibold text-center text-black mb-3">
                Как я могу вам помочь?
              </h2>
              <p className="font-roboto text-lg font-light text-[#B3B3B3] text-center mb-12">
                ваш личный юридический помощник
              </p>
            </div>
          </div>
        </div>
        
        {/* Fixed input at bottom, matched with the ChatContainer approach */}
        <div className="fixed bottom-10 inset-x-0 flex justify-center">
          <div className="w-full max-w-[814px] h-[56px] flex items-center bg-white rounded-[9px] px-3 mx-4">
            <PaperclipIcon className="w-[28px] h-[28px] text-[#202295] ml-2" />
            <input
              type="text"
              placeholder="Составь договор NDA для сотрудника компании"
              className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none font-roboto"
            />
            <ArrowRightCircle className="w-[28px] h-[28px] text-[#202295] mr-2" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
