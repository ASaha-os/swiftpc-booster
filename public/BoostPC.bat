@echo off
:: cleanup_temp_prefetch_and_recycle.bat
:: Deletes Prefetch, user %TEMP%, Windows Temp and empties Recycle Bin.
:: Must be run as Administrator.

:: ---------------------------
:: Helper: check for admin
:: ---------------------------
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo This script needs Administrator privileges.
    echo Attempting to relaunch as Administrator...
    powershell -Command "Start-Process -FilePath '%~f0' -Verb RunAs"
    exit /b
)

:: Set console title and base color; show a colored banner with credits
title BoostPC Cleaner - by Akash Saha
color 0A
powershell -NoProfile -Command "Write-Host '=======================================================' -ForegroundColor Cyan"
powershell -NoProfile -Command "Write-Host ' BoostPC Cleaner' -ForegroundColor Yellow; Write-Host ' Developer: Akash Saha' -ForegroundColor Magenta"
powershell -NoProfile -Command "Write-Host '=======================================================' -ForegroundColor Cyan"

echo -------------------------------------------------------
echo Running cleanup: Prefetch, %TEMP%, C:\Windows\Temp, Recycle Bin
echo Date/Time: %date% %time%
echo -------------------------------------------------------

:: ---------------------------
:: 1) Delete Prefetch contents
:: ---------------------------
set PREFETCH_DIR=%windir%\Prefetch
if exist "%PREFETCH_DIR%" (
    echo Deleting files in %PREFETCH_DIR% ...
    :: Remove files only (not the folder itself)
    for /f "delims=" %%I in ('dir /b /a:-d "%PREFETCH_DIR%\*" 2^>nul') do (
        del /f /q "%PREFETCH_DIR%\%%I" >nul 2>&1
    )
    echo Done clearing files in %PREFETCH_DIR%.
) else (
    echo Prefetch folder not found: %PREFETCH_DIR%
)

:: ---------------------------
:: 2) Delete current user's TEMP contents
:: ---------------------------
echo Deleting files in user TEMP: %TEMP% ...
if defined TEMP (
    :: remove files
    for /f "delims=" %%I in ('dir /b /a:-d "%TEMP%\*" 2^>nul') do (
        del /f /q "%TEMP%\%%I" >nul 2>&1 || rmdir /s /q "%TEMP%\%%I" >nul 2>&1
    )
    :: remove leftover subfolders
    for /f "delims=" %%D in ('dir /b /ad "%TEMP%" 2^>nul') do (
        rmdir /s /q "%TEMP%\%%D" >nul 2>&1
    )
    echo Done clearing %TEMP%.
) else (
    echo %%TEMP%% is not defined.
)

:: ---------------------------
:: 3) Delete C:\Windows\Temp contents
:: ---------------------------
set WIN_TEMP=%windir%\Temp
if exist "%WIN_TEMP%" (
    echo Deleting files in %WIN_TEMP% ...
    :: remove files and folders
    for /f "delims=" %%I in ('dir /b /a:-d "%WIN_TEMP%\*" 2^>nul') do (
        del /f /q "%WIN_TEMP%\%%I" >nul 2>&1 || rmdir /s /q "%WIN_TEMP%\%%I" >nul 2>&1
    )
    for /f "delims=" %%D in ('dir /b /ad "%WIN_TEMP%" 2^>nul') do (
        rmdir /s /q "%WIN_TEMP%\%%D" >nul 2>&1
    )
    echo Done clearing %WIN_TEMP%.
) else (
    echo Windows Temp folder not found: %WIN_TEMP%
)

:: ---------------------------
:: 4) Empty Recycle Bin (PowerShell)
:: ---------------------------
echo Emptying Recycle Bin...
powershell -NoProfile -Command "try { Clear-RecycleBin -Force -ErrorAction Stop; Write-Output 'Recycle Bin emptied.' } catch { Write-Output 'Could not empty Recycle Bin or it is already empty.' }"

powershell -NoProfile -Command "Write-Host '-------------------------------------------------------' -ForegroundColor DarkCyan"
powershell -NoProfile -Command "Write-Host ' Cleanup finished successfully.' -ForegroundColor Green"
powershell -NoProfile -Command "Write-Host ' Note: Windows may re-create Prefetch files as needed; startup may be slower temporarily.' -ForegroundColor Yellow"
powershell -NoProfile -Command "Write-Host ' Developer: Akash Saha' -ForegroundColor Magenta"
powershell -NoProfile -Command "Write-Host '-------------------------------------------------------' -ForegroundColor DarkCyan"

pause
exit /b
