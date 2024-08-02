deleted by Myroslava const customStyles = { content: { top: '50%', left: '50%',
right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%,
-50%)', borderRadius: '15px', boxShadow: '0px 4px 50px 0px rgba(0, 0, 0, 0.1)',
}, overlay: { backgroundColor: 'rgba(47, 47, 47, 0.6)', }, };

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

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

These aliases provide the functionality you've described, allowing you to create
and switch branches, update your branch with changes from 'main', make commits
with custom messages, push changes to the remote repository, publish your
branch, and delete your branch both locally and remotely after it's merged.

alias gch='git checkout' alias gcb='git checkout -b' alias gmm='git checkout
main && git pull && git checkout - && git merge main' alias gcm='git add . &&
git commit -m' alias gpuo='git push -u origin' alias gbd='git branch -d && git
push origin --delete'

# Alias for deleting locally merged branches

# Alias for deleting locally merged branches

alias gbd-local='git branch --merged main | grep -v "main" | xargs -n 1 git
branch -d'

# Alias for deleting remotely merged branches

alias gbd-remote='git branch -r --merged origin/main | grep -v "origin/main" |
sed "s/origin\///" |$

//================ Home =================// styles //===================
SignUpPage ============//

- sign up btn +/-
- mobile
- tablet
- desctop
- rendering components / /============= SignInPage =============//

* mobile
* tablet
* desctop //=============== TrackerPage =============// aquatrack image
  WaterProgressBar +/-

- addWaterBtn, editWaterBtn, deleteWaterBtn logOutBtn- do not open modals -NEW
  UserSettingsForm(distance between the components, background-color, ❗
  desctop) +/-

WaterList +/-

UserBarPopover: UserBar +/-

Calendar +/- CalendarItem +/-

//=============== Modals ===============// DeleteWaterModal LogOutModal +/- NEW
WaterModal +/-
