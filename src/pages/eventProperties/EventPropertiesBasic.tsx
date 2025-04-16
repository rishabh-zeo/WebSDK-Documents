import React, { useState } from 'react';
import KeyValuePairs, { KeyValuePair } from '../../components/KeyValuePairs';

declare const window: Window & {
    zeotap: {
        init: (writeKey: string) => void;
        setEventProperties: (eventName: string, eventData: Record<string, string>) => void;
    };
};

const EventPropertiesBasic: React.FC = () => {
    const [eventName, setEventName] = useState('');
    const [pairs, setPairs] = useState<KeyValuePair[]>([{ key: '', value: '' }]);
    const [writeKey, setWriteKey] = useState('');
    const [initialized, setInitialized] = useState(false);

    const handleInitialize = (e: React.FormEvent) => {
        e.preventDefault();
        if (!!window.zeotap) {
            window.zeotap.init(writeKey);
            setInitialized(true);
        }
    };

    const handleSetEventProperties = (e: React.FormEvent) => {
        e.preventDefault();
        const eventData: Record<string, string> = {};
        pairs.forEach(({ key, value }) => {
            if (key) eventData[key] = value;
        });
        window.zeotap.setEventProperties(eventName, eventData);
    };

    return (
        <div className="container">
            <form onSubmit={handleInitialize} className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="writeKey">Write Key:</label>
                <input
                    type="text"
                    id="writeKey"
                    value={writeKey}
                    onChange={(e) => setWriteKey(e.target.value)}
                    placeholder="Enter your write key"
                    disabled={initialized}
                    style={{ marginRight: '1rem' }}
                />
                {initialized ? (
                    null
                ) : (
                    <button type="submit" style={{ padding: '0.3rem 0.6rem', display: 'block', margin: '0 auto' }}>Initialize</button>
                )}
            </form>
            <h2>Set Event Properties</h2>
            <form onSubmit={handleSetEventProperties} className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <input
                    type="text"
                    id="eventName"
                    value={eventName}
                    onChange={e => setEventName(e.target.value)}
                    placeholder="Enter event name"
                />
                <div style={{ marginTop: '1rem' }}>
                    <strong>Event Data (key-value pairs):</strong>
                </div>
                <KeyValuePairs
                    pairs={pairs}
                    onChange={setPairs}
                    addButtonLabel="Add Event Property"
                    removeButtonStyle={{ color: 'red' }}
                />
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button type="submit" form="event-properties-form" style={{ padding: '0.3rem 0.6rem', display: 'block', margin: '0 auto', backgroundColor: '#2b6cb0', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Set Event Properties</button>
            </div>
        </div>
    );
};

export default EventPropertiesBasic; 