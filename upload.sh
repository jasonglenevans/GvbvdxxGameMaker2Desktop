rmdir "pages/.git" --ignore-fail-on-non-empty

rmdir ".git" --ignore-fail-on-non-empty


git init

git add .

git commit -m "Upload From Shell Script"

git rm -r --cached node_modules

git commit -m 'Remove the now ignored directory node_modules'

git rm -r --cached dist

git commit -m 'Remove the now ignored directory dist'

git branch -M main

git remote add origin https://github.com/jasonglenevans/GvbvdxxGameMaker2Desktop.git

git push -f origin main

start "./pages/upload.sh"