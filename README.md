
## Live Website View: 
https://hidden-ridge-03010-2e2246d75af4.herokuapp.com/


# Quickstart
-sign in with google
-add credits 
-when adding credits, use "4242-4242-4242-4242" for the credit card number, any future date for the expiration date, and any 3-4 digit number for the CVC.

once the credits have been added you now have the funds to send emails. 


## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development Mode](#development-mode)
- [Sending Emails](#sending-emails)
- [Validating Emails](#validating-emails)
- [Survey Forms](#survey-forms)
- [Web Hooks and Local Environment](#web-hooks-and-local-environment)
- [MongoDB and Data Handling](#mongodb-and-data-handling)
- [Troubleshooting](#troubleshooting)

## Overview
# What Did I Do Wrong? - Survey Application

Welcome to **What Did I Do Wrong?**, a powerful survey application designed to provide business owners and users with a streamlined and customizable email survey service. With **What Did I Do Wrong?**, you can effortlessly gather instant feedback from your customers or email list, enabling you to make informed decisions and improve your services. 

## Key Features

- **Customized Surveys**: Tailor your surveys to match your unique business needs, allowing you to collect specific and actionable feedback.

- **Data Retention**: Every survey response is securely saved and organized, ensuring you have a comprehensive record of customer insights over time.

- **Easy Payment Integration**: Seamlessly integrate payment processing, enabling you to access the full range of survey features upon successful payment.

**What Did I Do Wrong?** simplifies the process of collecting and managing customer feedback, whether you're a small business owner or an individual looking to gain valuable insights. Start using **What Did I Do Wrong?** today and unlock the potential for growth and improvement in your services.

## Technologies Used

- **React**: To create the front-end/client side. 
- **MongoDB**: A NoSQL database I used, for storing and managing the email recipeints, sureveys and survey responses.
- **Express**: To help build the server side of the application.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Heroku**: A cloud platform to deployand host this web application.
- **Redux**: A state management library for handling application state.
- **Passport.js**: Authentication middleware for Node.js.
- **Google OAuth**: OAuth 2.0 authentication for Google users.
- **Stripe**: A payment processing platform for online transactions.
- **SendGrid**: A cloud-based email delivery service to send survey emails.
- **Materialize**: A responsive front-end framework for styling web applications.

The code is capable of running in both development and production environments.

## Getting Started
[Provide instructions or links for users to get started with your project, e.g., installation and setup steps.]

## Development Mode
- In development mode, the Express server listens on port 5001.
- Be sure to check for [other setup or configuration details].

## Sending Emails
- We use Sendgrid as our email provider, which allows us to send emails and uniquely identify users responding to our email surveys.
- Be diligent in checking spam and promotion emails to ensure email delivery.

## Validating Emails
- We validate email addresses to ensure that surveys are reaching real email accounts.
- We utilize emailregex.com to validate email addresses.

## Survey Forms
- Redux Form is used to handle survey forms.
- We implement true/false component-level states to toggle routing visibility for components like SurveyFormReview.
- Learned about persisted form values and how to manage form values.

## Web Hooks and Local Environment
- We use feedback with web hooks and leverage the local tunnel API for handling web hooks in our local development environment.

## Troubleshooting
- In case you encounter errors, consider removing ad blockers or other potential issues.
- You can also use `ngrok http 5001` for local development.

