
import { Check, File, Heart, Download, ThumbsUp, ThumbsDown, Copy, Volume2 } from "lucide-react";

interface Step {
  text: string;
  completed: boolean;
}

interface HistoryRequest {
  id: number;
  title: string;
  date: string;
  time: string;
  status: string;
  steps: Step[];
  chatContent?: {
    request: string;
    response: {
      intro: string;
      content: string;
      conclusion: string;
    };
  };
}

interface HistoryRequestsProps {
  requests: HistoryRequest[];
}

export const HistoryRequests = ({
  requests
}: HistoryRequestsProps) => {
  return (
    <div className="space-y-4">
      {requests.map(request => (
        <div key={request.id} className="relative bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <div className="bg-[#E6EAF3] p-3 rounded-[9px] text-black font-roboto text-[18px]">
                  {request.title}
                </div>
                <p className="text-xs text-[#202295]">{request.date} {request.time}</p>
              </div>

              {request.chatContent ? (
                <div className="space-y-4">
                  <p className="text-[18px] text-black font-roboto">
                    {request.chatContent.response.intro}
                  </p>

                  <div className="border border-[#9898BF] rounded-[9px] bg-white p-6 shadow-[0px_7px_4px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center space-x-2 mb-4">
                      <File className="w-[25px] h-[25px] text-[#000000]" />
                      <span className="text-[18px] text-[#9898BF]">Договор NDA</span>
                    </div>
                    <p className="text-[18px] text-black font-roboto whitespace-pre-line">
                      {request.chatContent.response.content}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Volume2 className="w-[24px] h-[24px] text-[#9898BF]" />
                      <Copy className="w-[21px] h-[21px] text-[#9898BF]" />
                      <ThumbsUp className="w-[21px] h-[21px] text-[#9898BF]" />
                      <ThumbsDown className="w-[21px] h-[21px] text-[#9898BF]" />
                    </div>
                    <div className="flex items-center space-x-4">
                      <Heart className="w-[28px] h-[28px] text-[#9898BF]" />
                      <Download className="w-[28px] h-[28px] text-[#9898BF]" />
                    </div>
                  </div>

                  <p className="text-[18px] text-black font-roboto">
                    {request.chatContent.response.conclusion}
                  </p>
                </div>
              ) : (
                <div className="relative pl-5 space-y-5">
                  {request.steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="absolute left-0 w-2 h-2 rounded-full bg-[#60D54E] -translate-x-[2px]" />
                      <span className="text-xs text-[#B3B3B3]">{step.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-[#202295]">
              <Check className="w-4 h-4" />
              <span>{request.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
