git clone https://github.com/hnineiwinkyaw/Bonjour-Myanmar.git
git checkout -b your_name_here


Before push
------------------
1. git status  ->  
  if it show 'on branch your name' ? continue : git checkout your_name ,.... then 'git status' again
2. git add .
3. git commit -m "your message"

   please use meaningful message . If you push new features , use 'feat: add 'your feature here'' in commit message
   eg. git commit -m "feat: add search bar"

   for new features             ->  feat: add seachbar
   for fixing existing features -> fix: searchbar
   for enhancing features       -> refactor: searchbar

4. git push origin 'your branch name here'
   
