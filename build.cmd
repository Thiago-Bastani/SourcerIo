@echo off
mkdir dist
cd src/game-core/
copy index-dev.html index.html
copy styles-dev.css styles.css
move styles.css ../../dist
move index.html ../../dist

npm run build