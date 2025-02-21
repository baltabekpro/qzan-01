import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Copy } from "lucide-react";

export default function Index() {
  const notifications = [{
    id: 1,
    title: "Уведомление о регистрации бизнеса",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: true
  }, {
    id: 2,
    title: "Уведомление об изменении в правилах..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: true
  }, {
    id: 3,
    title: "Сообщение от НУК о регистрации логотипа в...",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true
  }, {
    id: 4,
    title: "Успешная подача заявления в ЦОН..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true
  }, {
    id: 5,
    title: "Вы завершили регистрацию на платформе..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true
  }];

  const documents = [{
    id: 1,
    name: "Заявление.pdf",
    size: "245 KB"
  }, {
    id: 2,
    name: "Разрешение на выставление.pdf",
    size: "1.2 MB"
  }, {
    id: 3,
    name: "Заявление на участия.pdf",
    size: "890 KB"
  }];

  const requests = [{
    id: 1,
    title: "Запрос на получение лицензии/разрешения",
    status: "В процессе",
    date: "05.02.2024",
    time: "10:35"
  }, {
    id: 2,
    title: "Запрос на изменение юридического адреса",
    status: "Новый",
    date: "05.02.2024",
    time: "10:35"
  }];

  return (
    <div className="min-h-screen w-screen bg-[#F5F7FA] overflow-x-hidden">
      <div className="relative mx-auto max-w-[1920px] min-h-screen">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[361px]">
          <Header />
          
          {/* Breadcrumb with exact positioning */}
          <div className="relative h-[60px] border-b border-gray-100">
            <span className="absolute left-[59px] top-[17px] text-[22px] leading-[26px] text-[#202295] font-['Roboto']">
              Личный кабинет
            </span>
            <span className="absolute left-[255px] top-[17px]">→</span>
            <span className="absolute left-[307px] top-[17px] text-[22px] leading-[26px] text-[#202295] font-['Roboto']">
              Иван Иванов
            </span>
          </div>

          {/* Main content area */}
          <div className="px-[59px] py-[40px]">
            {/* Increased width from 640px to 840px for left column */}
            <div className="grid grid-cols-[840px,1fr] gap-x-[37px]">
              <div className="space-y-6">
                <UserProfile />
                
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="border-b border-gray-100">
                    <div className="flex space-x-6 px-6">
                      <button className="py-4 font-medium text-[#4338ca] border-b-2 border-[#4338ca]">
                        Текущие запросы
                      </button>
                      <button className="py-4 text-gray-500">
                        Прошлые запросы
                      </button>
                      <button className="py-4 text-gray-500">
                        История запросов
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-medium">Запросы</h3>
                      <button className="text-sm text-[#4338ca]">
                        перейти к запросу
                      </button>
                    </div>
                    <div className="space-y-4 relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
                      {requests.map(request => <div key={request.id} className="relative z-10 flex items-start pl-8">
                          <div className="absolute left-3 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#4338ca] bg-white my-[34px] mx-[5px] py-[4px] px-[4px]" />
                          <div className="flex-1 p-4 bg-white border border-gray-100 rounded-lg hover:border-[#4338ca] transition-colors">
                            <h4 className="font-medium mb-1">{request.title}</h4>
                            <div className="text-sm text-gray-500">
                              {request.date} {request.time}
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="overflow-hidden">
                  <CardHeader className="px-6 py-4 border-b border-gray-100">
                    <CardTitle className="text-lg font-medium flex items-center justify-between">
                      Уведомления
                      <span className="text-sm font-normal text-gray-400">смотреть все</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div>
                      {notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className="flex items-start space-x-3 px-6 py-4 hover:bg-gray-50 transition-colors"
                        >
                          <MessageSquare 
                            className={`w-5 h-5 shrink-0 ${
                              notification.isNew 
                                ? 'text-[#4338ca]' 
                                : 'text-gray-400'
                            }`} 
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{notification.description}</p>
                          </div>
                          {notification.isRead && (
                            <span className="text-xs text-gray-400 shrink-0">прочитано</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-sm">
                  <CardHeader className="px-6 py-4 border-b border-gray-100">
                    <CardTitle className="text-base font-semibold flex items-center justify-between">
                      Документы/Файлы
                      <button className="flex items-center text-sm font-normal text-[#4338ca] hover:text-[#3730a3]">
                        <span className="mr-1">Добавить</span>
                        <span className="text-lg">+</span>
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div>
                      {documents.map((doc, index) => (
                        <div
                          key={doc.id}
                          className={`flex items-center justify-between px-6 py-4 ${
                            index !== documents.length - 1 ? 'border-b border-gray-100' : ''
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-[#4338ca]" />
                            <span className="text-sm text-gray-900">{doc.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                              <Copy className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                              <Download className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
