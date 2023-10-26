
Live Website View: 
https://hidden-ridge-03010-2e2246d75af4.herokuapp.com/

This application will allow bossiness or individuals to send customized survey to an email list.

There is two server concurrently running the node and the react server.

# quickstart
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
The project utilizes several technologies:
- [List the technologies used, e.g., React, Express, Sendgrid, Redux, etc.]
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
- We also learned about persisted form values and how to manage form values.

## Web Hooks and Local Environment
- We use feedback with web hooks and leverage the local tunnel API for handling web hooks in our local development environment.

## MongoDB and Data Handling
- We have control over which documents to include or exclude in MongoDB.

## Troubleshooting
- In case you encounter errors, consider removing ad blockers or other potential issues.
- You can also use `ngrok http 5001` for local development.

Feel free to further elaborate on each section and provide any necessary details. This README will serve as a helpful guide for anyone interested in your project.
