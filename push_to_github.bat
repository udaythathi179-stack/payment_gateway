@echo off
cd /d "%~dp0"

where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    if exist "%LOCALAPPDATA%\Programs\MinGit\cmd" (
        set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"
    )
)

echo ========================================================
echo BRIL Payment Gateway - GitHub Sync
echo Remote: https://github.com/udaythathi179-stack/payment_gateway.git
echo ========================================================
git status
echo.
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update BRIL fee payment portal
git add -A
git commit -m "%COMMIT_MSG%" >nul 2>&1
echo.
echo Pushing to main branch...
git push origin main
echo.
echo ========================================================
echo GitHub sync completed!
echo ========================================================
pause

