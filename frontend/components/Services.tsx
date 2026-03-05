"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    RiRobot2Line,
    RiCodeSSlashLine,
    RiSmartphoneLine,
    RiFlowChart,
    RiLightbulbLine,
    RiGraduationCapLine,
    RiPaletteLine,
    RiMovieLine,
} from "react-icons/ri";

const services = [
    {
        icon: <RiRobot2Line className="text-4xl text-cyan-400" />,
        title: "AI Agent Development",
        desc: "Build custom AI assistants, chatbots, and automation systems for businesses. Boost efficiency with intelligent AI-powered workflows.",
        color: "from-cyan-500/20 to-cyan-500/5",
        border: "border-cyan-500/25",
    },
    {
        icon: <RiCodeSSlashLine className="text-4xl text-blue-400" />,
        title: "Website Development",
        desc: "Modern responsive websites and landing pages for startups and companies. Beautiful UI, fast performance, and conversion-focused design.",
        color: "from-blue-500/20 to-blue-500/5",
        border: "border-blue-500/25",
    },
    {
        icon: <RiSmartphoneLine className="text-4xl text-purple-400" />,
        title: "Mobile App Development",
        desc: "Android and cross-platform mobile applications built with modern frameworks. From concept to App Store with quality assurance.",
        color: "from-purple-500/20 to-purple-500/5",
        border: "border-purple-500/25",
    },
    {
        icon: <RiFlowChart className="text-4xl text-green-400" />,
        title: "AI Automation Systems",
        desc: "Automate workflows using AI tools and APIs. Eliminate repetitive tasks, reduce costs, and scale your operations intelligently.",
        color: "from-green-500/20 to-green-500/5",
        border: "border-green-500/25",
    },
    {
        icon: <RiLightbulbLine className="text-4xl text-yellow-400" />,
        title: "IT Consulting",
        desc: "Technology architecture, strategy, and digital transformation consulting. Make smarter technology decisions for sustainable growth.",
        color: "from-yellow-500/20 to-yellow-500/5",
        border: "border-yellow-500/25",
    },
    {
        icon: <RiGraduationCapLine className="text-4xl text-pink-400" />,
        title: "Education Consulting",
        desc: "One-on-one mentoring for AI, programming, and technology learning. Accelerate your career with personalized guidance from an expert.",
        color: "from-pink-500/20 to-pink-500/5",
        border: "border-pink-500/25",
    },
    {
        icon: <RiPaletteLine className="text-4xl text-orange-400" />,
        title: "Graphic Design",
        desc: "Creative and modern visual identities, branding, social media assets, and UI/UX designs that captivate your audience.",
        color: "from-orange-500/20 to-orange-500/5",
        border: "border-orange-500/25",
    },
    {
        icon: <RiMovieLine className="text-4xl text-red-400" />,
        title: "Video Editing",
        desc: "Professional video production, motion graphics, and post-processing for marketing campaigns and social media content.",
        color: "from-red-500/20 to-red-500/5",
        border: "border-red-500/25",
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

export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const scrollToContact = () => {
        const el = document.querySelector("#contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="services"
            className="section-padding relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)",
            }}
        >
            {/* BG decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                        What We Do
                    </span>
                    <h2 className="section-title">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        End-to-end technology services from AI development to education
                        consulting — everything your business needs to thrive.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="services-grid">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className={`glass border ${svc.border} rounded-2xl p-6 card-hover flex flex-col`}
                        >
                            <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}
                            >
                                {svc.icon}
                            </div>
                            <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-3">
                                {svc.title}
                            </h3>
                            <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">
                                {svc.desc}
                            </p>
                            <button
                                onClick={scrollToContact}
                                className="mt-5 btn-outline rounded-full px-4 py-2 text-sm font-semibold w-full"
                            >
                                Get Quote
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
