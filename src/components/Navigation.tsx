import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
    const [openSections, setOpenSections] = useState({
        user: true,
        page: true,
        event: true,
    });

    const toggleSection = (section: 'user' | 'page' | 'event') => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li>
                    <span style={{ fontWeight: 600, cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSection('user')}>
                        {openSections.user ? '▼' : '▶'} User Identities
                    </span>
                    {openSections.user && (
                        <ul style={{ marginLeft: '1.2rem', marginTop: '0.3rem', marginBottom: '0.3rem' }}>
                            <li><a href="/user-identities" target="_blank" rel="noopener noreferrer">Basic</a></li>
                        </ul>
                    )}
                </li>
                <li>
                    <span style={{ fontWeight: 600, cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSection('page')}>
                        {openSections.page ? '▼' : '▶'} Page Properties
                    </span>
                    {openSections.page && (
                        <ul style={{ marginLeft: '1.2rem', marginTop: '0.3rem', marginBottom: '0.3rem' }}>
                            <li><a href="/page-properties" target="_blank" rel="noopener noreferrer">Basic</a></li>
                        </ul>
                    )}
                </li>
                <li>
                    <span style={{ fontWeight: 600, cursor: 'pointer', userSelect: 'none' }} onClick={() => toggleSection('event')}>
                        {openSections.event ? '▼' : '▶'} Event Properties
                    </span>
                    {openSections.event && (
                        <ul style={{ marginLeft: '1.2rem', marginTop: '0.3rem', marginBottom: '0.3rem' }}>
                            <li><a href="/event-properties" target="_blank" rel="noopener noreferrer">Basic</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation; 