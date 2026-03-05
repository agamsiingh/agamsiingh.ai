"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaCheckCircle,
    FaSpinner,
} from "react-icons/fa";
import axios from "axios";

const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

const services = [
    "AI Agent Development",
    "Website Development",
    "Mobile App Development",
    "Graphic Design",
    "Video Editing",
    "AI Automation Systems",
    "IT Consulting",
    "Education Consulting",
    "Other",
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await axios.post(`${BACKEND_URL}/api/book-consultation`, form);
            setStatus("success");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } catch {
            setStatus("error");
            setErrorMsg("Failed to send. Please try WhatsApp or email directly.");
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Get In Touch
                    </span>
                    <h2 className="section-title">
                        Contact <span className="gradient-text">Us</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to start your project? Let&apos;s talk. We typically respond
                        within 2 hours.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-[var(--text-primary)] font-semibold text-xl">
                            Let&apos;s build something great together
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                            Whether you have a project in mind, need consulting, or want to
                            learn about AI and technology — we&apos;re here to help.
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            <a
                                href="tel:+918534855501"
                                className="flex items-center gap-4 glass border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors group"
                            >
                                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                                    <FaPhone className="text-cyan-400" />
                                </div>
                                <div>
                                    <div className="text-[var(--text-muted)] text-xs mb-0.5">Call Now</div>
                                    <div className="text-[var(--text-primary)] font-semibold">+91 85348 55501</div>
                                </div>
                            </a>

                            <a
                                href="mailto:agamcoder@gmail.com"
                                className="flex items-center gap-4 glass border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-colors group"
                            >
                                <div className="w-11 h-11 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                                    <FaEnvelope className="text-green-400" />
                                </div>
                                <div>
                                    <div className="text-[var(--text-muted)] text-xs mb-0.5">Email</div>
                                    <div className="text-[var(--text-primary)] font-semibold">agamcoder@gmail.com</div>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/918534855501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass border border-green-500/20 rounded-xl p-4 hover:border-green-500/40 transition-colors group"
                            >
                                <div className="w-11 h-11 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                                    <FaWhatsapp className="text-green-400 text-lg" />
                                </div>
                                <div>
                                    <div className="text-[var(--text-muted)] text-xs mb-0.5">WhatsApp</div>
                                    <div className="text-[var(--text-primary)] font-semibold">Chat on WhatsApp</div>
                                </div>
                            </a>
                        </div>

                        {/* Quick action buttons */}
                        <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
                            <a
                                href="tel:+918534855501"
                                className="btn-primary flex-1 min-w-[140px] py-3 rounded-xl text-white font-semibold text-sm text-center flex items-center justify-center gap-2"
                            >
                                <FaPhone /> Call Now
                            </a>
                            <a
                                href="https://wa.me/918534855501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary flex-1 min-w-[140px] py-3 rounded-xl text-white font-semibold text-sm text-center flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp /> WhatsApp
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass border border-cyan-500/20 rounded-2xl p-6 sm:p-8">
                            {status === "success" ? (
                                <div className="text-center py-12">
                                    <FaCheckCircle className="text-green-400 text-5xl mx-auto mb-4" />
                                    <h3 className="text-[var(--text-primary)] font-semibold text-xl mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm">
                                        We&apos;ll get back to you within 2 hours. You can also
                                        reach us on WhatsApp for faster response.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 btn-outline rounded-lg px-6 py-2 text-sm font-semibold"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-5">
                                        Book a Free Consultation
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[var(--text-muted)] text-xs mb-1.5 block">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Agam Singh"
                                                className="w-full glass border border-cyan-500/20 rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[var(--text-muted)] text-xs mb-1.5 block">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="you@example.com"
                                                className="w-full glass border border-cyan-500/20 rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[var(--text-muted)] text-xs mb-1.5 block">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full glass border border-cyan-500/20 rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[var(--text-muted)] text-xs mb-1.5 block">
                                            Service Needed *
                                        </label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full glass border border-cyan-500/20 rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-sm focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none"
                                            style={{ background: "rgba(15, 23, 42, 0.8)" }}
                                        >
                                            <option value="" disabled>
                                                Select a service
                                            </option>
                                            {services.map((s) => (
                                                <option key={s} value={s} className="bg-slate-900">
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-[var(--text-muted)] text-xs mb-1.5 block">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className="w-full glass border border-cyan-500/20 rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-400 text-xs">{errorMsg}</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="btn-primary w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <FaSpinner className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
