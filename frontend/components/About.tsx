"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Who We Are
                    </span>
                    <h2 className="section-title">
                        About <span className="gradient-text">Agamsiingh.AI</span>
                    </h2>
                    <p className="section-subtitle">
                        A technology powerhouse built for the digital age
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="space-y-6 text-[var(--text-muted)] text-base leading-relaxed">
                            <p>
                                <span className="text-cyan-400 font-semibold">Agamsiingh.AI</span>{" "}
                                is a technology service company founded by{" "}
                                <span className="text-[var(--text-primary)] font-semibold">Agam Singh</span>. The
                                company focuses on building AI-powered solutions, intelligent
                                automation systems, modern websites, and scalable applications.
                            </p>

                            {/* Added Image */}
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-cyan-500/20 shadow-lg glow-cyan my-8">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                    alt="Agamsiingh.AI Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-cyan-400 font-semibold text-lg mb-1 flex items-center gap-2">
                                        <FaRocket /> Our Mission
                                    </h3>
                                    <p className="text-slate-200 text-sm">
                                        To make powerful technology accessible to startups, businesses,
                                        and learners — bridging the gap between innovation and
                                        real-world impact.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button
                                onClick={() => {
                                    const el = document.querySelector("#contact");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="btn-primary px-6 py-3 rounded-xl text-white font-semibold"
                            >
                                Work With Us
                            </button>
                            <a
                                href="https://wa.me/918534855501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline px-6 py-3 rounded-xl font-semibold"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: value cards */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {[
                            {
                                icon: <FaLightbulb className="text-2xl text-yellow-400" />,
                                title: "Innovation First",
                                desc: "We embrace cutting-edge AI and software technologies to build future-ready solutions.",
                            },
                            {
                                icon: <FaRocket className="text-2xl text-cyan-400" />,
                                title: "Fast Delivery",
                                desc: "Agile development process ensures your project is delivered on time, every time.",
                            },
                            {
                                icon: <FaUsers className="text-2xl text-green-400" />,
                                title: "Client-Centric",
                                desc: "Your success is our priority. We build lasting partnerships, not just projects.",
                            },
                            {
                                icon: <span className="text-2xl">🇮🇳</span>,
                                title: "Made in India",
                                desc: "Proudly serving global clients with world-class technology from India.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="glass border border-cyan-500/15 rounded-xl p-5 card-hover"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h4 className="text-[var(--text-primary)] font-semibold mb-1">{item.title}</h4>
                                <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
