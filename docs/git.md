---
sidebar_position: 99
---

# GIT

|**Porcelain Command**|**Description**|
|-----------|---------------|
|git config --global user.name xxxx||
|git config --global user.email xxxx||
|git init|Init a Repo|
|git init --bare|Init a remote repository|
|git add .|Add the resource (ready for commit)|
|git commit -am "Add an orange"||
|**git reset**|Updating your branch.<br/>Moving the tip in order to add or remove commits from the branch.<br/>This operation changes the commit history.<br/>Can also be used to restore the index, overlapping with git restore.|
|git reset|Undo all the changes from the index.<br/>Keep all the changes in working tree.|
|git reset --hard {commitId}|Moves current branch to this {commitId}|
|git reset --hard master|Moves current branch to master <a href="https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified">Read</a>|
|git reset {fileName}|Undo the add from the index.<br/>Keep the change in working tree.|
|**git restore**|Restoring files in the working tree from either the index or another commit.<br/>Does not update your branch.<br/>Can also be used to restore files in the index from another commit.|
|git restore {fileName}|Restore content of working tree from the index|
|git restore -s {commitId} {fileName}|Restore content of working tree from the specified commit Id|
|git restore --staged {fileName}|Restore content of index tree from HEAD|
|git restore --staged --worktree {fileName}|Restore both content of index tree and working tree from HEAD|
|**git revert**|Making a new commit that reverts the changes made by other commits.|
|git revert {commitId}|Remove the change of the specified commit Id and create a new commit|
|git revert --no-commit {commitId}|Remove the change of the specified commit Id without commit|
|git status|Query the status of the index|
|git log --format=raw||
|git log --format=fuller||
|git log --oneline|**--oneline** is a shorthand for "--pretty=oneline --abbrev-commit"|
|git log --oneline --graph --decorate|**--graph** visualize the forks from a commit and the point in which branches merge|
|git log -3|Limit the range to 3|
|git log 7a4d4b1...1457b0|show commit history from 7a4d4b1 to 1457b0|
|git log -1 -p --stat {commitId}|**-p** will print the patch<br/>**--stat** will provide a tally of how many lines were modified|
|git show {commitId}|Show the content for a commit|
|git show {commitId} --name-only|Show the content for a commit|
|git branch {branchName} {start-point}|Create Branch {branchName} using {start-point}.<br/> If not specified, HEAD of currently active branch.|
|git branch -d {branchName}|Delete Branch {branchName}|
|git branch -D {branchName}|Force Delete Branch {branchName}|
|git branch -m {old-branch-name} {new-branch-name}|Rename a Git repository’s branch nam|
|git show-branch --more=50|Show all the commit in reverse order|
|git show-branch 'bug/*'||
|git checkout {branchName}|Move to Branch {branchName}|
|git checkout {fileName}|Check out a particular file from index to working directory|
|git checkout HEAD^|Move to Detached HEAD state. <br/>Being in this state basically means that<br/> HEAD does not reference a branch|
|git reflog show|Records what happens in the repository<br/> while you commit, reset, check out|
|git reflog {branchName}||
|git tag -a annotatedTag {commitId}||
|git diff|Working Tree VS Staging Area|
|git diff --cached|Staging Area VS HEAD|
|git diff --name-status {branch name 1} {branch name 2}||
|git rebase {branch A}|Rebase the current branch on top of branch A|
|git rebase -i HEAD~{N}|Merge several commit into 1<br/>i means interactive, while the HEAD~N argument means<br/> I want to rebase the last N commits|
|git merge {branchName}|merge the branch into the master one|
|git merge --abort|Abort the current merge operation.<br/>Restores both working and index tree|
|git cherry-pick {commitId}|cherry-pick a particular commit|
|git cherry-pick --no-commit {commitId}|cherry-pick a particular commit but without commit|
|git remote -v||
|git push||
|git push --force-with-lease||
|git pull|Download and merge|
|git fetch --all|Just download|

|**Plumbing Command**|**Description**|
|-----------|---------------|
|git cat-file -p {commitId}|Unzip and cat the file<br/>-p means pretty-print|
|echo "banana"\| git hash-object --stdin|Turns the string into hash code|
|git ls-files -s|Show files in the index and the working tree|
|git rev-parse main~2^2|translate names to commit id|
|git write-tree|Create a tree object from the current index|
|git commit-tree|Create a new commit object|
|git check-ref-format --branch 'sfx234&(##$#%^#^$'|Ensures that a branch name is well formed|
|cat .git/refs/heads/main|Location of Reference file|

|**Term**|**Description**|
|--------|---------------|
|4 object types| commit / tree / blob / annotated tag|
|SHA-1|An alphanumeric sequence of 40 characters representing a hexadecimal number.|
|Blobs|Binary files<br/>Everything is compressed and transformed into a blob before archiving it into a Git repository.<br/>An object, whatever it is, will always have the same hash in any repository, in any computer, on the face of the Earth.<br/>If you have two different files with the same content, even if they have different names and paths, in Git you will end up having only one blob.|
|.git folder||
|commit|Every commit has a parent, and following these relations between commits, we can always navigate from a random one down to the first one, the already mentioned root commit.<br/>First commit did not have a parent. Git, while navigating and reconstructing our repository, simply knows it is done when it finds a commit without a parent.|
|Doesn't do deltas on commit|Every commit is a snapshot of the entire repository.|
|Unreachable commits|It simply won't delete unreachable commits, at least not immediately. It makes some housekeeping automatically at a given time, as it has some powerful garbage collection features|
|Working Tree / Directory||
|Index / Staging Tree|Intermediate layer between working tree and the repository|
|Repository / HEAD||
|^ caret|main^n means the nth parent of main branch|
|~ tilde|Go back before an ancestral parent and select a preceding generation. Always refers to the first parent|

## Reference
https://stackoverflow.com/questions/58003030/what-is-the-git-restore-command-and-what-is-the-difference-between-git-restor