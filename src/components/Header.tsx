
import { Bell, Plus, Search, User, FileText } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Уведомление о регистрации",
      description: "Уведомляем вас об успешной регистрации...",
      isNew: true,
    },
    {
      id: 2,
      title: "Изменение в правилах",
      description: "Важные изменения в правилах использования...",
      isNew: true,
    },
  ];

  const documents = [
    { id: 1, name: "Договор услуг", size: "245 KB" },
    { id: 2, name: "Соглашение", size: "1.2 MB" },
    { id: 3, name: "Политика", size: "890 KB" },
  ];

  return (
    <header className="h-[64px] w-full border-b border-gray-100 bg-white">
      <div className="h-full flex items-center justify-between px-4 sm:px-[59px]">
        {/* Left side - User info */}
        <div className="flex items-center space-x-2 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-[#202295]" />
            </div>
            <span className="text-[#202295] font-medium text-lg sm:text-2xl hidden sm:inline">Иван Иванов</span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search - toggleable on mobile */}
          <div className={`${showSearch ? 'absolute left-0 right-0 px-4 bg-white h-[64px] flex items-center' : 'hidden'} sm:relative sm:flex`}>
            <input
              type="text"
              placeholder="поиск"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-[33px] w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#202295] focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-6 sm:left-3 top-1/2 transform -translate-y-1/2" />
            {showSearch && (
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 sm:hidden"
                onClick={() => setShowSearch(false)}
              >
                Отмена
              </Button>
            )}
          </div>
          
          {!showSearch && (
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setShowSearch(true)}
            >
              <Search className="w-5 h-5" />
            </Button>
          )}

          {/* Notifications */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-[400px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle>Уведомления</SheetTitle>
              </SheetHeader>
              <div className="overflow-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
                    <h3 className="font-medium text-sm">{notification.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
                    {notification.isNew && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mt-2">
                        Новое
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Documents */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <FileText className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-[400px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle>Документы</SheetTitle>
              </SheetHeader>
              <div className="overflow-auto">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <h3 className="font-medium text-sm">{doc.name}</h3>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Add button */}
          <Button size="icon" className="bg-[#202295] text-white hover:bg-[#202295]/90 rounded-full">
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
