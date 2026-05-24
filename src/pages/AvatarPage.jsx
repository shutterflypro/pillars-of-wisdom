import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { avatarApi } from '../lib/api';
import { Send, Sparkles } from 'lucide-react';

export default function AvatarPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setLoading(true);

    const thinkingIdx = messages.length + 1;
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMsg },
      { role: 'assistant', content: '', thinking: true },
    ]);

    try {
      const response = await avatarApi.chat(userMsg, sessionId);
      if (response.sessionId && !sessionId) {
        setSessionId(response.sessionId);
      }
      setMessages((prev) => {
        const updated = [...prev];
        updated[thinkingIdx] = { role: 'assistant', content: response.reply, thinking: false };
        return updated;
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[thinkingIdx] = { role: 'assistant', content: 'Sorry, I couldn\'t reach the server. Please try again.', thinking: false };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="font-heading text-2xl font-bold text-white">AI Avatar</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-[2px] w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="h-[2px] w-8 bg-gold" />
        </div>
      </motion.div>

      <div className="flex-1 bg-[rgba(15,29,50,0.9)] backdrop-blur-[12px] rounded-2xl border border-gold/15 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-gold text-navy'
                    : 'bg-navy-muted text-slate-300 border border-gold/10'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span className="text-gold text-xs font-semibold">AI Avatar</span>
                  </div>
                )}
                {msg.thinking ? (
                  <div className="flex items-center gap-2 text-sm text-slate-muted">
                    <span className="inline-flex gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                    <span>Thinking</span>
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 border-t border-gold/15">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-[#0a1628] border border-gold/20 rounded-xl px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="btn-gold px-4 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
