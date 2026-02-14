import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "", bgColor = "var(--bg-primary)" }) => {
    return (
        <section
            id={id}
            className={className}
            style={{
                padding: '100px 2rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: bgColor
            }}
        >
            <div className="container" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
