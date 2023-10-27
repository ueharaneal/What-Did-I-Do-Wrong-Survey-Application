
## Live Website View: 
https://hidden-ridge-03010-2e2246d75af4.herokuapp.com/

<img width="1507" alt="Screenshot 2023-10-27 at 4 09 45 AM" src="https://github.com/ueharaneal/What-Did-I-Do-Wrong-Survey-Application/assets/79432460/388ed47e-eac2-499d-96e3-3a2c8fc638b4">




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
- **MongoDB**: A NoSQL database I used, for storing and managing the email recipients, surveys, and survey responses.
- **Express**: To help build the server side of the application.
- **Node.js**: A JavaScript runtime environment for server-side development.
- **Heroku**: A cloud platform to deploy and host this web application.
- **Redux**: A state management library for handling application state.
- **Passport.js**: Authentication middleware for Node.js.
- **Google OAuth**: OAuth 2.0 authentication for Google users.
- **Stripe**: A payment processing platform for online transactions.
- **SendGrid**: A cloud-based email delivery service to send survey emails.
- **Materialize**: A responsive front-end framework for styling web applications.


## Getting Started
**Sign in using Google:**
   - To begin, sign in to your account using your Google credentials.
   - If you don't have an account, you can create one or sign in with an existing Google account.

2. **Add Credits:**
   - In [Your Project Name], credits are required to send emails and create surveys.
   - You can acquire credits by purchasing them. Use the following credit card information for testing:
     - Credit Card Number: 4242-4242-4242-4242
     - Future Expiration Date
     - 3-Digit CVC

3. **Create Surveys:**
   - Once you have sufficient credits, you can create surveys by following these steps:
     - Customize your survey and add your prompts.
     - Specify the recipients you want to send the survey to.

4. **Send Surveys:**
   - After creating a survey, click the "Send" button.
   - [Your Project Name] will send the survey to the recipients.

5. **Collect Responses:**
   - Recipients will receive the survey and can respond with "yes" or "no" to your customized prompts.
   - All survey responses will be collected and saved for your review.
     <img width="1228" alt="Screenshot 2023-10-27 at 7 14 36 AM" src="https://github.com/ueharaneal/What-Did-I-Do-Wrong-Survey-Application/assets/79432460/62113453-9cd6-4b88-aaed-54b101aa1a9f">


6. **View Summary:**
   - Navigate to the summary page to see an overview of survey responses and data.

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
- We also learned about persistent form values and how to manage form values.


## MongoDB and Data Handling
- We have control over which documents to include or exclude in MongoDB.

## Troubleshooting
- In case you encounter errors, consider removing ad blockers or other potential issues.
- You can also use `ngrok http 5001` for local development.

