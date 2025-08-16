"use client";
import { motion, AnimatePresence } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { IconCloud } from "@/components/iconCloud"
import ShinyButton from "@/components/ui/shiny-button"
import { AnimatedTooltip } from "@/components/socialinks"
import { socials } from "@/data"
import { useState } from "react";

export default function HeroPage() {
    const [showResume, setShowResume] = useState(false);

    return (
        <>
            <HeroHighlight className="flex flex-col md:flex-row  items-center justify-center">
                <IconCloud />
                <div className="flex flex-col items-center justify-center ">
                    <Hero />
                    <div className="relative">
                        <div
                            onMouseEnter={() => setShowResume(true)}
                            onMouseLeave={() => setShowResume(false)}
                        >
                            <ShinyButton text="Resume" link="https://drive.google.com/file/d/1-6w4ZaOSEpTNMD_sDrbU6GNLWHbTClqM/view?usp=sharing" />
                        </div>
                        
                        <AnimatePresence>
                            {showResume && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50"
                                    onMouseEnter={() => setShowResume(true)}
                                    onMouseLeave={() => setShowResume(false)}
                                >
                                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume Preview</h3>
                                            <a
                                                href="https://drive.google.com/file/d/1-6w4ZaOSEpTNMD_sDrbU6GNLWHbTClqM/view?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                Open Full View →
                                            </a>
                                        </div>
                                        <iframe
                                            src="https://drive.google.com/file/d/1-6w4ZaOSEpTNMD_sDrbU6GNLWHbTClqM/preview"
                                            width="600"
                                            height="700"
                                            className="border-0"
                                            title="Resume Preview"
                                            allow="autoplay"
                                        />
                                    </div>
                                    {/* Arrow pointer */}
                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    <div className="flex flex-row items-center justify-center mt-4 md:mt-6 mr-8 w-full">
                        <AnimatedTooltip items={socials.sort((a, b) => a.id - b.id)} />
                    </div>
                </div>
            </HeroHighlight>
        </>
    );
}

const Hero = () => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2 md:py-4">
                HEY, I&apos;M SHIVENDRA
            </p>
            <p className="text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
                A full Stack developer
                <br />
            </p>

            building <Highlight>seamless</Highlight> interfaces
            <br /> &nbsp; and <Highlight>robust</Highlight> backends
        </motion.h1>
    );
};