xcopy "ggm2" "ggm2SourceCodeGit" /i /c /e /y

git init
git add .
git commit -m "Upload From Shell Script"
git branch -M main
git remote add origin https://github.com/jasonglenevans/GvbvdxxGameMaker2.git
git push -f origin main
del .git /f