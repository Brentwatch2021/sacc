import { useState } from 'react';
import { MessageCircle, X, Send, Phone, User } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/27776012775?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const quickReplies = [
    'I want to apply for 2026',
    'Tell me about programmes',
    'Fee information',
    'Bursary options',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-200">
          {/* Header */}
          <div className="bg-[#25d366] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold">SSACT Support</h4>
                <p className="text-xs opacity-90">Typically replies in minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#f0f2f5] p-4 h-64 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3 max-w-[85%]">
              <p className="text-sm text-gray-700">
                Hello! 👋 Welcome to SSACT. How can we help you today?
              </p>
              <p className="text-xs text-gray-400 mt-1">Just now</p>
            </div>

            {/* Quick Replies */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 mb-2">Quick options:</p>
              {quickReplies.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMessage(reply);
                  }}
                  className="block w-full text-left bg-white rounded-lg p-2 text-sm text-gray-700 hover:bg-[#25d366] hover:text-white transition-colors shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="bg-white p-3 border-t flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25d366]"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-[#25d366] text-white rounded-full flex items-center justify-center hover:bg-[#128c7e] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-2 text-center border-t">
            <a 
              href="https://wa.me/27776012775" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-[#25d366] flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3" /> Open in WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gray-600 rotate-90' : 'bg-[#25d366] hover:bg-[#128c7e] hover:scale-110'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          1
        </span>
      )}
    </div>
  );
}
