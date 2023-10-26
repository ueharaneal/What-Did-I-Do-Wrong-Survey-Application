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
          <li style={paragraphStyle}>Click add Credits</li>
          <li style={paragraphStyle}>Use "4242-4242-4242-4242" for the credit card number, any future date for the expiration date, and any 3-4 digit number for the CVC.</li>
          <li style={paragraphStyle}>Create a survey.</li>
          <li style={paragraphStyle}>Collect and analyze feedback.</li>
          <li style={paragraphStyle}>Congrats you are now a proud member of What Did I Do Wrong?</li>
        </ol>
        <h2 style={headingStyle}>How I Created It</h2>
        <p style={paragraphStyle}>
          Learn about the technology and tools used to build WDIDW.
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