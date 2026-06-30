"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    const mailtoLink = `mailto:reshmithareddychaikam@gmail.com?subject=Hello from Portfolio&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setMessage("");
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-heading mb-12"
        >
          Get In Touch
          <span className="block w-12 h-0.5 bg-bdr-h mt-3" />
        </motion.h2>

        {/* Chatbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-bdr rounded-2xl bg-card card-lift overflow-hidden"
        >
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-bdr">
            <div className="w-9 h-9 rounded-full bg-profile-bg flex items-center justify-center text-sm font-bold text-heading">
              RR
            </div>
            <div>
              <p className="text-sm font-semibold text-heading">Reshmitha Reddy</p>
              <p className="text-[11px] text-sec flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Usually replies within a day
              </p>
            </div>
          </div>

          {/* Chat messages */}
          <div className="px-5 py-6 space-y-4 min-h-[140px]">
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-subtle flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-sec">
                RR
              </div>
              <div className="bg-subtle border border-bdr rounded-xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-foreground">
                  Hey! 👋 Thanks for visiting my portfolio. Have a project idea, job opportunity, or just want to say hi? Drop me a message below!
                </p>
              </div>
            </div>

            {sent && (
              <div className="flex justify-end">
                <div className="bg-heading text-background rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                  <p className="text-sm">Message sent! ✓</p>
                </div>
              </div>
            )}
          </div>

          {/* Chat input */}
          <div className="px-4 py-3 border-t border-bdr flex gap-2 items-end">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={1}
              className="flex-1 px-4 py-2.5 bg-subtle border border-bdr rounded-xl text-sm text-heading placeholder-muted focus:outline-none focus:border-bdr-h transition-colors resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              onClick={handleSend}
              className="p-2.5 bg-heading text-background rounded-xl hover:bg-accent-hover transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center gap-6"
        >
          <a href="mailto:reshmithareddychaikam@gmail.com" className="text-sm text-muted hover:text-heading transition-colors">
            Email
          </a>
          <a href="https://github.com/Reshmitha06" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-heading transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/chaikam-reshmitha-reddy-75b486263" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-heading transition-colors">
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
