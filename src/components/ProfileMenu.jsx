import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ProfileMenu.css';

const ProfileMenu = ({ onWardSelect, isMobile }) => {
    const { currentUser, logout, updateWard } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const wards = ['Shinjuku', 'Shibuya', 'Minato', 'Setagaya'];

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleWardChange = (ward) => {
        if (onWardSelect) {
            onWardSelect(ward.toLowerCase());
        } else {
            updateWard(ward.toLowerCase());
        }
        setIsOpen(false);
    };

    // Mobile view - render expanded content directly
    if (isMobile) {
        return (
            <div className="mobile-profile-menu">
                <div className="dropdown-header">
                    <span className="label">CURRENT WARD</span>
                    <div className="current-ward">
                        <MapPin size={14} />
                        {currentUser?.ward ? currentUser.ward.charAt(0).toUpperCase() + currentUser.ward.slice(1) : 'Select Ward'}
                    </div>
                </div>

                <div className="dropdown-section">
                    <span className="section-label">Switch Area</span>
                    {wards.map(ward => (
                        <button
                            key={ward}
                            className={`dropdown-item ${currentUser?.ward === ward.toLowerCase() ? 'active' : ''}`}
                            onClick={() => handleWardChange(ward)}
                        >
                            {ward}
                        </button>
                    ))}
                </div>

                <div className="dropdown-divider"></div>

                <button className="dropdown-item danger" onClick={handleLogout}>
                    <LogOut size={16} />
                    Log Out
                </button>
            </div>
        );
    }

    // Desktop view - existing implementation
    return (
        <div className="profile-menu" ref={menuRef}>
            <button className="profile-btn" onClick={toggleMenu}>
                <div className="avatar">
                    <User size={20} />
                </div>
                <span className="username">{currentUser?.displayName || 'User'}</span>
                <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-header">
                        <span className="label">Current Ward</span>
                        <div className="current-ward">
                            <MapPin size={14} />
                            {currentUser?.ward ? currentUser.ward.charAt(0).toUpperCase() + currentUser.ward.slice(1) : 'Select Ward'}
                        </div>
                    </div>

                    <div className="dropdown-section">
                        <span className="section-label">Switch Area</span>
                        {wards.map(ward => (
                            <button
                                key={ward}
                                className={`dropdown-item ${currentUser?.ward === ward.toLowerCase() ? 'active' : ''}`}
                                onClick={() => handleWardChange(ward)}
                            >
                                {ward}
                            </button>
                        ))}
                    </div>

                    <div className="dropdown-divider"></div>

                    <button className="dropdown-item danger" onClick={handleLogout}>
                        <LogOut size={16} />
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
