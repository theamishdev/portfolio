import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import ProjectCard from '@/components/common/ProjectCard';
import MagicBento from '@/components/common/MagicBento/MagicBento';
import ElectricBorder from '@/components/common/ElectricBorder/ElectricBorder';
import { PROJECTS_CONTENT } from '@/constants/content';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SectionWrapper id="projects">
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999]"
                        style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
                    >
                        {console.log('Rendering MagicBento with:', selectedProject)}
                        <MagicBento
                            projectData={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '4rem' }}
            >
                <h2 className="text-4xl font-bold mb-4">
                    {PROJECTS_CONTENT.title} <span className="gradient-text">{PROJECTS_CONTENT.titleAccent}</span>
                </h2>
                <p className="text-[var(--text-secondary)] max-w-xl" style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
                    {PROJECTS_CONTENT.description}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {PROJECTS_CONTENT.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <ElectricBorder
                            color="#5eead4"
                            speed={0.5}
                            chaos={0.08}
                            borderRadius={24}
                        >
                            <ProjectCard {...project} onClick={() => setSelectedProject(project)} />
                        </ElectricBorder>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
