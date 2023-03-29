---
sidebar_position: 99
---

# GIT

|* Term *|* Description *|
|--------|---------------|
|4 object types| commit / tree / blob / annotated tag|
|SHA-1|An alphanumeric sequence of 40 characters representing a hexadecimal number.|
|Blobs|Binary files<br/>Everything is compressed and transformed into a blob before archiving it into a Git repository.<br/>An object, whatever it is, will always have the same hash in any repository, in any computer, on the face of the Earth.<br/>If you have two different files with the same content, even if they have different names and paths, in Git you will end up having only one blob.|
|.git folder||
|commit|Every commit has a parent, and following these relations between commits, we can always navigate from a random one down to the first one, the already mentioned root commit.<br/>First commit did not have a parent. Git, while navigating and reconstructing our repository, simply knows it is done when it finds a commit without a parent.|
|Doesn't do deltas|Git doesn't do deltas (at least not in this case), and every commit is actually a snapshot of the entire repository.|
|Unreachable commits|It simply won't delete unreachable commits, at least not immediately. It makes some housekeeping automatically at a given time, as it has some powerful garbage collection features|
|Working Tree --> Staging Area --> HEAD||


|* Command *|* Description *|
|-----------|---------------|
|git config --global user.name xxxx||
|git config --global user.email xxxx||
|git init|Init a Repo|
|git init --bare|Init a remote repository|
|git add .|Add the resource (ready for commit)|
|git status||
|git cat-file -p {SHA-1}|Unzip and cat the file<br/>-p means pretty-print|
|git commit -am "Add an orange"||
|git log --format=raw||
|git log --format=fuller||
|git log --oneline||
|git log --oneline --graph --decorate||
|echo "banana" | git hash-object --stdin|Turns the string into hash code|
|cat .git/refs/heads/master|Location of Reference file|
|git branch {branchName}Create Branch {branchName}|
|git branch -d {branchName}|Delete Branch {branchName}|
|git branch -D {branchName}|Force Delete Branch {branchName}|
|git checkout {branchName}|Move to Branch {branchName}|
|git checkout HEAD^|Move to Detached HEAD state. <br/>Being in this state basically means that<br/> HEAD does not reference a branch|
|git reset --hard {SHA-1}|Moves current branch to this {SHA-1}|
|git reset --hard master|Moves current branch to master <a href="https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified">Read</a>|
|git reflog show|Records what happens in the repository<br/> while you commit, reset, check out|
|git show {commit_id} --name-only|Show the content for a commit|
|git reflog {branchName}||
|git tag -a annotatedTag {SHA-1}||
|git diff|Working Tree VS Staging Area|
|git diff --cached|Staging Area VS HEAD|
|git rebase {branch A}|Rebase the current branch on top of branch A|
|git rebase -i HEAD~{N}|Merge several commit into 1<br/>i means interactive, while the HEAD~N argument means<br/> I want to rebase the last N commits|
|git merge {branchName}|merge the branch into the master one|
|git cherry-pick {SHA-1}|cherry-pick a particular commit|
|git remote -v||
|git push||
|git push --force-with-lease||
|git pull|Download and merge|
|git fetch|Just download|