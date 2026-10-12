@echo off
cd /d "C:\Users\rajes\OneDrive\Desktop\BRIL"
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
