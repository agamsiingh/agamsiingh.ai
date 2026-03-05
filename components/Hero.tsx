"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowDown } from "react-icons/fa";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
            x: number; y: number; vx: number; vy: number; r: number; alpha: number;
        }[] = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.1,
            });
        }

        let animId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
                ctx.fill();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated canvas */}
            <canvas ref={canvasRef} id="particles-canvas" />

            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

            {/* Content with padding to prevent navbar overlap */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:py-0 mt-10 md:mt-0 flex flex-col items-center justify-center text-center">
                {/* Main Content */}
                <div className="w-full">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden dark:inline-flex items-center gap-2 glass border border-cyan-500/30 rounded-full px-5 py-2 mb-8 mx-auto"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[var(--text-muted)] text-sm font-medium">
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-poppins)] mb-6 leading-tight flex flex-col items-center justify-center w-full"
                    >
                        <span className="text-[var(--text-primary)] text-center block w-full">AI Automation, Apps &</span>
                        <span className="gradient-text text-glow text-center block w-full mt-2">Web Development</span>
                        <span className="text-[var(--text-primary)] text-center block w-full mt-2">Solutions</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-[var(--text-muted)] text-lg sm:text-xl max-w-2xl mx-auto mb-6 text-center text-balance"
                    >
                        Helping businesses and startups scale using AI automation, intelligent
                        systems, and modern software development.
                    </motion.p>

                    {/* Feature pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2 mb-10"
                    >
                        {[
                            "AI Agents",
                            "Web Applications",
                            "Mobile Apps",
                            "Graphic Design",
                            "Video Editing",
                            "Automation Systems",
                            "IT Consulting",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="glass border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-300 text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
                    >
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-base inline-flex items-center justify-center gap-2"
                        >
                            Book Free Consultation
                        </button>
                        <a
                            href="https://wa.me/918534855501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary px-8 py-4 rounded-xl text-white font-semibold text-base inline-flex items-center justify-center gap-2"
                        >
                            <FaWhatsapp size={20} /> Chat on WhatsApp
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-12 lg:mt-20"
                    >
                        {[
                            { value: "50+", label: "Projects Delivered" },
                            { value: "30+", label: "Happy Clients" },
                            { value: "5+", label: "Years Experience" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl font-bold gradient-text font-[family-name:var(--font-poppins)]">
                                    {stat.value}
                                </div>
                                <div className="text-[var(--text-muted)] text-sm mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollTo("#about")}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Scroll down"
            >
                <FaArrowDown size={20} />
            </motion.button>
        </section>
    );
}
