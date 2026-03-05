"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaCheck, FaCalendarAlt } from "react-icons/fa";

const plans = [
    {
        title: "Basic Website",
        price: "₹8,000 – ₹20,000",
        color: "border-blue-500/40",
        glow: "from-blue-500/20 to-blue-500/5",
        iconColor: "text-blue-400",
        features: [
            "Landing page design",
            "Fully responsive layout",
            "Contact form",
            "Fast loading",
            "Basic SEO setup",
        ],
    },
    {
        title: "Business Website",
        price: "₹20,000 – ₹60,000",
        color: "border-cyan-500/60",
        glow: "from-cyan-500/25 to-cyan-500/5",
        iconColor: "text-cyan-400",
        badge: "Popular",
        features: [
            "Multiple pages",
            "SEO optimization",
            "Admin panel (optional)",
            "CMS integration",
            "Analytics setup",
            "3 months support",
        ],
    },
    {
        title: "AI Automation",
        price: "₹15,000 – ₹1,00,000+",
        color: "border-purple-500/40",
        glow: "from-purple-500/20 to-purple-500/5",
        iconColor: "text-purple-400",
        features: [
            "Custom AI agents",
            "Workflow automation",
            "API integrations",
            "Business logic automation",
            "Monitoring & alerts",
        ],
    },
    {
        title: "Mobile Apps",
        price: "₹30,000 – ₹2,00,000+",
        color: "border-green-500/40",
        glow: "from-green-500/20 to-green-500/5",
        iconColor: "text-green-400",
        features: [
            "Android or cross-platform",
            "Optional AI features",
            "App Store submission",
            "Push notifications",
            "6 months support",
        ],
    },
    {
        title: "Consultation",
        price: "₹500 – ₹2,000/session",
        color: "border-yellow-500/40",
        glow: "from-yellow-500/20 to-yellow-500/5",
        iconColor: "text-yellow-400",
        features: [
            "One-on-one session",
            "AI or tech guidance",
            "Roadmap planning",
            "Career mentoring",
            "Resource sharing",
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1 },
    }),
};

export default function Pricing() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const scrollToContact = () => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="pricing"
            className="section-padding relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(34,197,94,0.03) 50%, transparent 100%)",
            }}
        >
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Transparent Pricing
                    </span>
                    <h2 className="section-title">
                        Service <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        Affordable, transparent pricing for every budget. Get enterprise-grade
                        quality at startup-friendly rates.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            whileHover={{ y: -8 }}
                            className={`glass border ${plan.color} rounded-2xl p-6 card-hover relative flex flex-col`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                                    {plan.badge}
                                </div>
                            )}

                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.glow} flex items-center justify-center mb-4`}
                            >
                                <FaCalendarAlt className={`${plan.iconColor} text-xl`} />
                            </div>

                            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-1">
                                {plan.title}
                            </h3>
                            <div className={`text-2xl font-bold ${plan.iconColor} mb-5 font-[family-name:var(--font-poppins)]`}>
                                {plan.price}
                            </div>

                            <ul className="space-y-2.5 flex-1 mb-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5 text-[var(--text-muted)] text-sm">
                                        <FaCheck className="text-green-400 text-xs flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={scrollToContact}
                                className="btn-primary rounded-lg px-4 py-2.5 text-sm font-semibold text-white w-full"
                            >
                                Book Appointment
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
