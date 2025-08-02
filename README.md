# Discord Webhook Login Page

A professional-looking login page that sends captured credentials and user information to a Discord webhook. This project is for educational purposes only.

## Features

- Modern, responsive login interface
- Captures login credentials
- Collects additional information:
  - IP address
  - Location (city, region, country)
  - Device information
  - Screen size
  - Browser language
  - Timezone
  - Referrer URL
- Sends all information to a Discord webhook
- Configurable redirect after login

## Setup Instructions

### 1. Create a Discord Webhook

1. Open Discord and go to the server where you want to receive login notifications
2. Right-click on a text channel and select "Edit Channel"
3. Go to "Integrations" > "Webhooks" > "New Webhook"
4. Give your webhook a name and optionally set an avatar
5. Click "Copy Webhook URL" to copy the webhook URL
6. Click "Save" to create the webhook

### 2. Configure the Login Page

1. Open the `config.js` file
2. Replace `YOUR_DISCORD_WEBHOOK_URL_HERE` with your actual Discord webhook URL
3. Customize other settings as needed:
   - `REDIRECT_URL`: The page to redirect to after login
   - `REDIRECT_DELAY`: Time in milliseconds before redirecting
   - `PAGE_TITLE`: The title of the login page
   - `PRIMARY_COLOR`: The main color theme
   - Enable/disable tracking features

### 3. Host the Login Page

You can host this login page using various methods:

#### Local Testing

1. Open the `index.html` file in a web browser to test locally

#### Web Hosting

1. Upload all files to a web hosting service
2. Make sure to include all files: `index.html`, `styles.css`, `script.js`, and `config.js`

#### GitHub Pages

1. Create a GitHub repository
2. Upload all files to the repository
3. Enable GitHub Pages in the repository settings

## Usage

1. Direct users to your hosted login page
2. When someone enters credentials and clicks "Login", the information will be sent to your Discord webhook
3. The user will be redirected to the specified redirect URL

## Customization

### Changing the Appearance

- Edit the `styles.css` file to change colors, fonts, and layout
- Modify the HTML structure in `index.html` to add or remove elements

### Adding More Fields

To add more input fields:

1. Add the HTML for the new field in `index.html`
2. Update the JavaScript in `script.js` to capture and send the new field data

## Security Considerations

- This tool captures sensitive information. Use responsibly and only for educational purposes or with proper authorization.
- The Discord webhook URL in your config file is sensitive. Don't share it publicly.
- Consider adding HTTPS to your hosting for secure data transmission.

## Disclaimer

This tool is provided for educational purposes only. Misuse of this tool to collect credentials without authorization is illegal and unethical. The creator of this tool is not responsible for any misuse or damages caused by this tool.