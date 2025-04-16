import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Documentation.css';

const Documentation: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="documentation-container">
      <header className="documentation-header">
        <h1>Zeotap Web SDK Documentation</h1>
        <p className="subtitle">A comprehensive guide to implementing and using the Zeotap Web SDK</p>
      </header>

      <nav className="documentation-nav">
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#configuration">Configuration</a></li>
          <li><a href="#methods">Methods</a></li>
          <li><a href="#examples">Examples</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
        </ul>
      </nav>

      <main className="documentation-content">
        <section id="overview">
          <h2>Overview</h2>
          <p>
            The Zeotap Web SDK enables you to collect and manage user data, track events, and set page properties
            on your website. This documentation will guide you through the implementation process and provide
            examples for common use cases.
          </p>
        </section>

        <section id="installation">
          <h2>Installation</h2>
          <p>To install the Zeotap Web SDK, add the following script to your HTML file:</p>
          <pre>
            {`<script>
  (function(w,d,s,o,f,js,fjs){
    w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  })(window,document,'script','zeotap','https://cdn.zeotap.com/sdk/v1/zeotap.min.js');
</script>`}
          </pre>
        </section>

        <section id="configuration">
          <h2>Configuration</h2>
          <p>The SDK can be configured with the following options:</p>
          <div className="config-table-container">
            <table className="config-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>writeKey</code></td>
                  <td>string</td>
                  <td>-</td>
                  <td>Your unique write key for authentication</td>
                </tr>
                <tr>
                  <td><code>hashIdentities</code></td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether to hash user identities</td>
                </tr>
                <tr>
                  <td><code>areIdentitiesHashed</code></td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the provided identities are already hashed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <pre>
            {`window.zeotap.init('YOUR_WRITE_KEY', {
  hashIdentities: true, // Optional
  areIdentitiesHashed: false // Optional
});`}
          </pre>
        </section>

        <section id="methods">
          <h2>Available Methods</h2>
          <div className="accordion-container">
            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion('setUserIdentities')}>
                <h3>setUserIdentities</h3>
                <span className="accordion-icon">{openAccordion === 'setUserIdentities' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'setUserIdentities' ? 'active' : ''}`} id="setUserIdentities">
                <div className="method-details">
                  <h4>Description</h4>
                  <p>Sets user identity information. This method allows you to associate various identifiers with a user.</p>
                  
                  <h4>Parameters</h4>
                  <pre>{`{
  email?: string;      // User's email address
  phone?: string;      // User's phone number
  userId?: string;     // Custom user identifier
  [key: string]: string; // Additional custom identities
}`}</pre>

                  <h4>Use Cases</h4>
                  <div className="use-case">
                    <h5>Basic User Identification</h5>
                    <pre>{`window.zeotap.setUserIdentities({
  email: 'user@example.com',
  phone: '+1 234567890'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>Custom User ID</h5>
                    <pre>{`window.zeotap.setUserIdentities({
  userId: '12345',
  customId: 'custom_value'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>Multiple Identifiers</h5>
                    <pre>{`window.zeotap.setUserIdentities({
  email: 'user@example.com',
  phone: '+1 234567890',
  userId: '12345',
  loyaltyId: 'LOY123',
  customerType: 'premium'
});`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion('setPageProperties')}>
                <h3>setPageProperties</h3>
                <span className="accordion-icon">{openAccordion === 'setPageProperties' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'setPageProperties' ? 'active' : ''}`} id="setPageProperties">
                <div className="method-details">
                  <h4>Description</h4>
                  <p>Sets properties for the current page. Use this to provide context about the current page view.</p>
                  
                  <h4>Parameters</h4>
                  <pre>{`{
  title?: string;      // Page title
  url?: string;        // Page URL
  [key: string]: string; // Additional custom properties
}`}</pre>

                  <h4>Use Cases</h4>
                  <div className="use-case">
                    <h5>Basic Page Properties</h5>
                    <pre>{`window.zeotap.setPageProperties({
  title: 'Product Page',
  url: 'https://example.com/products'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>E-commerce Page</h5>
                    <pre>{`window.zeotap.setPageProperties({
  title: 'Product Detail',
  url: 'https://example.com/products/123',
  category: 'Electronics',
  productId: '123',
  price: '99.99'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>Content Page</h5>
                    <pre>{`window.zeotap.setPageProperties({
  title: 'Blog Post',
  url: 'https://example.com/blog/post-1',
  author: 'John Doe',
  publishDate: '2024-01-01',
  category: 'Technology'
});`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <button className="accordion-header" onClick={() => toggleAccordion('setEventProperties')}>
                <h3>setEventProperties</h3>
                <span className="accordion-icon">{openAccordion === 'setEventProperties' ? '−' : '+'}</span>
              </button>
              <div className={`accordion-content ${openAccordion === 'setEventProperties' ? 'active' : ''}`} id="setEventProperties">
                <div className="method-details">
                  <h4>Description</h4>
                  <p>Tracks custom events with associated properties. Use this to track user interactions and important actions.</p>
                  
                  <h4>Parameters</h4>
                  <pre>{`eventName: string
eventData: {
  [key: string]: string | number | boolean;
}`}</pre>

                  <h4>Use Cases</h4>
                  <div className="use-case">
                    <h5>Product Interaction</h5>
                    <pre>{`window.zeotap.setEventProperties('Product Added to Cart', {
  productId: '123',
  productName: 'Example Product',
  price: 99.99,
  quantity: 1,
  category: 'Electronics'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>User Action</h5>
                    <pre>{`window.zeotap.setEventProperties('User Registration', {
  registrationMethod: 'email',
  planType: 'premium',
  referralSource: 'social_media'
});`}</pre>
                  </div>

                  <div className="use-case">
                    <h5>Form Submission</h5>
                    <pre>{`window.zeotap.setEventProperties('Contact Form Submitted', {
  formName: 'Contact Us',
  formFields: ['name', 'email', 'message'],
  submissionTime: '2024-01-01T12:00:00Z'
});`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <div className="examples-grid">
            <div className="example-section">
              <h3>User Identities</h3>
              <ul>
                <li><Link to="/user-identities">Basic Implementation</Link></li>
                <li><Link to="/user-identities-hash">With Hashing</Link></li>
                <li><Link to="/user-identities-already-hashed">Pre-hashed Identities</Link></li>
              </ul>
            </div>
            <div className="example-section">
              <h3>Page Properties</h3>
              <ul>
                <li><Link to="/page-properties">Basic Implementation</Link></li>
              </ul>
            </div>
            <div className="example-section">
              <h3>Event Properties</h3>
              <ul>
                <li><Link to="/event-properties">Basic Implementation</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="best-practices">
          <h2>Best Practices</h2>
          <ul>
            <li>Always initialize the SDK before using any methods</li>
            <li>Hash sensitive user data when required</li>
            <li>Set page properties for better context</li>
            <li>Track meaningful events with relevant properties</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Documentation; 