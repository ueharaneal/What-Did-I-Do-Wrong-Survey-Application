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
      textAlign: 'left',
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
        <p style={paragraphStyle}>Get started in five easy steps:</p>
        <ol style={{ textAlign: 'left', margin: '0 auto', maxWidth: '400px' }}>
          <li style={paragraphStyle}>Sign up for an account.</li>
          <li style={paragraphStyle}>Click the red button on bottom right corner</li>
          <li style={paragraphStyle}>Buy/add credits (refer to readMe.md)</li>
          <li style={paragraphStyle}>Create a survey and add email recipients.</li>
          <li style={paragraphStyle}>Collect and analyze feedback.</li>
        </ol>
        <h2 style={headingStyle}>Technologies Used</h2>
       
        <p style={paragraphStyle}>
          <strong>React:</strong> To create the front-end/client side.
        </p>
        <p style={paragraphStyle}>
          <strong>Redux:</strong> A state management library for handling application state.
        </p>
        <p style={paragraphStyle}>
          <strong>MongoDB:</strong> A NoSQL database used for storing and managing email recipients, surveys, and survey responses.
        </p>
        <p style={paragraphStyle}>
          <strong>Express:</strong> Used to help build the server side of the application.
        </p>
        <p style={paragraphStyle}>
          <strong>Node.js:</strong> A JavaScript runtime environment for server-side development.
        </p>
        <p style={paragraphStyle}>
          <strong>Materialize:</strong> A responsive front-end framework to style this web application.
        </p>
        <p style={paragraphStyle}>
          <strong>Passport.js:</strong> Authentication middleware for Node.js.
        </p>
        <p style={paragraphStyle}>
          <strong>Heroku:</strong> A cloud platform used to deploy and host the web application.
        </p>
        <p style={paragraphStyle}>
          <strong>Google OAuth:</strong> OAuth 2.0 authentication for Google users.
        </p>
        <p style={paragraphStyle}>
          <strong>Stripe:</strong> A payment processing platform for online transactions.
        </p>
        <p style={paragraphStyle}>
          <strong>SendGrid:</strong> A cloud-based email delivery service used to send survey emails.
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