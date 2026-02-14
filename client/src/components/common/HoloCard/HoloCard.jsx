import React, { useRef, useState, useCallback } from 'react';
import '@/styles/HoloCard.css';

const HoloCard = ({ children, className = '', maxWidth = '400px' }) => {
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

    return (
        <div
            ref={wrapRef}
            className={`pc-card-wrapper ${className}`}
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
                maxWidth: maxWidth
            }}
        >
            <div className="pc-behind" />
            <div ref={shellRef} className="pc-card-shell">
                <div className="pc-inside aspect-square glass shadow-2xl overflow-hidden p-1">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <div className="pc-shine" />
                        <div className="pc-glare" />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoloCard;
