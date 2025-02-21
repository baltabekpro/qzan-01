
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

export default function Index() {
  const notifications = [
    {
      id: 1,
      title: "Уведомление о регистрации бизнеса",
      description: "Ожидается для реализации все до 31/01/2024",
      isNew: true,
    },
    {
      id: 2,
      title: "Уведомление об изменении в правилах..",
      description: "Ожидается для реализации все до 31/01/2024",
      isNew: true,
    },
    {
      id: 3,
      title: "Сообщение от НУК о регистрации потопа в..",
      description: "Ожидается для реализации все до 31/01/2024",
      isNew: false,
    },
  ];

  const documents = [
    { id: 1, name: "Заявление.pdf", size: "245 KB" },
    { id: 2, name: "Разрешение на выставление.pdf", size: "1.2 MB" },
    { id: 3, name: "Заявление на участия.pdf", size: "890 KB" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex">
      <AppSidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Личный кабинет</span>
              <span>→</span>
              <span>Иван Иванов</span>
            </div>
            
            <UserProfile />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center justify-between">
                    Уведомления
                    <span className="text-sm font-normal text-gray-500">смотреть все</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className={`w-2 h-2 mt-2 rounded-full ${notification.isNew ? 'bg-[#4338ca]' : 'bg-gray-300'}`} />
                        <div>
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-500">{notification.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center justify-between">
                    Документы/Файлы
                    <button className="text-sm font-normal text-[#4338ca] hover:text-[#3730a3]">
                      Добавить
                    </button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-gray-500">{doc.size}</p>
                          </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                          <Download className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
