"use client";

import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Best 2-day itinerary for Marayoor?",
  "Jeep safari rates & viewpoint routes?",
  "What are the top attractions in Marayoor?",
  "Stay options & booking enquiry?",
];

interface AiChatWidgetProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function AiChatWidget({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: AiChatWidgetProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "🙏 Namaste! Welcome to Marayoor Tourism!\n\n🌿 I am your official Trip Planner AI. Ask me about:\n\n🏕️ Jeep Safari routes & viewpoints\n🏡 Rooms & stays in Marayoor\n🌲 Sandalwood forest walks\n💧 Waterfalls & nature trails\n📅 Custom itinerary planning\n\n📞 Direct booking: +91 98765 43210",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having a brief connection delay. Please call or WhatsApp our local tour team directly at +91 98765 43210 for instant trip assistance!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[580px] h-[540px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-emerald-500/20 flex flex-col overflow-hidden animate-fade-up">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-green-900 text-white p-4 flex items-center justify-between border-b border-emerald-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-emerald-700/50 flex items-center justify-center text-emerald-200 border border-emerald-400/30">
            <span className="material-symbols-outlined text-[22px]">
              smart_toy
            </span>
          </div>
          <div>
            <h4 className="font-bold text-[16px] leading-tight flex items-center gap-1.5">
              Marayoor Trip Planner AI
              <span className="inline-block w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
            </h4>
            <p className="text-[11px] text-emerald-200/90 font-medium">
              Official Marayoor Tourism Guide
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-emerald-100/80 hover:text-white p-1.5 rounded-full hover:bg-emerald-700/50 transition-colors"
          aria-label="Close Chat"
        >
          <span className="material-symbols-outlined text-[20px]">
            close
          </span>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50 dark:bg-slate-950/50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-emerald-700 text-white rounded-br-none shadow-sm"
                  : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/60 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-2xl text-sm flex items-center space-x-2 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-semibold">AI is thinking...</span>
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Suggestions */}
      <div className="px-3 py-2 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
        {SUGGESTIONS.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSend(s)}
            className="whitespace-nowrap text-[11px] font-medium bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-600/30 px-2.5 py-1 rounded-full hover:bg-emerald-700 hover:text-white transition-colors shrink-0 shadow-2xs"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Marayoor AI Assistant..."
          className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:border-emerald-600 text-slate-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-10 h-10 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center disabled:opacity-40 transition-colors shrink-0 shadow-md"
          aria-label="Send Message"
        >
          <span className="material-symbols-outlined text-[20px]">
            send
          </span>
        </button>
      </form>
    </div>
  );
}

