
import { Header } from "@/components/Header";
import { PaperclipIcon, ArrowRightCircle, File, Key, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AIChatPage() {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA]">
      <div className="flex h-full">
        <div className="flex-1 h-full flex flex-col max-w-[1559px] mx-auto">
          <Header />
          {/* Centered main area with improved responsiveness */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-[814px] mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold font-roboto mb-3 sm:mb-4 text-center">
                Как я могу вам помочь?
              </h1>
              <p className="text-base sm:text-lg lg:text-[20px] font-light text-[#B3B3B3] text-center mb-12 sm:mb-16 lg:mb-24">
                ваш личный юридический помощник
              </p>
              {/* Suggestion Cards with responsive layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-20 lg:mb-32 w-full">
                <Card className="w-full bg-white rounded-[9px] p-4 hover:shadow-lg transition-shadow">
                  <File className="w-[25px] h-[25px] mb-4 sm:mb-6" />
                  <p className="text-[14px] leading-5 font-normal text-black">
                    "Напиши заявление в ЕГОВ для выдачи разрешения"
                  </p>
                </Card>
                <Card className="w-full bg-white rounded-[9px] p-4 hover:shadow-lg transition-shadow">
                  <Key className="w-[25px] h-[25px] mb-4 sm:mb-6" />
                  <p className="text-[14px] leading-5 font-normal text-black">
                    "Составь официальный договор NDA для сотрудника компании"
                  </p>
                </Card>
                <Card className="w-full bg-white rounded-[9px] p-4 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                  <CheckSquare className="w-[25px] h-[25px] mb-4 sm:mb-6" />
                  <p className="text-[14px] leading-5 font-normal text-black">
                    "Напиши список документов для подачи заявки в ЛДРК"
                  </p>
                </Card>
              </div>
              {/* Input Field with improved responsiveness */}
              <div className="w-full h-[56px] flex items-center bg-white rounded-[9px] px-3 shadow-sm hover:shadow-md transition-shadow">
                <PaperclipIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9898BF] ml-2" />
                <input
                  type="text"
                  placeholder="Составь договор NDA для сотрудника компании"
                  className="flex-1 h-full px-3 sm:px-4 text-sm sm:text-base font-light text-[#9898BF] focus:outline-none"
                />
                <ArrowRightCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#9898BF] mr-2 cursor-pointer hover:text-[#202295] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
