"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Startup Founder",
        company: "TechFlow India",
        quote:
            "Agamsiingh.AI helped automate our workflow with AI tools. The results were remarkable — we saved 60+ hours per week. Highly recommended for any business looking to embrace AI!",
        rating: 5,
        avatar: "RS",
        color: "from-cyan-500 to-blue-500",
    },
    {
        name: "Priya Mehta",
        role: "CEO",
        company: "Nexova Solutions",
        quote:
            "Very professional website development service. Agam delivered a stunning website that exceeded our expectations. The attention to detail and the final design are world-class.",
        rating: 5,
        avatar: "PM",
        color: "from-purple-500 to-pink-500",
    },
    {
        name: "Vikram Nair",
        role: "IT Manager",
        company: "DataBridge Corp",
        quote:
            "Great consultation session for learning AI automation. Agam's expertise and teaching style made complex concepts easy to understand. I've already started implementing what I learned.",
        rating: 5,
        avatar: "VN",
        color: "from-green-500 to-emerald-500",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="testimonials"
            className="section-padding relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)",
            }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Client Reviews
                    </span>
                    <h2 className="section-title">
                        What Clients <span className="gradient-text">Say</span>
                    </h2>
                    <p className="section-subtitle">
                        Real feedback from real clients. Building trust, one project at a
                        time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                            className="glass border border-cyan-500/15 rounded-2xl p-6 card-hover flex flex-col"
                        >
                            <FaQuoteLeft className="text-cyan-500/40 text-3xl mb-4" />

                            <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-6">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <FaStar key={j} className="text-yellow-400 text-sm" />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-[var(--text-primary)] font-semibold text-sm">
                                        {t.name}
                                    </div>
                                    <div className="text-[var(--text-muted)] text-xs">
                                        {t.role} · {t.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
