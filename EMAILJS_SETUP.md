# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account or log in if you already have one

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template using the variables below:

### Template Variables
Your template should include these variables that will be filled from the contact form:
- `{{user_name}}` - The person's name
- `{{user_email}}` - The person's email address
- `{{subject}}` - The subject they selected
- `{{message}}` - Their message

### Example Template:
```
Subject: New Contact Form Submission - {{subject}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save your template and note down the **Template ID**

## Step 4: Get Your Public Key

1. In your dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Set Up Environment Variables

### Option A: Using .env file (Recommended)

1. Create a file named `.env` in your project root (same level as `package.json`)
2. Add your EmailJS credentials to the file:

```bash
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

3. Restart your development server after creating the `.env` file

### Option B: Direct configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id_here',
  TEMPLATE_ID: 'your_actual_template_id_here',
  PUBLIC_KEY: 'your_actual_public_key_here'
};
```

**Note**: The `.env` file is automatically ignored by git, so your credentials won't be committed to version control.

## Step 6: Test Your Form

1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out and submit the form
4. Check your email to see if the message was received
5. Check the browser console for any error messages

## Troubleshooting

- **"Service not found" error**: Double-check your Service ID
- **"Template not found" error**: Double-check your Template ID
- **"Invalid public key" error**: Double-check your Public Key
- **Form not submitting**: Check browser console for JavaScript errors

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production builds
- The public key is safe to expose in client-side code

## Free Plan Limits

- EmailJS free plan allows 200 emails per month
- If you need more, consider upgrading to a paid plan
