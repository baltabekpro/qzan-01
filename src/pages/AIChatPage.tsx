
import { PageTransition } from "@/components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Lock, Clock, CreditCard, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AIChatPage() {
  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA]">
        <div className="flex justify-center px-4 sm:px-[59px] py-6 sm:py-[40px]">
          <div className="w-full max-w-[1200px]">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">AI Чат</h1>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                asChild
              >
                <Link to="/profile">
                  <ArrowLeft className="h-4 w-4" />
                  Перейти в Профиль
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Chat interface */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col h-[500px]">
                  {/* Chat history */}
                  <div className="flex-1 overflow-y-auto mb-4 border rounded-lg p-4">
                    <div className="bg-blue-50 p-3 rounded-lg mb-4 max-w-[80%]">
                      <p className="text-sm text-gray-800">Здравствуйте! Чем я могу вам помочь сегодня?</p>
                      <p className="text-xs text-gray-500 mt-1">Ассистент ИИ, 12:30</p>
                    </div>
                    
                    <div className="bg-gray-100 p-3 rounded-lg mb-4 max-w-[80%] ml-auto">
                      <p className="text-sm text-gray-800">У меня есть вопрос по моему аккаунту</p>
                      <p className="text-xs text-gray-500 mt-1">Вы, 12:31</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg mb-4 max-w-[80%]">
                      <p className="text-sm text-gray-800">Конечно, я готов помочь. Какой у вас вопрос по аккаунту?</p>
                      <p className="text-xs text-gray-500 mt-1">Ассистент ИИ, 12:32</p>
                    </div>
                  </div>
                  
                  {/* Chat input */}
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Введите сообщение..." 
                      className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202295]"
                    />
                    <Button className="bg-[#202295] hover:bg-[#202295]/90">
                      Отправить
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Additional chat features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Clock className="h-8 w-8 text-[#202295]" />
                    <CardTitle className="text-xl">История чата</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Просмотр истории всех взаимодействий с AI ассистентом</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Bell className="h-8 w-8 text-[#202295]" />
                    <CardTitle className="text-xl">Уведомления</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Настройка уведомлений о новых сообщениях от AI</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Lock className="h-8 w-8 text-[#202295]" />
                    <CardTitle className="text-xl">Конфиденциальность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Настройки безопасности и конфиденциальности чата</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
