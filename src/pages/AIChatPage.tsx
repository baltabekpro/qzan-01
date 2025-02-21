
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { PaperclipIcon, ArrowRightCircle, File, Key, CheckSquare, Heart, Download, ThumbsUp, ThumbsDown, Copy } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AIChatPage() {
  return (
    <div className="min-h-screen w-screen bg-[#F5F7FA] overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] h-full">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[361px] h-full flex flex-col">
          <Header />
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col items-center px-4 relative">
            <h1 className="text-[48px] font-semibold font-roboto mb-4 text-center">
              Как я могу вам помочь ?
            </h1>
            <p className="text-[20px] font-light text-[#B3B3B3] text-center mb-24">
              ваш личный юридический помощник
            </p>

            {/* Chat History */}
            <div className="absolute left-[917px] top-[182px] w-[427px] h-[39px] bg-[#E6EAF3] rounded-[9px] flex items-center px-3">
              <span className="text-[18px] font-normal text-black">
                Составь договор NDA для сотрудника компании
              </span>
            </div>

            <div className="absolute left-[530px] top-[259px] w-[761px] h-[21px] flex items-center">
              <span className="text-[18px] font-normal">
                Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:
              </span>
            </div>

            {/* Document Box */}
            <div className="absolute left-[530px] top-[318px] w-[814px] h-[381px] bg-white border border-[#9898BF] shadow-[0px_7px_4px_rgba(0,0,0,0.05)] rounded-[9px] p-6">
              <div className="flex items-center mb-4">
                <File className="w-[25px] h-[25px] text-[#9898BF]" />
                <span className="ml-3 text-[18px] text-[#9898BF]">Договор NDA</span>
                <div className="absolute right-4 top-4">
                  <div className="w-[25px] h-[25px] relative" />
                </div>
              </div>
              
              <div className="px-6">
                <p className="text-[18px] leading-[21px] text-black">
                  СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)
                  г. ________________ "_" __________ 20 г.
                  
                  1. СТОРОНЫ СОГЛАШЕНИЯ
                  
                  Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:
                  
                  1.1. Работодателем: ________________, в лице ________________, действующего на основании ________________, именуемым в дальнейшем "Компания";
                  
                  1.2. Сотрудником: ________________, паспорт серия ____, номер ________, зарегистрированным по адресу: ________________, именуемым в дальнейшем "Сотрудник".
                </p>
              </div>

              <div className="absolute right-4 bottom-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-[28px] h-[28px] text-[#9898BF] cursor-pointer" />
                  <Download className="w-[28px] h-[28px] text-[#9898BF] cursor-pointer" />
                </div>
              </div>

              <div className="absolute right-4 h-[49px] w-[12px] top-[85px] bg-[#E6EAF3] rounded-[15px]" />
            </div>

            <div className="absolute left-[529px] top-[721px] w-[782px] h-[42px] flex items-center">
              <span className="text-[18px] font-normal leading-[21px]">
                Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. Если нужно внести изменения или добавить дополнительные условия, дай знать!
              </span>
            </div>

            <div className="absolute left-[530px] top-[773px] flex items-center space-x-4">
              <Copy className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer" />
              <ThumbsUp className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer" />
              <ThumbsDown className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer" />
            </div>

            {/* Suggestion Cards */}
            <div className="flex justify-center gap-6 mb-32">
              <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4 relative">
                <File className="w-[25px] h-[25px] mb-6" />
                <p className="text-[14px] leading-4 font-normal text-black">
                  "Напиши заявление в ЕГОВ для выдачи разрешения"
                </p>
              </Card>

              <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4 relative">
                <Key className="w-[25px] h-[25px] mb-6" />
                <p className="text-[14px] leading-4 font-normal text-black">
                  "Составь официальный договор NDA для сотрудника компании"
                </p>
              </Card>

              <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4 relative">
                <CheckSquare className="w-[25px] h-[25px] mb-6" />
                <p className="text-[14px] leading-4 font-normal text-black">
                  "Напиши список документов для подачи заявки в ЛДРК"
                </p>
              </Card>
            </div>

            {/* Input Field */}
            <div className="fixed bottom-12 w-[814px] h-[56px] flex items-center bg-white rounded-[9px] px-3">
              <PaperclipIcon className="w-[28px] h-[28px] text-[#9898BF] ml-2" />
              <input
                type="text"
                placeholder="Составь договор NDA для сотрудника компании"
                className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none"
              />
              <ArrowRightCircle className="w-[28px] h-[28px] text-[#9898BF] mr-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
