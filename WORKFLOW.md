**Create local branch**  
git checkout -b branchname  
or  
git branch branchname    
git checkout branchname  

**Create and setup remote tracking branch**  
git push -u origin branchname

Do some work on your branch  
Make a commit on your branch  
Repeat until you are ready to push your changes  

**Push your changes to the remote branch** 
git push

On github, go to branch and make pull request  
Or in vscode use the pull request extension

Your pull request is accepted or rejected with comments  
Fix and resubmit if needed

**Go to your main branch and pull the changes that were accepted**  
git pull

**You can then either:**  
 delete your branch or  
 merge main into it to continue working on it

**From your branch to keep working:**  
git merge main

**To delete local and remote branches**  
git push -d origin branchname  # Delete remote  
git branch -d branchname       # Delete local

