import React from 'react';
import './SelectionCard.css';

const SelectionCard = ({ icon, title, description, selected, onClick }) => {
    return (
        <div
            className={`selection-card ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <div className="selection-icon">{icon}</div>
            <h3 className="selection-title">{title}</h3>
            <p className="selection-description">{description}</p>
        </div>
    );
};

export default SelectionCard;
