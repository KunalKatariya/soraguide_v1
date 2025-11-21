import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description, delay }) => {
    return (
        <div className="feature-card" style={{ animationDelay: `${delay}s` }}>
            <div className="feature-icon-wrapper">
                {icon}
            </div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
};

export default FeatureCard;
