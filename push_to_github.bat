@echo off
cd /d "%~dp0"
echo ========================================================
echo Pushing BRIL Payment Gateway Code to GitHub:
echo https://github.com/udaythathi179-stack/payment_gateway.git
echo ========================================================
git status
echo.
echo Pushing to main branch...
git push -u origin main
echo.
pause
