import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import { ABOUT_CONTENT } from '@/constants/content';
import profileImg from '@/assets/images/profile.png';
import '@/styles/HoloCard.css';

const About = () => {
    const wrapRef = useRef(null);
    const shellRef = useRef(null);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = useCallback((e) => {
        if (!shellRef.current || !wrapRef.current) return;
        const rect = shellRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;

        const rotateX = (py - 50) / 5;
        const rotateY = (px - 50) / -5;

        wrapRef.current.style.setProperty('--pointer-x', `${px}%`);
        wrapRef.current.style.setProperty('--pointer-y', `${py}%`);
        wrapRef.current.style.setProperty('--rotate-x', `${rotateY}deg`);
        wrapRef.current.style.setProperty('--rotate-y', `${rotateX}deg`);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <SectionWrapper id="about" bgColor="var(--bg-secondary)">
            <div className="flex flex-col md:flex-row gap-16 items-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    className="w-full md:w-1/2"
                    {...fadeInUp}
                    style={{ flex: '1', minWidth: '300px' }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        {ABOUT_CONTENT.title} <br />
                        <span className="gradient-text">{ABOUT_CONTENT.titleAccent}</span>
                    </h2>
                    <div className="text-[var(--text-secondary)] space-y-6" style={{ color: 'var(--text-secondary)' }}>
                        {ABOUT_CONTENT.paragraphs.map((p, i) => (
                            <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>
                        ))}
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6" style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        {ABOUT_CONTENT.skills.map((skillGroup, i) => (
                            <div key={i}>
                                <h4 className="font-bold mb-2">{skillGroup.category}</h4>
                                <ul className="text-sm list-none" style={{ fontSize: '0.875rem' }}>
                                    {skillGroup.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                >
                    <div
                        ref={wrapRef}
                        className="pc-card-wrapper"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setOpacity(1)}
                        onMouseLeave={() => {
                            setOpacity(0);
                            if (wrapRef.current) {
                                wrapRef.current.style.setProperty('--rotate-x', '0deg');
                                wrapRef.current.style.setProperty('--rotate-y', '0deg');
                            }
                        }}
                        style={{
                            '--card-opacity': opacity,
                            width: '100%',
                            maxWidth: '400px'
                        }}
                    >
                        <div className="pc-behind" />
                        <div ref={shellRef} className="pc-card-shell">
                            <div className="pc-inside aspect-square glass shadow-2xl overflow-hidden p-1">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    <div className="pc-shine" />
                                    <div className="pc-glare" />
                                    <img
                                        src={profileImg}
                                        alt="Amish Verma"
                                        className="pc-avatar-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
