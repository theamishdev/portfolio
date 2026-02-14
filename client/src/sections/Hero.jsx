import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';
import { HERO_CONTENT } from '@/constants/content';

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <SectionWrapper id="home" className="relative overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-20 right-[10%] w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-[120px] opacity-20"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-20 left-[10%] w-72 h-72 bg-[var(--accent-secondary)] rounded-full blur-[120px] opacity-20"
            />

            <div className="text-center z-10 w-full" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ opacity }}
                >
                    <motion.p
                        className="text-[var(--accent-primary)] font-semibold mb-4 uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {HERO_CONTENT.badge}
                    </motion.p>
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6"
                        style={{ fontSize: 'min(10vw, 5rem)', marginBottom: '1.5rem' }}
                    >
                        {HERO_CONTENT.title} <br />
                        <span className="gradient-text">{HERO_CONTENT.titleAccent}</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
                        style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                    <div className="flex justify-center gap-6" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="#projects" className="btn btn-primary">{HERO_CONTENT.ctaPrimary}</a>
                        <a href="#contact" className="btn glass" style={{ padding: '0.8rem 1.6rem', borderRadius: '8px' }}>{HERO_CONTENT.ctaSecondary}</a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ opacity }}
            >
                <ChevronDown size={32} className="text-[var(--text-secondary)]" />
            </motion.div>

            <style jsx>{`
        .absolute { position: absolute; }
        .z-10 { z-index: 10; }
        .rounded-full { border-radius: 9999px; }
        .blur-[120px] { filter: blur(120px); }
      `}</style>
        </SectionWrapper>
    );
};

export default Hero;
