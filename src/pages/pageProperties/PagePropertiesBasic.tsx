import React, { useState } from 'react';
import KeyValuePairs, { KeyValuePair } from '../../components/KeyValuePairs';

declare const window: Window & {
    zeotap: {
        init: (writeKey: string) => void;
        setPageProperties: (properties: Record<string, string>) => void;
    };
};

const PagePropertiesBasic: React.FC = () => {
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

    const handleSetPageProperties = (e: React.FormEvent) => {
        e.preventDefault();
        const payload: Record<string, string> = {};
        pairs.forEach(({ key, value }) => {
            if (key) payload[key] = value;
        });
        window.zeotap.setPageProperties(payload);
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
            <h2>Set Page Properties</h2>
            <form onSubmit={handleSetPageProperties} className="form-group" id="page-properties-form">
                <KeyValuePairs
                    pairs={pairs}
                    onChange={setPairs}
                    addButtonLabel="Add Page Property"
                />
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button type="submit" form="page-properties-form" style={{ padding: '0.3rem 0.6rem', display: 'block', margin: '0 auto', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Set Page Properties</button>
            </div>
        </div>
    );
};

export default PagePropertiesBasic; 