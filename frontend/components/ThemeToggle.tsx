"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-9 h-9" />;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 bg-slate-200/50 dark:bg-slate-800/50 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
}
