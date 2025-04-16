import React from 'react';

export interface KeyValuePair {
  key: string;
  value: string;
}

interface KeyValuePairsProps {
  pairs: KeyValuePair[];
  onChange: (pairs: KeyValuePair[]) => void;
  addButtonLabel?: string;
  inputKeyPlaceholder?: string;
  inputValuePlaceholder?: string;
  removeButtonClassName?: string;
  removeButtonStyle?: React.CSSProperties;
}

const KeyValuePairs: React.FC<KeyValuePairsProps> = ({
  pairs,
  onChange,
  addButtonLabel = 'Add',
  inputKeyPlaceholder = 'Key',
  inputValuePlaceholder = 'Value',
  removeButtonClassName,
  removeButtonStyle,
}) => {
  const handlePairChange = (index: number, field: 'key' | 'value', value: string) => {
    const newPairs = [...pairs];
    newPairs[index][field] = value;
    onChange(newPairs);
  };

  const handleAddPair = () => {
    onChange([...pairs, { key: '', value: '' }]);
  };

  const handleRemovePair = (index: number) => {
    onChange(pairs.filter((_, i) => i !== index));
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: '#fff' }}>
      {pairs.map((pair, idx) => (
        <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
          <input
            type="text"
            placeholder={inputKeyPlaceholder}
            value={pair.key}
            onChange={e => handlePairChange(idx, 'key', e.target.value)}
          />
          <input
            type="text"
            placeholder={inputValuePlaceholder}
            value={pair.value}
            onChange={e => handlePairChange(idx, 'value', e.target.value)}
          />
          {pairs.length > 1 ? (
            <button
              type="button"
              onClick={() => handleRemovePair(idx)}
              className={removeButtonClassName}
              style={{
                background: 'none',
                border: '1px solid #dc3545',
                color: '#dc3545',
                borderRadius: '4px',
                padding: '0.25rem 0.75rem',
                cursor: 'pointer',
                ...removeButtonStyle,
              }}
            >
              Remove
            </button>
          ) : (
            <span style={{
              display: 'inline-block',
              width: '74px',
              height: '32px',
              marginRight: '0.5rem',
            }}></span>
          )}
          {idx === pairs.length - 1 && (
            <button
              type="button"
              onClick={handleAddPair}
              className="add-pair-btn"
              style={{
                background: 'none',
                border: '1px solid #007bff',
                color: '#007bff',
                borderRadius: '4px',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '0.5rem',
                cursor: 'pointer',
                padding: '0.25rem 0.75rem',
              }}
              aria-label="Add property"
            >
              + Add Row
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default KeyValuePairs; 