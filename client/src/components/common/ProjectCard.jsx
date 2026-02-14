import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github, onClick }) => {
    return (
        <motion.div
            className="glass p-6 rounded-2xl group relative overflow-hidden cursor-pointer"
            onClick={onClick}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ borderRadius: '1.5rem', padding: '1.5rem', height: '100%', position: 'relative' }}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px' }} />

            <div className="flex justify-between items-start mb-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 className="text-2xl font-bold">{title}</h3>
                <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                    <a href={github || "#"} target="_blank" rel="noreferrer"><Github className="cursor-pointer hover:text-[var(--accent-primary)] transition-colors" size={20} /></a>
                    <a href={link || "#"} target="_blank" rel="noreferrer"><ExternalLink className="cursor-pointer hover:text-[var(--accent-primary)] transition-colors" size={20} /></a>
                </div>
            </div>

            <p className="text-[var(--text-secondary)] mb-8" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {description}
            </p>

            <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-[rgba(99,102,241,0.1)] text-[var(--accent-primary)] text-xs font-semibold rounded-full"
                        style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
