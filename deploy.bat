@echo off
echo Building project...
call npm run build

echo Deploying to GitHub Pages...
cd dist

git init
git add -A
git commit -m "deploy"

git branch -M main
git push -f https://github.com/CodySpring33/music-portfolio.git main:gh-pages

cd .. 