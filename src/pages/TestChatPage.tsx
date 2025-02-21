
import { Heart, Download, ThumbsUp, ThumbsDown, Copy, Volume2, FileText, ArrowRightCircle, PaperclipIcon } from "lucide-react";

export default function TestChatPage() {
  return (
    <div className="min-h-screen bg-white p-8 relative">
      <div className="w-[427px] h-[39px] bg-[#E6EAF3] rounded-[9px] flex items-center px-4 mb-8">
        <span className="text-[18px] text-black font-normal">
          Составь договор NDA для сотрудника компании
        </span>
      </div>

      <div className="mt-4">
        <p className="text-[18px] text-black mb-4">
          Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:
        </p>

        <div className="w-[814px] h-[381px] bg-white border border-[#9898BF] rounded-[9px] shadow-md p-6 relative">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-[25px] h-[25px] text-[#9898BF]" />
            <span className="text-[18px] text-[#9898BF]">Договор NDA</span>
          </div>

          <div className="pr-6">
            <p className="text-[18px] text-black leading-[21px]">
              СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)
              г. ________________ "_" __________ 20 г.

              1. СТОРОНЫ СОГЛАШЕНИЯ

              Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:

              1.1. Работодателем: ________________, в лице ________________, 
              действующего на основании ________________, именуемым в дальнейшем "Компания";

              1.2. Сотрудником: ________________, паспорт серия ____, 
              номер ________, зарегистрированным по адресу: ________________, 
              именуемым в дальнейшем "Сотрудник".
            </p>
          </div>

          <div className="absolute right-4 top-16 w-[12px] h-[49px] bg-[#E6EAF3] rounded-[15px]" />
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Volume2 className="w-6 h-6 text-[#9898BF]" />
          <div className="flex items-center gap-2">
            <Copy className="w-5 h-5 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
            <ThumbsUp className="w-5 h-5 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
            <ThumbsDown className="w-5 h-5 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
            <Heart className="w-7 h-7 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
            <Download className="w-7 h-7 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
          </div>
        </div>

        <p className="text-[18px] text-black mt-4 mb-8">
          Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. 
          Если нужно внести изменения или добавить дополнительные условия, дай знать!
        </p>

        <div className="w-[814px] h-[56px] bg-white rounded-[9px] flex items-center px-3 gap-3">
          <PaperclipIcon className="w-7 h-7 text-[#B3B3B3]" />
          <span className="text-[16px] text-[#9898BF] flex-1">
            Составь договор NDA для сотрудника компании
          </span>
          <ArrowRightCircle className="w-7 h-7 text-[#B3B3B3]" />
        </div>
      </div>
    </div>
  );
}
