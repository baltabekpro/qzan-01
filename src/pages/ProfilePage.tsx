
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Lock, Clock, CreditCard, User } from "lucide-react";

export default function ProfilePage() {
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
      <div className="min-h-screen w-full bg-[#F5F7FA]">
        <div className="flex justify-center px-4 sm:px-[59px] py-6 sm:py-[40px]">
          <div className="w-full max-w-[1200px]">
            <h1 className="text-3xl font-bold mb-6">Профиль</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
