@echo off
echo Starting Login Page Server...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in PATH. Please install Node.js.
    echo Download from: https://nodejs.org/
    pause
    exit /b
)

REM Install dependencies if needed
if not exist node_modules (
    echo Installing dependencies...
    npm install
)

REM Start the server
echo Starting server...
node server.js

pause