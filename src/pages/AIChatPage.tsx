
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, User, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Как я могу вам помочь?", sender: "ai" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { id: Date.now(), text: newMessage, sender: "user" }]);
    setNewMessage("");
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Спасибо за ваше сообщение! Я обрабатываю ваш запрос.", 
        sender: "ai" 
      }]);
    }, 1000);
  };

  const recentQueries = [
    "Составь договор конфиденциальности...",
    "Напиши заявление на официальное...",
    "Какой есть список требуемых документов...",
    "Существует ли лист ожидания для ИП..."
  ];

  const suggestionCards = [
    {
      icon: "File",
      title: '"Напиши заявление в ЕГОВ для выдачи разрешения"'
    },
    {
      icon: "Key",
      title: '"Хочу открыть компанию"'
    },
    {
      icon: "CheckSquare",
      title: '"Напиши список документов для подачи заявки в ЛДРК"'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA]">
        <div className="relative flex h-screen">
          {/* Profile button in top right */}
          <div className="absolute right-8 top-8 z-10 flex items-center gap-2">
            <div className="flex flex-col items-end">
              <Link to="/profile" className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-lg font-normal">Иван Иванов</span>
                  <span className="text-sm text-[#9898BF]">ivanov.i@gmail.com</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#202295] flex items-center justify-center text-white">
                  <User className="h-6 w-6" />
                </div>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="mb-8 text-center">
              <h1 className="text-5xl font-semibold mb-2">Как я могу вам помочь?</h1>
              <p className="text-[#B3B3B3] text-xl font-light">ваш личный юридический помощник</p>
            </div>
            
            <div className="w-full max-w-[814px] mt-12">
              {/* Suggestion cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {suggestionCards.map((card, index) => (
                  <Card key={index} className="p-3 cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-2">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 mt-1 text-[#202295]">
                          {card.icon === "File" && <MessageCircle size={24} />}
                          {card.icon === "Key" && <User size={24} />}
                          {card.icon === "CheckSquare" && <MessageCircle size={24} />}
                        </div>
                        <p className="text-sm">{card.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Message input */}
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-[814px]">
                <div className="flex items-center gap-2 bg-white rounded-lg border border-[#9898BF] p-2 shadow-md">
                  <Button variant="ghost" className="p-2 text-[#202295]">
                    <Paperclip size={24} />
                  </Button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Составь договор NDA для сотрудника компании"
                    className="flex-grow p-3 focus:outline-none text-[#9898BF] bg-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleSendMessage();
                    }}
                  />
                  <Button onClick={handleSendMessage} className="p-2 bg-[#202295] text-white rounded-full hover:bg-[#1a1d80]">
                    <Send size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
