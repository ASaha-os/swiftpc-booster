# ⚡ SwiftPC-Booster

**SwiftPC-Booster** is a lightweight Windows batch utility that helps you reclaim disk space and improve system responsiveness by cleaning out temporary files, cached data, and the Recycle Bin.

> 🧹 One click to clear system clutter safely and efficiently.

---

## 🚀 Features

- Deletes temporary files from:
  - `%TEMP%` (user temp folder)
  - `C:\Windows\Temp`
- Clears old prefetch data from `C:\Windows\Prefetch`
- Empties the Recycle Bin via PowerShell
- Automatically requests Administrator privileges
- Provides clear status output for each operation

---

## ⚠️ Important Notes

- **Administrator access is required** to modify system folders.  
  The script will prompt for elevation automatically if needed.
- **Deleting Prefetch data is optional** — it is *not* necessary for performance.  
  Windows automatically manages Prefetch to speed up app loading; the script clears it only if you choose to.
- The cleanup operations are safe, but **use at your own risk**.  
  Always ensure you understand what’s being deleted before automating this.

---

## 📦 Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/ASaha-os/switfpc-booster.git
Open the folder in File Explorer.

Right-click switfpc-booster.bat and select:

Run as administrator

Follow on-screen messages — the script will:

Clear temporary folders

Delete unnecessary cached files

Empty the Recycle Bin

Display a summary when complete

⚙️ Usage
🖱️ Manual Run
Simply double-click the batch file (right-click → Run as administrator).

⏰ Optional: Scheduled Cleanup
You can automate it using Windows Task Scheduler:

Open Task Scheduler → Create Task

Under General, check:

“Run with highest privileges”

Under Actions, choose:

Start a program → Browse to switfpc-booster.bat

Set your preferred trigger (e.g., weekly).

🧠 How It Works
Step	Task	Command
1	Clear Prefetch files	del /f /q %windir%\Prefetch\*
2	Clear user temp files	del /f /q %TEMP%\*
3	Clear system temp files	del /f /q %windir%\Temp\*
4	Empty Recycle Bin	powershell Clear-RecycleBin -Force

🧩 Compatibility
✅ Windows 10

✅ Windows 11

⚠️ Not needed or compatible with macOS / Linux (they auto-manage temp files)

🪪 License
This project is released under the MIT License — feel free to modify and redistribute responsibly.

css
Copy code
MIT License © 2025 [Your Name]
🧰 Recommended Alternatives (Built-in)
If you prefer not to use scripts, Windows offers native cleanup tools:

Disk Cleanup: cleanmgr.exe

Storage Sense: Settings → System → Storage → Storage Sense

These provide similar cleanup features with full system safety.

💡 Future Ideas
 Add PowerShell version with progress and logging

 Add command-line switches (/silent, /log, /prefetch-off)

 Create cross-platform version for macOS & Linux (optional)

💬 Feedback
Found a bug or have a suggestion?
Open an issue or submit a pull request!

SwiftPC-Booster — simple, fast, and effective system cleanup.