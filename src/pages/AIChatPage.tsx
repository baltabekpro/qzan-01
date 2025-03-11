
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Привет! Как я могу вам помочь сегодня?", sender: "ai" },
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

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA]">
        <div className="flex justify-center px-4 sm:px-[59px] py-6 sm:py-[40px] relative">
          {/* Profile link in top right corner */}
          <Link to="/profile" className="absolute right-8 top-8">
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Профиль
            </Button>
          </Link>

          <div className="w-full max-w-[1200px]">
            <h1 className="text-3xl font-bold mb-6 flex items-center">
              <MessageCircle className="mr-2 h-8 w-8 text-[#202295]" />
              AI Чат
            </h1>
            
            <div className="flex flex-col h-[70vh]">
              {/* Chat messages container */}
              <Card className="flex-grow mb-4 overflow-y-auto">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === 'user' 
                              ? 'bg-[#4338ca] text-white' 
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Message input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Введите ваше сообщение..."
                  className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#202295]"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSendMessage();
                  }}
                />
                <Button onClick={handleSendMessage} className="p-3 bg-[#202295]">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
