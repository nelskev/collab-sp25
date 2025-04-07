Create local branch

git checkout -b <branchname>
or
git branch <branchname>
git checkout <branchname>

create and setup remote tracking branch
git push -u origin <branchname>

do some work on your branch
make a commit on your branch
repeat until you are ready to push your changes

push your changes to the remote branch
git push

on github, go to branch and make pull request
or in vscode use the pull request extension

your pull request is accepted or rejected with comments
fix and resubmit if needed

go to your main branch and pull the changes that were accepted

git pull

you can then either delete your branch or merge main into it to continue working on it

from your branch to keep working:
git merge main

to delete local and remote branches

git push -d origin <branchname>          # Delete remote
git branch -d <branchname>               # Delete local

