"use client";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-cyan-500/10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
                                <RiRobot2Line className="text-slate-900 text-lg" />
                            </div>
                            <span className="text-xl font-bold gradient-text font-[family-name:var(--font-poppins)]">
                                Agamsiingh.AI
                            </span>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 max-w-xs">
                            Helping businesses and startups scale using AI automation,
                            intelligent systems, and modern software development.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                                { icon: <FaGithub />, href: "#", label: "GitHub" },
                                { icon: <FaTwitter />, href: "#", label: "Twitter" },
                                {
                                    icon: <FaWhatsapp />,
                                    href: "https://wa.me/918534855501",
                                    label: "WhatsApp",
                                },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 glass border border-cyan-500/20 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-semibold mb-5">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="text-[var(--text-muted)] hover:text-cyan-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-semibold mb-5">Contact</h3>
                        <div className="space-y-3">
                            <a
                                href="tel:+918534855501"
                                className="flex items-center gap-2.5 text-[var(--text-muted)] hover:text-cyan-400 text-sm transition-colors"
                            >
                                <FaPhone className="text-cyan-400 flex-shrink-0" />
                                +91 85348 55501
                            </a>
                            <a
                                href="mailto:agamcoder@gmail.com"
                                className="flex items-center gap-2.5 text-[var(--text-muted)] hover:text-cyan-400 text-sm transition-colors"
                            >
                                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                                agamcoder@gmail.com
                            </a>
                            <a
                                href="https://wa.me/918534855501"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-[var(--text-muted)] hover:text-green-400 text-sm transition-colors"
                            >
                                <FaWhatsapp className="text-green-400 flex-shrink-0" />
                                WhatsApp Chat
                            </a>
                        </div>

                        <div className="mt-6 glass border border-cyan-500/15 rounded-xl p-4">
                            <p className="text-[var(--text-muted)] text-xs">📍 India</p>
                            <p className="text-[var(--text-muted)] text-xs mt-1">
                                🕐 Mon–Sat, 9 AM – 7 PM IST
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Agamsiingh.AI. All rights reserved.
                        Founded by Agam Singh.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Built with ❤️ in India · AI-powered technology services
                    </p>
                </div>
            </div>
        </footer>
    );
}
