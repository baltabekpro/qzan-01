import { Heart, Download, ThumbsUp, ThumbsDown, Copy, Volume2, FileText, ArrowRightCircle, PaperclipIcon } from "lucide-react";

export default function TestChatPage() {
  return (
    <>

      {/* Main content */}
      <div>
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="w-full max-w-[814px] mx-auto">
            {/* User Query */}
            <div className="mb-8 flex justify-end">
              <div className="bg-[#E6EAF3] rounded-[9px] flex items-center px-4 py-3 w-fit">
          <span className="text-[18px] text-black font-normal leading-[20px]">
            Составь договор NDA для сотрудника компании
          </span>
              </div>
            </div>

            {/* AI Response Text */}
            <div className="mt-8 mb-6">
              <p className="font-roboto text-[18px] leading-[21px] text-black">
                Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:
              </p>
            </div>

            {/* Document Container */}
            <div className="w-[814px] p-6 bg-white border border-[#9898BF] shadow-[0px_7px_4px_rgba(0,0,0,0.05)] rounded-[9px] text-left">
              <div className="flex items-center gap-3 mb-4">
              <FileText className="w-[25px] h-[25px] text-[#9898BF]" />
              <span className="text-[18px] text-[#9898BF] leading-[21px]">Договор NDA</span>
              </div>
              <div className="pr-6">
              <div className="text-[18px] leading-[21px] text-black space-y-4">
                <div className="mb-4">СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)</div>
                <div className="mb-4">г. ________________ "_" __________ 20 г.</div>
                
                <div className="mb-4">1. СТОРОНЫ СОГЛАШЕНИЯ</div>
                <div className="mb-4">Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:</div>
                
                <div className="mb-4">1.1. Работодателем: ________________, в лице ________________, 
                действующего на основании ________________, именуемым в дальнейшем "Компания";</div>
                
                <div className="mb-4">1.2. Сотрудником: ________________, паспорт серия ____, 
                номер ________, зарегистрированным по адресу: ________________, 
                именуемым в дальнейшем "Сотрудник".</div>
              </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-2 mb-6 flex items-center gap-4">
              <Volume2 className="w-4 h-4 text-[#9898BF] stroke-[1.5]" />
              <div className="flex items-center gap-[16px]">
              <Copy className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
              <ThumbsUp className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
              <ThumbsDown className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
              <Heart className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
              <Download className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
              </div>
            </div>

            {/* Response Message */}
            <div className="mb-6 font-roboto text-[18px] leading-[21px] text-black text-left">
              Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. 
              Если нужно внести изменения или добавить дополнительные условия, дай знать!
            </div>

            {/* Input Box */}
            <div className="absolute bottom-10 w-[814px] h-[56px] flex items-center bg-white rounded-[9px] px-3 mx-auto">
              <PaperclipIcon className="w-[28px] h-[28px] text-[#202295] ml-2" />
              <input
              type="text"
              placeholder="Составь договор NDA для сотрудника компании"
              className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none font-roboto"
              />
              <ArrowRightCircle className="w-[28px] h-[28px] text-[#202295] mr-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
