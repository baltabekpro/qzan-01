import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Plus } from "lucide-react";
import { RequestSection } from "@/components/requests/RequestSection";

export default function Index() {
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

  return (
    <>
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 p-4">
        <span className="text-[22px] leading-[26px] text-[#202295]">Личный кабинет</span>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83325 14H22.1666M22.1666 14L13.9999 5.83331M22.1666 14L13.9999 22.1666" stroke="#202295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[22px] leading-[26px] text-[#202295]">Иван Иванов</span>
      </div>

      {/* Main content */}
      <div className="px-4 sm:px-[59px] py-[40px] h-screen overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <UserProfile />
            <RequestSection />
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
                    <div key={notification.id} className="flex items-start space-x-3 px-6 py-4 hover:bg-gray-50 transition-colors">
                      <MessageSquare className={`w-5 h-5 shrink-0 ${notification.isNew ? 'text-[#4338ca] fill-[#4338ca]' : 'text-gray-400 fill-gray-400'}`} />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 truncate">{notification.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5 truncate">{notification.description}</p>
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div>
                  {documents.map((doc, index) => (
                    <div key={doc.id} className={`flex items-center justify-between px-6 py-4 ${index !== documents.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
    </>
  );
}
