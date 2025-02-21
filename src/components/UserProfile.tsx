
import { Button } from "@/components/ui/button";

export function UserProfile() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <img
            src="/lovable-uploads/ca1b39ee-7b34-44b4-a030-2d8d495f98a1.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <Pencil className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Иван Иванов</h2>
              <p className="text-sm text-gray-500">учетная запись (ЕСИА)</p>
            </div>
            <Button variant="outline" size="sm">
              редактировать
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Пол</p>
              <p>Мужской</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Адрес</p>
              <p>Название 3/2</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">ИНН/КПП</p>
              <p className="text-indigo-600">отсутствует</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Вид деятельности</p>
              <p>Производство шин</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
