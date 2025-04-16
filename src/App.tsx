import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Basic from './pages/setUserIdentities/Basic';
import Hashed from './pages/setUserIdentities/Hashed';
import NeedsHashing from './pages/setUserIdentities/NeedsHashing';
import PagePropertiesBasic from './pages/pageProperties/PagePropertiesBasic';
import EventPropertiesBasic from './pages/eventProperties/EventPropertiesBasic';
import HomePage from './pages/HomePage';
import Documentation from './pages/Documentation';
import './App.css';

declare const window: Window & {
    zeotap: {
        init: (writeKey: string, options?: { hashIdentities?: boolean; areIdentitiesHashed?: boolean }) => void;
        setUserIdentities: (identities: { userId: string; userName: string }) => void;
        setPageProperties: (properties: { title: string; url: string }) => void;
        setEventProperties: (eventName: string, eventData: Record<string, any>) => void;
    };
};

function AppRoutes() {
    const location = useLocation();
    // Example pages that should NOT have the nav/sidebar
    const examplePaths = ['/user-identities', '/user-identities-hash', '/user-identities-already-hashed', '/page-properties', '/event-properties'];
    if (examplePaths.includes(location.pathname)) {
        return (
            <Routes>
                <Route path="/user-identities" element={<Basic />} />
                <Route path="/user-identities-hash" element={<NeedsHashing />} />
                <Route path="/user-identities-already-hashed" element={<Hashed />} />
                <Route path="/page-properties" element={<PagePropertiesBasic />} />
                <Route path="/event-properties" element={<EventPropertiesBasic />} />
            </Routes>
        );
    }
    // Default: show nav/sidebar
    return (
        <div className="app">
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Documentation />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/documentation" element={<Documentation />} />
                </Routes>
            </main>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
