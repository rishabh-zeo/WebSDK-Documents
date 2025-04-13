import React, { useState } from 'react';
import './App.css';

declare const window: Window & {
    zeotap: {
        init: (writeKey: string) => void;
        setUserIdentities: (identities: { userId: string; userName: string }) => void;
        setPageProperties: (properties: { title: string; url: string }) => void;
        setEventProperties: (eventName: string, eventData: Record<string, any>) => void;
    };
};

function App() {

    const [writeKey, setWriteKey] = useState('');
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    const [pageUrl, setPageUrl] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventData, setEventData] = useState('');

    const handleInitialize = (e: React.FormEvent) => {
        e.preventDefault();
        if(!!window.zeotap)
        window.zeotap.init(writeKey);
    };

    const handleSetUserIdentities = (e: React.FormEvent) => {
        e.preventDefault();
        window.zeotap.setUserIdentities({ userId, userName });
    };

    const handleSetPageProperties = (e: React.FormEvent) => {
        e.preventDefault();
        window.zeotap.setPageProperties({ title: pageTitle, url: pageUrl });
    };

    const handleSetEventProperties = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const parsedEventData = JSON.parse(eventData);
            window.zeotap.setEventProperties(eventName, parsedEventData);
        } catch (error) {
            console.error('Invalid JSON data');
        }
    };

    return (
        <div className="container">
            <h1>SDK Example Guide</h1>

            <div className="section">
                <h2>Initialize SDK</h2>
                <form onSubmit={handleInitialize} className="form-group">
                    <label htmlFor="writeKey">Write Key:</label>
                    <input
                        type="text"
                        id="writeKey"
                        value={writeKey}
                        onChange={(e) => setWriteKey(e.target.value)}
                        placeholder="Enter your write key"
                    />
                    <button type="submit">Initialize</button>
                </form>
            </div>

            <div className="section">
                <h2>Set User Identities</h2>
                <form onSubmit={handleSetUserIdentities} className="form-group">
                    <label htmlFor="userId">User ID:</label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="Enter user ID"
                    />
                    <label htmlFor="userName">User Name:</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter user name"
                    />
                    <button type="submit">Set User Identities</button>
                </form>
            </div>

            <div className="section">
                <h2>Set Page Properties</h2>
                <form onSubmit={handleSetPageProperties} className="form-group">
                    <label htmlFor="pageTitle">Page Title:</label>
                    <input
                        type="text"
                        id="pageTitle"
                        value={pageTitle}
                        onChange={(e) => setPageTitle(e.target.value)}
                        placeholder="Enter page title"
                    />
                    <label htmlFor="pageUrl">Page URL:</label>
                    <input
                        type="text"
                        id="pageUrl"
                        value={pageUrl}
                        onChange={(e) => setPageUrl(e.target.value)}
                        placeholder="Enter page URL"
                    />
                    <button type="submit">Set Page Properties</button>
                </form>
            </div>

            <div className="section">
                <h2>Set Event Properties</h2>
                <form onSubmit={handleSetEventProperties} className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                    />
                    <label htmlFor="eventData">Event Data (JSON):</label>
                    <textarea
                        id="eventData"
                        value={eventData}
                        onChange={(e) => setEventData(e.target.value)}
                        placeholder='{"key": "value"}'
                    />
                    <button type="submit">Set Event Properties</button>
                </form>
            </div>

            <div className="section">
                <h2>Log Output</h2>
                
            </div>
        </div>
    );
}

export default App;
