
import { useState } from "react";
import { RequestTabs } from "./RequestTabs";
import { CurrentRequests } from "./CurrentRequests";
import { HistoryRequests } from "./HistoryRequests";
import { HistoryRequest } from "@/types/requests";

type TabType = 'current' | 'past' | 'history';

interface Request {
  id: number;
  title: string;
  status: string;
  date: string;
  time: string;
}

export const RequestSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('current');

  const requests: Request[] = [{
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

  const historyRequests: HistoryRequest[] = [
    {
      id: 1,
      title: "Составь договор NDA для сотрудника компании",
      date: "05.02.2024",
      time: "10:35",
      status: "исполнено",
      chatContent: {
        request: "Составь договор NDA для сотрудника компании",
        response: {
          intro: "Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:",
          content: `СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)

г. ________________ "_" __________ 20 г.

1. СТОРОНЫ СОГЛАШЕНИЯ
Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:

1.1. Работодателем: ________________, в лице ________________, действующего на основании ________________, именуемым в дальнейшем "Компания";

1.2. Сотрудником: ________________, паспорт серия ____, номер ________, зарегистрированным по адресу: ________________, именуемым в дальнейшем "Сотрудник".`,
          conclusion: "Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. Если нужно внести изменения или добавить дополнительные условия, дай знать!"
        }
      }
    },
    {
      id: 2,
      title: "Запрос на выписку от ЕГРЮЛ",
      date: "05.02.2024",
      time: "10:35",
      status: "исполнено",
      steps: [
        {
          text: "Получено ЕГРЮЛ РК",
          completed: true
        },
        {
          text: "Направлено в отдел кадров",
          completed: true
        },
        {
          text: "Готово к скачиванию",
          completed: true
        }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryRequests requests={historyRequests} />;
      default:
        return <CurrentRequests requests={requests} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium">Запросы</h3>
          <button className="text-sm text-[#4338ca]">перейти к началу</button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};
