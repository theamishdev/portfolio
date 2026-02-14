import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold gradient-text"
                    style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                    Amish Verma
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium hover:text-[var(--accent-primary)]"
                            style={{ fontSize: '0.875rem', fontWeight: '500' }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 ml-4"
                        style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}
                    >
                        <a href="https://github.com/theamishdev" target="_blank" rel="noopener noreferrer">
                            <Github size={20} className="cursor-pointer hover:text-[var(--accent-primary)]" />
                        </a>
                        <a href="https://www.linkedin.com/in/amish12/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} className="cursor-pointer hover:text-[var(--accent-primary)]" />
                        </a>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden" style={{ display: 'none' }}> {/* Hidden for now, simplified */}
                    {/* Add mobile menu if needed later */}
                </div>
            </div>

            <style jsx>{`
        nav {
          padding: 1rem 0;
          width: 100%;
        }
        .container {
           padding: 0 2rem;
        }
        @media (max-width: 768px) {
           .hidden { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
