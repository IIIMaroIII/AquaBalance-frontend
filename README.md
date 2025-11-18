Create a new branch and switch to it:
alias gcb='git checkout -b' Usage: gcb new-branch

Update your branch with the latest changes from 'main':
alias gmm='git checkout main && git pull && git checkout - && git merge main'
Usage: gmm

Make a commit for all changes with a custom message and push it:
alias gcp='git add . && git commit -m' Usage: gcp "Your custom commit message"

Push changes to the remote repository and publish your new branch:
alias gpuo='git push -u origin' Usage: gpuo

Delete your branch locally and remotely after it's merged:
alias gbd='git branch -d && git push origin --delete' Usage: gbd branch-name

alias gch='git checkout'
alias gcb='git checkout -b'
alias gmm='git checkout
alias gcm='git add . && git commit -m' 
alias gpuo='git push -u origin' 
alias gbd='git branch -d && git
push origin --delete'

alias gbd-local='git branch --merged main | grep -v "main" | xargs -n 1 git
branch -d'

alias gbd-remote='git branch -r --merged origin/main | grep -v "origin/main" |
sed "s/origin\///" |$
