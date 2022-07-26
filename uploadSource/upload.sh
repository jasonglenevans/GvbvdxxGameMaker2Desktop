node upload.js

git init

git add ./uploadSource/*

git commit -m "Upload From Shell Script"

git branch -M main

git remote add origin https://github.com/jasonglenevans/GvbvdxxGameMaker2Desktop.git

git push -f origin main

start "./pages/upload.sh"