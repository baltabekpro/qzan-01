import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Copy, Plus } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState<'current' | 'past' | 'history'>('current');
  const notifications = [{
    id: 1,
    title: "Уведомление о регистрации бизнеса",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: true,
    bgColor: "#D9D9D9"
  }, {
    id: 2,
    title: "Уведомление об изменении в правилах..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: true,
    bgColor: "#D9D9D9"
  }, {
    id: 3,
    title: "Сообщение от НУК о регистрации логотипа в...",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true,
    bgColor: "#D9D9D9"
  }, {
    id: 4,
    title: "Успешная подача заявления в ЦОН..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true,
    bgColor: "#D9D9D9"
  }, {
    id: 5,
    title: "Вы завершили регистрацию на платформе..",
    description: "Уважаемый (ая) уведомляем вас об успешном..",
    isNew: false,
    isRead: true,
    bgColor: "#D9D9D9"
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
            <span className="absolute left-[59px] top-[17px] text-[22px] leading-[26px] text-[#202295]">
              Личный кабинет
            </span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[255px] top-[17px]">
              <path d="M5.83325 14H22.1666M22.1666 14L13.9999 5.83331M22.1666 14L13.9999 22.1666" stroke="#202295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute left-[307px] top-[17px] text-[22px] leading-[26px] text-[#202295]">
              Иван Иванов
            </span>
          </div>

          {/* Main content area */}
          <div className="px-4 sm:px-[59px] py-[40px]">
            <div className="grid grid-cols-1 xl:grid-cols-[840px,1fr] gap-6">
              <div className="space-y-6">
                <UserProfile />
                
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="border-b border-gray-100">
                    <div className="flex space-x-6 px-6">
                      <button 
                        className={`py-4 font-medium transition-colors duration-200 ${
                          activeTab === 'current' 
                            ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('current')}
                      >
                        Текущие запросы
                      </button>
                      <button 
                        className={`py-4 font-medium transition-colors duration-200 ${
                          activeTab === 'past' 
                            ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('past')}
                      >
                        Прошлые запросы
                      </button>
                      <button 
                        className={`py-4 font-medium transition-colors duration-200 ${
                          activeTab === 'history' 
                            ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('history')}
                      >
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
                                ? 'text-[#4338ca] fill-[#4338ca]' 
                                : 'text-gray-400 fill-gray-400'
                            }`} 
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{notification.description}</p>
                          </div>
                          {notification.isRead && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-400 shrink-0">прочитано</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="12" y1="18" x2="12" y2="12"/>
                          <line x1="9" y1="15" x2="15" y2="15"/>
                        </svg>
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
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
