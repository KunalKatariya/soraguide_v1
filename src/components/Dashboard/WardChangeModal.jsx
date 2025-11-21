import React from 'react';
import { X, ArrowRight, MapPin } from 'lucide-react';
import './WardChangeModal.css';

const WardChangeModal = ({ isOpen, oldWard, newWard, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content glass-panel">
                <button className="modal-close" onClick={onCancel}>
                    <X size={20} />
                </button>

                <div className="modal-header">
                    <div className="ward-transition">
                        <div className="ward-badge old">
                            <MapPin size={16} />
                            <span>{oldWard}</span>
                        </div>
                        <ArrowRight className="arrow-icon" size={20} />
                        <div className="ward-badge new">
                            <MapPin size={16} />
                            <span>{newWard}</span>
                        </div>
                    </div>
                    <h2>Are you moving?</h2>
                    <p>We noticed you changed your ward. Are you moving from <strong>{oldWard}</strong> to <strong>{newWard}</strong>?</p>
                </div>

                <div className="modal-actions">
                    <button
                        className="btn btn-outline"
                        onClick={() => onConfirm(false)}
                    >
                        No, just looking
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => onConfirm(true)}
                    >
                        Yes, I'm moving
                    </button>
                </div>

                <p className="modal-note">
                    If you say <strong>Yes</strong>, we'll add a checklist for moving out and moving in.
                </p>
            </div>
        </div>
    );
};

export default WardChangeModal;
