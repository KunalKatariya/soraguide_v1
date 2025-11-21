import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ customAction }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide "Login" if we are on login page, dashboard, or any guide page
    const hideLogin = ['/login', '/dashboard'].includes(location.pathname) || location.pathname.startsWith('/guide');

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <Compass className="logo-icon" />
                    <span>SoraGuide</span>
                </Link>

                <div className="desktop-menu">
                    {customAction ? (
                        customAction
                    ) : (
                        !hideLogin && (
                            <Link to="/login" className="btn btn-primary">
                                Login
                            </Link>
                        )
                    )}
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    {customAction ? (
                        <div className="full-width">
                            {React.cloneElement(customAction, { isMobile: true })}
                        </div>
                    ) : (
                        !hideLogin && (
                            <Link to="/login" className="btn btn-primary full-width" onClick={() => setIsMobileMenuOpen(false)}>
                                Login
                            </Link>
                        )
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
