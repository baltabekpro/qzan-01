
import { PageTransition } from "@/components/PageTransition";
import { Bot, ArrowRightCircle, PaperclipIcon, Clock, X } from "lucide-react";
import { useState } from "react";

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function AIChatPage() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      content: 'Здравствуйте! Чем я могу вам помочь сегодня?',
      timestamp: new Date()
    }
  ]);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        content: `Я обрабатываю ваш запрос: "${inputValue}"`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA] flex">
        {/* Sidebar with chat history */}
        {showSidebar && (
          <div className="w-80 bg-white border-r border-gray-200 shadow-sm h-screen flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bot className="h-5 w-5 text-[#202295]" />
                История чатов
              </h2>
              <button 
                onClick={() => setShowSidebar(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-3 space-y-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-sm">Чат #{index + 1}</h3>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatTime(new Date(Date.now() - index * 86400000))}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    {index % 2 === 0 
                      ? "Вопрос по составлению договора"
                      : "Консультация по налоговому праву"}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t border-gray-200">
              <button className="w-full py-2 bg-[#202295] text-white rounded-lg hover:bg-[#161870] transition-colors flex items-center justify-center gap-2">
                <Bot className="h-4 w-4" />
                Новый чат
              </button>
            </div>
          </div>
        )}
        
        {/* Main chat area */}
        <div className="flex-1 flex flex-col h-screen">
          {/* Chat header */}
          <div className="bg-white p-4 shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-3">
              {!showSidebar && (
                <button 
                  onClick={() => setShowSidebar(true)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <Bot className="h-5 w-5 text-[#202295]" />
                </button>
              )}
              <h1 className="text-xl font-bold">AI Чат</h1>
            </div>
            <div className="text-sm text-gray-500">
              Сессия активна
            </div>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3xl rounded-lg p-4 ${
                    message.sender === 'user' 
                      ? 'bg-[#202295] text-white' 
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <span className="font-medium">
                      {message.sender === 'user' ? 'Вы' : 'AI Ассистент'}
                    </span>
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
              <button className="p-2 text-gray-500 hover:text-[#202295]">
                <PaperclipIcon className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Введите ваш вопрос..."
                className="flex-1 bg-transparent outline-none p-2"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-full ${
                  inputValue.trim() 
                    ? 'text-[#202295] hover:bg-blue-100' 
                    : 'text-gray-400'
                }`}
              >
                <ArrowRightCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
