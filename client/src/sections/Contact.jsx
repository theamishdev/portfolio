import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';
import { CONTACT_CONTENT } from '@/constants/content';

const Contact = () => {
    return (
        <SectionWrapper id="contact" bgColor="var(--bg-secondary)" className="relative overflow-hidden">
            <div className="text-center w-full" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                    style={{ maxWidth: '48rem', margin: '0 auto' }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        {CONTACT_CONTENT.title} <br />
                        <span className="gradient-text">{CONTACT_CONTENT.titleAccent}</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] text-xl mb-12" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem' }}>
                        {CONTACT_CONTENT.description}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        <a
                            href={`mailto:${CONTACT_CONTENT.email}`}
                            className="btn btn-primary flex items-center gap-2 group"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Send an Email <Mail size={18} />
                        </a>

                        <div className="flex gap-6" style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="https://github.com/theamishdev" target="_blank" rel="noopener noreferrer">
                                <Github className="cursor-pointer hover:text-[var(--accent-primary)] transition-colors" size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/amish12/" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="cursor-pointer hover:text-[var(--accent-primary)] transition-colors" size={24} />
                            </a>
                            <Twitter className="cursor-pointer hover:text-[var(--accent-primary)] transition-colors" size={24} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="absolute bottom-6 left-0 w-full px-8 flex justify-between items-center text-sm text-[var(--text-secondary)]" style={{ position: 'absolute', bottom: '1.5rem', width: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                <p>© 2026 Amish Verma. All rights reserved.</p>
                <p>Built with React & Framer Motion</p>
            </footer>
        </SectionWrapper>
    );
};

export default Contact;
