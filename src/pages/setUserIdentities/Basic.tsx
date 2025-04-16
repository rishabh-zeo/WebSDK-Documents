import React, { useState } from 'react';
import KeyValuePairs, { KeyValuePair } from '../../components/KeyValuePairs';

declare const window: Window & {
    zeotap: {
        init: (writeKey: string) => void;
        setUserIdentities: (identities: Record<string, string>) => void;
    };
};

const UserIdentitiesBasic: React.FC = () => {
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

    const handleSetUserIdentities = (e: React.FormEvent) => {
        e.preventDefault();
        const payload: Record<string, string> = {};
        pairs.forEach(({ key, value }) => {
            if (key) payload[key] = value;
        });
        window.zeotap.setUserIdentities(payload);
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
            <h2>Set User Identities</h2>
            <div style={{ marginBottom: '1rem', fontWeight: 500, color: '#2b6cb0' }}>Basic Implementation</div>
            <form onSubmit={handleSetUserIdentities} className="form-group" id="user-identities-form">
                <KeyValuePairs
                    pairs={pairs}
                    onChange={setPairs}
                    addButtonLabel="Add User Identity"
                />
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button type="submit" form="user-identities-form" style={{ padding: '0.3rem 0.6rem', display: 'block', margin: '0 auto', backgroundColor: '#2b6cb0', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Set User Identities</button>
            </div>
        </div>
    );
};

export default UserIdentitiesBasic; 