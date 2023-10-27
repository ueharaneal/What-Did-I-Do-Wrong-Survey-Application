import React from 'react';
import { Link } from 'react-router-dom'

const Landing = () => {
    const containerStyle = {
      textAlign: 'center',
      padding: '20px',
    };
  
    const headingStyle = {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    };
  
    const paragraphStyle = {
      fontSize: '18px',
      lineHeight: '1.5',
      marginBottom: '10px',
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to WDIDW</h1>
        <p style={paragraphStyle}>Collect valuable feedback from your users.</p>
        <h2 style={headingStyle}>About</h2>
        <p style={paragraphStyle}>
          WDIDW is a platform for gathering feedback to help you improve your products and services.
        </p>
        <h2 style={headingStyle}>Quick Start</h2>
        <p style={paragraphStyle}>Get started in three easy steps:</p>
        <ol style={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px' }}>
          <li style={paragraphStyle}>Sign up for an account.</li>
          <li style={paragraphStyle}>Buy/add credits (refer to readMe.md)</li>
          <li style={paragraphStyle}>Create a survey and add email recipients.</li>
          <li style={paragraphStyle}>Collect and analyze feedback.</li>
        </ol>
        <h2 style={headingStyle}>How I Created It</h2>
        <p style={paragraphStyle}>
          React: To create the front-end/client side.
        </p>
        <p style={paragraphStyle}>
          Redux: A state management library for handling application state.
        </p>
        
        <p style={paragraphStyle}>
          MongoDB: A NoSQL database used for storing and managing email recipients, surveys, and survey responses.
        </p>
        <p style={paragraphStyle}>
          Express: Used to help build the server side of the application.
        </p>
        <p style={paragraphStyle}>
          Node.js: A JavaScript runtime environment for server-side development.
        </p>
        <p style={paragraphStyle}>
          Materialize: A responsive front-end framework to style this web application.
        </p>
        <p style={paragraphStyle}>
          Passport.js: Authentication middleware for Node.js.
        </p>
        <p style={paragraphStyle}>
          Heroku: A cloud platform used to deploy and host the web application.
        </p>
        <p style={paragraphStyle}>
          Google OAuth: OAuth 2.0 authentication for Google users.
        </p>
        <p style={paragraphStyle}>
          Stripe: A payment processing platform for online transactions.
        </p>
        <p style={paragraphStyle}>
          SendGrid: A cloud-based email delivery service used to send survey emails.
        </p>
        
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  };

export default Landing;