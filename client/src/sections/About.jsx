import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import { ABOUT_CONTENT } from '@/constants/content';
import profileImg from '@/assets/images/profile.png';
import HoloCard from '@/components/common/HoloCard/HoloCard';
import '@/styles/HoloCard.css';

const About = () => {
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
                    <HoloCard>
                        <img
                            src={profileImg}
                            alt="Amish Verma"
                            className="pc-avatar-img"
                        />
                    </HoloCard>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
