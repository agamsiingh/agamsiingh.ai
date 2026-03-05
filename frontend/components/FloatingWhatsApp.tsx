"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="glass border border-green-500/30 rounded-xl px-4 py-2 text-sm text-[var(--text-primary)] shadow-lg mb-1"
                    >
                        Chat with us on WhatsApp! 💬
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href="https://wa.me/918534855501"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setShowTooltip(true)}
                onHoverEnd={() => setShowTooltip(false)}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl"
                style={{ boxShadow: "0 8px 30px rgba(34, 197, 94, 0.4)" }}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="text-[var(--text-primary)] text-2xl" />
            </motion.a>
        </div>
    );
}
