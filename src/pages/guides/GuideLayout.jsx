import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import './GuideLayout.css';

const GuideLayout = ({ title, subtitle, children }) => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="guide-page">
                <div className="guide-container">
                    <button className="back-link" onClick={() => navigate('/dashboard')}>
                        <ArrowLeft size={18} /> Back to Dashboard
                    </button>

                    <div className="guide-header">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>

                    <div className="guide-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GuideLayout;
