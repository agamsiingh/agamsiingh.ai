"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "AI Chat Assistant",
        desc: "A custom AI-powered chatbot built on GPT and LangChain for customer support automation, integrated with WhatsApp and web platforms.",
        tags: ["AI", "LangChain", "Python", "WhatsApp API"],
        gradient: "from-cyan-500 to-blue-600",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Power BI Dashboard",
        desc: "Business intelligence dashboard with real-time data visualization, KPI tracking, and executive reporting for a manufacturing company.",
        tags: ["Power BI", "DAX", "SQL", "Azure"],
        gradient: "from-yellow-500 to-orange-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Netflix Clone Web App",
        desc: "Full-featured streaming platform clone with user authentication, dynamic content loading, and responsive UI built with React.",
        tags: ["React", "Node.js", "Firebase", "TMDB API"],
        gradient: "from-red-500 to-pink-600",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Workflow Automation Tool",
        desc: "End-to-end business process automation using n8n and custom Python scripts. Reduced manual work by 80% for an e-commerce client.",
        tags: ["n8n", "Python", "API Integration", "MongoDB"],
        gradient: "from-green-500 to-emerald-600",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

export default function Portfolio() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="portfolio" className="section-padding relative overflow-hidden">
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
                        Our Work
                    </span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Portfolio</span>
                    </h2>
                    <p className="section-subtitle">
                        A snapshot of real projects we&apos;ve delivered — from AI agents to
                        full-stack applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            whileHover={{ y: -6 }}
                            className="glass border border-cyan-500/15 rounded-2xl overflow-hidden card-hover group"
                        >
                            {/* Project image */}
                            <div
                                className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover mix-blend-overlay opacity-80" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="glass border border-cyan-500/20 rounded-full px-3 py-1 text-xs text-cyan-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="btn-outline rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2 w-full justify-center">
                                    <FaExternalLinkAlt size={12} /> View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
