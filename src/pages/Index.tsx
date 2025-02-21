import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, MessageSquare, Copy } from "lucide-react";
export default function Index() {
  const notifications = [{
    id: 1,
    title: "Уведомление о регистрации бизнеса",
    description: "Ожидается для реализации все до 31/01/2024",
    isNew: true
  }, {
    id: 2,
    title: "Уведомление об изменении в правилах..",
    description: "Ожидается для реализации все до 31/01/2024",
    isNew: true
  }, {
    id: 3,
    title: "Сообщение от НУК о регистрации потопа в..",
    description: "Ожидается для реализации все до 31/01/2024",
    isNew: false
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
  return <div className="min-h-screen bg-[#F5F7FA] flex">
      <AppSidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Личный кабинет</span>
              <span>→</span>
              <span>Иван Иванов</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
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
                      {documents.map((doc, index) => <div key={doc.id} className={`flex items-center justify-between px-6 py-4 ${index !== documents.length - 1 ? 'border-b border-gray-100' : ''}`}>
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
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>;
}
