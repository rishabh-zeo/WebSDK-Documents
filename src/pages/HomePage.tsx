import React from 'react';
import './HomePage.css';

const tiles = [
  {
    section: 'User Identities',
    items: [
      { label: 'Basic Implementation', path: '/user-identities' },
      { label: 'Needs Hashing', path: '/user-identities-hash' },
      { label: 'Already Hashed', path: '/user-identities-already-hashed' },
    ],
  },
  {
    section: 'Page Properties',
    items: [
      { label: 'Basic Implementation', path: '/page-properties' },
    ],
  },
  {
    section: 'Event Properties',
    items: [
      { label: 'Basic Implementation', path: '/event-properties' },
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Zeotap SDK Examples</h1>
      <div className="tiles-grid">
        {tiles.map((tile) => (
          <div key={tile.section} className="tile-section">
            <h2 className="tile-section-title">{tile.section}</h2>
            <div className="tile-list">
              {tile.items.map((item) => (
                <a
                  key={item.label}
                  className="tile-card"
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 