@echo off
REM Set up path for scoop
set PATH=C:\Users\dsobrien\scoop\shims;C:\Users\dsobrien\scoop\apps\nodejs\current;%PATH%

REM Start development server
npm run dev
