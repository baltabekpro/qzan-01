
import { 
  Bell, 
  User, 
  FileText, 
  Clock, 
  CreditCard, 
  Lock,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: User, text: "Личный кабинет", href: "#" },
  { icon: Bell, text: "Уведомления", href: "#" },
  { icon: Lock, text: "Конфиденциальность", href: "#" },
  { icon: Clock, text: "История запросов", href: "#" },
  { icon: CreditCard, text: "Подписки и платежи", href: "#" },
];

export function AppSidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Logo</h1>
            <p className="text-sm text-gray-500">slogan</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
