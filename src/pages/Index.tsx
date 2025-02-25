
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Plus } from "lucide-react";
import { RequestSection } from "@/components/requests/RequestSection";

export default function Index() {
  const notifications = [/* ... keep existing code (notifications array) */];
  const documents = [/* ... keep existing code (documents array) */];

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      {/* Breadcrumb with improved mobile layout */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b border-gray-100 p-3 sm:p-4">
        <span className="text-base sm:text-lg lg:text-[22px] leading-[26px] text-[#202295]">Личный кабинет</span>
        <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83325 14H22.1666M22.1666 14L13.9999 5.83331M22.1666 14L13.9999 22.1666" stroke="#202295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-base sm:text-lg lg:text-[22px] leading-[26px] text-[#202295]">Иван Иванов</span>
      </div>

      {/* Main content with improved mobile spacing */}
      <div className="p-3 sm:px-6 lg:px-[59px] sm:py-6 lg:py-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-[1200px] mx-auto">
          {/* Left column */}
          <div className="space-y-4 sm:space-y-6">
            <UserProfile />
            <RequestSection />
          </div>

          {/* Right column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Notifications card */}
            <Card className="overflow-hidden">
              <CardHeader className="px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-medium flex items-center justify-between">
                  Уведомления
                  <span className="text-xs sm:text-sm font-normal text-gray-400">смотреть все</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div>
                  {notifications.map(notification => (
                    <div key={notification.id} className="flex items-start space-x-2 sm:space-x-3 px-3 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors">
                      <MessageSquare className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${notification.isNew ? 'text-[#4338ca] fill-[#4338ca]' : 'text-gray-400 fill-gray-400'}`} />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base truncate">{notification.title}</p>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">{notification.description}</p>
                      </div>
                      {notification.isRead && (
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="text-[10px] sm:text-xs text-gray-400 shrink-0">прочитано</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents card */}
            <Card className="bg-white shadow-sm">
              <CardHeader className="px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-semibold flex items-center justify-between">
                  Документы/Файлы
                  <button className="flex items-center text-xs sm:text-sm font-normal text-[#4338ca] hover:text-[#3730a3]">
                    <span className="mr-1">Добавить</span>
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div>
                  {documents.map((doc, index) => (
                    <div key={doc.id} className={`flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 ${index !== documents.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#4338ca]" />
                        <span className="text-xs sm:text-sm lg:text-base text-gray-900">{doc.name}</span>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <button className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                        </button>
                        <button className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
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
  );
}
