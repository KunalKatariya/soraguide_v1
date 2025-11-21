import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Your Companion for Life in Japan</span>
                    <h1 className="hero-title">
                        Settling in Japan <br />
                        <span className="text-highlight">Made Simple.</span>
                    </h1>
                    <p className="hero-description">
                        SoraGuide removes the confusion of moving to and living in Japan.
                        Get clear, step-by-step support for paperwork, housing, and daily life.
                    </p>
                    <div className="hero-actions">
                        <Link to="/personalize" className="btn btn-primary">
                            Start Your Journey
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-circle"></div>
                    <div className="visual-card card-1">
                        <span className="icon">🏠</span>
                        <div className="text">
                            <strong>Apartment Found</strong>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="visual-card card-2">
                        <span className="icon">📄</span>
                        <div className="text">
                            <strong>Visa Approved</strong>
                            <span>Just now</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
