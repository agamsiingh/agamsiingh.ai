"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-cyan-500/10" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => scrollTo("#home")}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
                                <RiRobot2Line className="text-slate-900 text-lg" />
                            </div>
                            <span className="text-xl font-bold gradient-text font-[family-name:var(--font-poppins)]">
                                Agamsiingh.AI
                            </span>
                        </motion.div>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-[var(--text-muted)] hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex flex-none items-center gap-2 xl:gap-3">
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="btn-primary px-4 xl:px-5 py-2 rounded-full text-white text-sm font-semibold whitespace-nowrap"
                            >
                                Book <span className="hidden xl:inline">Consultation</span>
                            </button>
                            <a
                                href="https://wa.me/918534855501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary px-3 xl:px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap"
                            >
                                <FaWhatsapp className="text-base" /> <span className="hidden xl:inline">WhatsApp</span>
                            </a>
                            <div className="ml-1 items-center justify-center">
                                <ThemeToggle />
                            </div>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--text-primary)] bg-slate-200/50 dark:bg-slate-800/50 rounded-lg hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 right-0 z-40 glass border-t border-cyan-500/10"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-[var(--text-muted)] hover:text-cyan-400 text-sm font-medium text-left transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 pt-2 border-t border-cyan-500/10">
                                <button
                                    onClick={() => scrollTo("#contact")}
                                    className="btn-primary px-5 py-2 rounded-full text-white text-sm font-semibold"
                                >
                                    Book Consultation
                                </button>
                                <a
                                    href="https://wa.me/918534855501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-1.5"
                                >
                                    <FaWhatsapp className="text-base" /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
