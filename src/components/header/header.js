"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import wordmarkwL from '../../assets/logos/inflectionWML.svg'; //logo workmark and desc
import whiteLogo from '../../assets/logos/logoWhite.png';
import { assetSrc } from "../../utils/assetSource";

const HeaderComponent = ({ smoother }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to check scroll position and update header state
    const checkScrollPosition = () => {
        const target = document.querySelector('.main-content-container');
        if (target) {
            const viewportHeight = window.innerHeight;
            const rect = target.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const isTaking80Percent = visibleHeight / viewportHeight >= 0.7;
            setIsScrolled(isTaking80Percent);
        }
    };

    // Check for stored scroll target on mount
    useEffect(() => {
        const scrollTarget = sessionStorage.getItem('scrollTarget');
        if (scrollTarget && smoother) {
            // Clear the stored target
            sessionStorage.removeItem('scrollTarget');
            // Wait for the page to be fully rendered
            setTimeout(() => {
                const target = document.querySelector(scrollTarget);
                if (target) {
                    smoother.scrollTo(target, true, "top");
                    // Check scroll position after the scroll animation
                    setTimeout(checkScrollPosition, 1000);
                }
            }, 500);
        }
    }, [smoother]);

    // Check if the device is mobile
    useEffect(() => {
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        updateIsMobile(); // Check on mount
        window.addEventListener('resize', updateIsMobile); // Update on resize

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    useEffect(() => {
        // Trigger on load and on scroll
        checkScrollPosition(); // Initial check
        window.addEventListener('scroll', checkScrollPosition);

        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);


    const smoothScrollTo = (sectionId) => {
        if (window.location.pathname !== "/") {
            return;
        }

        if (smoother) {
            setTimeout(() => {
                const target = document.querySelector(sectionId);
                if (target) {
                    smoother.scrollTo(target, true, "top");
                    setMenuOpen(false);
                    // Check scroll position after the scroll animation
                    setTimeout(checkScrollPosition, 1000);
                }
            });
        }
    };

    const handleSectionLinkClick = (event, sectionId) => {
        setMenuOpen(false);
        setMobileMenuOpen(false);

        if (window.location.pathname === "/" && smoother) {
            event.preventDefault();
            smoothScrollTo(sectionId);
        }
    };

    const handleWordmarkClick = (e) => {
        if (isMobile) {
            e.preventDefault();
            setMobileMenuOpen(!mobileMenuOpen);
        }
    };

    return (
        <>
            <header
                className={`header-header-container ${isScrolled ? "scrolled" : ""}`}
            >
                <div className="wordmark-header">
                    <a href="/" onClick={handleWordmarkClick}>
                        <img
                            src={assetSrc(isMobile ? whiteLogo : wordmarkwL)}
                            alt="Inflection Wordmark"
                        />
                    </a>
                </div>
                <div className='header-navLinks-container'>
                    <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
                        <svg className="menu-icon" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="3" width="50" height="3" rx="3" fill="#02231a"></rect>
                            <rect y="13" width="50" height="3" rx="3" fill="#02231a"></rect>
                            <rect y="23" width="50" height="3" rx="3" fill="#02231a"></rect>
                        </svg>
                    </button>
                    <nav className={`nav ${menuOpen ? "open" : ""}`}>
                        <button className="close-menu" onClick={() => setMenuOpen(false)}>
                            <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className="nav-list">
                            {/* <li>
                                <button onClick={() => (window.location.href = "/")} className="header-nav-link">Home</button>
                            </li> */}
                            {/* <li>
                                <button onClick={() => smoothScrollTo('#services')} className="header-nav-link">Services</button>
                            </li> */}
                            <li>
                                <Link href="/services" onClick={() => setMenuOpen(false)} className="header-nav-link">Services</Link>
                            </li>
                            <li>
                                <Link href="/team" onClick={() => setMenuOpen(false)} className="header-nav-link">Team</Link>
                            </li>
                            <li>
                                <Link href="/#about" onClick={(event) => handleSectionLinkClick(event, '#about')} className="header-nav-link">About Us</Link>
                            </li>
                            <li>
                                <Link href="/#contact" onClick={(event) => handleSectionLinkClick(event, '#contact')} className="header-nav-link">Contact</Link>
                            </li>
                            <li>
                                <a
                                    href="https://inflection.addepar.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="header-nav-link"
                                >
                                    Log In
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>

                {/* Mobile Full Screen Menu */}
                {isMobile && (
                    <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="mobile-menu-nav">
                            <ul className="mobile-menu-list">
                                <li>
                                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">Home</Link>
                                </li>
                                <li>
                                    <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">Services</Link>
                                </li>
                                <li>
                                    <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="mobile-menu-link">Team</Link>
                                </li>
                                <li>
                                    <a
                                        href="https://inflection.addepar.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mobile-menu-link"
                                    >
                                        Log In
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default HeaderComponent;
