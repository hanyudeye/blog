# 博客发布脚本

cd content
git pull
cd ..
git add content
git commit -m "upload on $(date)"
git push