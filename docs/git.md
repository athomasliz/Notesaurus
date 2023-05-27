---
sidebar_position: 99
---

# GIT

## 1. Porcelain Command (Enquiry)
|**Command**|**Description**|
|-----------|---------------|
|```git --version```|Show version|
|```git help --all```|Complete list of git subcommands|
|```git {subcommand} --help```|Documentation for each subcommand|
|```git config -l --show-scope --show-origin```|List the settings of all the variable|
|```git show-branch --more=50```|Show all the commit in reverse order|
|```git show-branch 'bug/*'```||
|```git status```|Query the status of the index|
|```git log --oneline```|**--oneline** is a shorthand for "--pretty=oneline --abbrev-commit"|
|```git log --oneline --graph --decorate```|**--graph** visualize the forks from a commit and the point in which branches merge|
|```git log -3```|Limit the range to 3|
|```git log 7a4d4b1...1457b0```|show commit history from 7a4d4b1 to 1457b0|
|```git log -1 -p --stat {commitId}```|**-p** will print the patch<br/>**--stat** will provide a tally of how many lines were modified|
|```git log --format=raw```||
|```git log --format=fuller```||
|```git show {commitId}```|Show the content for a commit|
|```git show {commitId} --name-only```|Show the content for a commit|
|```git diff```|Working Tree VS Staging Area|
|```git diff --cached```|Staging Area VS HEAD|
|```git diff --name-status {branch name 1} {branch name 2}```||
|```git reflog show```|Records what happens in the repository<br/> while you commit, reset, check out|
|```git reflog {branchName}```||

## 2. Porcelain Command (Action)
|**Command**|**Description**|
|-----------|---------------|
|```git clone {repository}```|Clone a repository into a new directory|
|```git config --global {options} {value}```|Get and set repository or global options|
|```git config --unset --global user.email```|Remove a setting from the configuration|
|```git init```|Init a Repo|
|```git init --bare```|Init a remote repository|
|```git add .```|Add file contents to the index|
|```git commit -am "Add an orange"```|Record change to repository|
|```git push```|Update remote refs along with associated objects|
|```git push --force-with-lease```||
|```git pull```|Fetch from and integrate with another repository|
|```git fetch --all```|Download objects and refs from another repository||
|```git checkout {branchName}```|Move to Branch {branchName}|
|```git checkout {fileName}```|Check out a particular file from index to working directory|
|```git checkout HEAD^```|Move to Detached HEAD state. <br/>Being in this state basically means that<br/> HEAD does not reference a branch|
|```git branch {branchName} {start-point}```|Create Branch {branchName} using {start-point}.<br/> If not specified, HEAD of currently active branch.|
|```git branch -d {branchName}```|Delete Branch {branchName}|
|```git branch -D {branchName}```|Force Delete Branch {branchName}|
|```git branch -m {old-branch-name} {new-branch-name}```|Rename a Git repository’s branch name|
|**git reset**|<ul><li>Updating your branch.</li><li>Moving the tip to add or remove commits from the branch.</li><li>This operation changes the commit history.</li><li>Can be used to restore the index, overlapping with git restore.</li></ul>|
|```git reset```|Undo all the changes from the index.<br/>Keep all the changes in working tree.|
|```git reset --hard {commitId}```|Moves current branch to this {commitId}|
|```git reset --hard master```|Moves current branch to master <a href="https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified">Read</a>|
|```git reset {fileName}```|Undo the add from the index.<br/>Keep the change in working tree.|
|**git restore**|Restoring files in the working tree from either the index or another commit.<br/>Does not update your branch.<br/>Can also be used to restore files in the index from another commit.|
|```git restore {fileName}```|Restore content of working tree from the index|
|```git restore -s {commitId} {fileName}```|Restore content of working tree from the specified commit Id|
|```git restore --staged {fileName}```|Restore content of index tree from HEAD|
|```git restore --staged --worktree {fileName}```|Restore both content of index tree and working tree from HEAD|
|**git revert**|Making a new commit that reverts the changes made by other commits.|
|```git revert {commitId}```|Remove the change of the specified commit Id and create a new commit|
|```git revert --no-commit {commitId}```|Remove the change of the specified commit Id without commit|
|```git rebase {branch A}```|Rebase the current branch on top of branch A|
|```git rebase -i HEAD~{N}```|Merge several commit into 1<br/>i means interactive, while the HEAD~N argument means<br/> I want to rebase the last N commits|
|```git merge {branchName}```|merge the branch into the master one|
|```git merge --abort```|Abort the current merge operation.<br/>Restores both working and index tree|
|```git cherry-pick {commitId}```|cherry-pick a particular commit|
|```git cherry-pick --no-commit {commitId}```|cherry-pick a particular commit without commit|
|```git remote -v```|Manage set of tracked|
|```git tag -a annotatedTag {commitId}```||

## 3. Plumbing Command 
|**Command**|**Description**|
|-----------|---------------|
|```git cat-file -t {objectId}```|Show the type of the object|
|```git cat-file -p {objectId}```|Unzip and cat the file<br/>-p means pretty-print|
|```echo "banana"\| git hash-object --stdin```|Turns the string into hash code|
|```git ls-files -s```|Show files in the index and the working tree|
|```git rev-parse main~2```|translate names to commit id|
|```git write-tree```|Create a tree object from the current index|
|```git commit-tree```|Create a new commit object|
|```git check-ref-format --branch 'sfx234&(##$#%^#^$'```|Ensures that a branch name is well formed|
|```git symbolic-ref```|Read, modify and delete symbolic refs|
|```cat .git/refs/heads/main```|Location of Reference file|
|```tree .git```||

## 4. Terminology and Concepts
|**Term                  **|**Description**|
|--------------------------|---------------|
|Repository                |A.k.a HEAD|
|Index tree                |<ul><li>A.k.a Staging tree, Staging Directory, Index, Index Directory, etc</li><li>Dynamic stage between working tree and repository</li><li>Cached representation of all blob objects</li><li>Allow you to alter the content of the index (git add, restore)</li><li>Finer control over what content will be stored in the next commit</li></ul>|
|Working tree|A.k.a Working directory|
|.git folder|<ul><li>Hidden subdirectory at the root of working directory.</li><li>Maintains data structures such as object store, index, ref, etc</li></ul>|
|Object|<ul><li>Git stores file content as object</li><li>Does not include metadata such as pathname, filename, last modified time</li></ul>|
|Content-Addressable|<ul><li>GIT stores key-value pairs of each object</li><li>Key = SHA1 applied to content of object</li><li>Value = Compressed Blob object (Packfile)</li></ul>|
|SHA1|<ul><li>Use to calculate the hash of an object (File Content)</li><li>160 bits, 40 digit hexadecimal number</li><li>Always compute the same ID for identical content</li><li>Effective global unique identifier for the object</li></ul>|
|4 object types|Blobs / Trees / Commits / Tags|
|Blobs|<ul><li>Binary files</li><li>Contain any data</li><li>Treated as opaque: Internal structure ignored by GIT</li><li>Does not contain any metadata about the file and its name</li><li>Everything is compressed into a blob before archiving it into Git</li><li>An object will always have the same hash (SHA-1) anywhere.</li><li>Different names and paths but with identical content --> Same blob.</li></ul>|
|Trees|<ul><li>A tree object represents one level of directory information</li><li>Records blob identifiers, pathnames, and metadata</li><li>Recursively reference other tree objects and build a complete hierarchy</li></ul>|
|Commits|<ul><li>Holds metadata for each change</li><li>Metadata includes author, committer, commit date, and log message</li><li>Points to a tree object that captures snapshot</li><li>Initial commit has no parent.</li><li>Usually 1 parent only.</li><li>Merge results in more than 1 parent.</li></ul>|
|Tags|<ul><li>Refer to ```annotated tag```, not ```lightweight tag``` here</li><li>Human-readable name to a specific object</li></ul>|
|Packfile|GIT compresses and stores objects in packfiles|
|No Delta|Every commit is a snapshot of the entire repository.|
|Unreachable commits|<ul><li>Won't delete unreachable commits immediately</li><li>Housekeeping automatically at a given time</li><li>GIT has some powerful garbage collection features</li></ul>|
|Explicit reference|SHA1 hash identifier|
|Implicit reference|<ul><li>refs: Local branch names, tag names</li><li>symrefs: regular file that stores a string that begins with ref: refs/<br/>refs/heads/ref<br/>refs/remotes/ref<br/>refs/tags/ref</li><li>relative commit names: HEAD^2</li></ul>|
|^ caret|main^n means the nth parent of main branch|
|~ tilde|<ul><li>Go back before an ancestral parent and select a preceding generation</li><li>Always refers to the first parent</li></ul>|

## 5. Illustration

### A. GIT as an object store

#### Step 1. Init the repository
```bash
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % git init .
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags

9 directories, 17 files
```
#### Step 2. Create file in working tree
```bash
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % echo "Hello World" > HelloWorld.txt
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags

9 directories, 17 files
```
#### Step 3. Add file to index tree

```bash
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % git add HelloWorld.txt 
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
# highlight-next-line
├── index
├── info
│   └── exclude
├── objects
# highlight-next-line
│   ├── 55
# highlight-next-line
│   │   └── 7db03de997c86a4a028e1ebd3a1ceb225be238
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 557db03de997c86a4a028e1ebd3a1ceb225be238
# highlight-next-line
blob
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 557db03de997c86a4a028e1ebd3a1ceb225be238
# highlight-next-line
Hello World
```

#### Step 4. Create another folder and file and add to index tree
```bash
# highlight-start
thomasli@Thomas-Lis-MBP illustration1 % mkdir folderA
thomasli@Thomas-Lis-MBP illustration1 % echo "Hello World" > folderA/HelloWorld2.txt
thomasli@Thomas-Lis-MBP illustration1 % git add folderA/HelloWorld2.txt
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── objects
│   ├── 55
│   │   └── 7db03de997c86a4a028e1ebd3a1ceb225be238
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

#### Step 5. Commit the changes to repository

```bash
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % git commit -am "Initial commit"
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── index
├── info
│   └── exclude
# highlight-start
├── logs
│   ├── HEAD
│   └── refs
│       └── heads
│           └── master
# highlight-end
├── objects
# highlight-start
│   ├── 07
│   │   └── ff67e7d021a547594965b1723252997f07d088
# highlight-end
│   ├── 55
│   │   └── 7db03de997c86a4a028e1ebd3a1ceb225be238
# highlight-start
│   ├── 62
│   │   └── 862ef896e99e31a8ea3fdbbe6c63f1deecc7be
│   ├── e3
│   │   └── 7f3782464ff4e498f4bd98500305503678bcf9
# highlight-end
│   ├── info
│   └── pack
└── refs
    ├── heads
    # highlight-next-line
    │   └── master
    └── tags

16 directories, 26 files
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 07ff67e7d021a547594965b1723252997f07d088
# highlight-next-line
commit
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 07ff67e7d021a547594965b1723252997f07d088
# highlight-start
tree 62862ef896e99e31a8ea3fdbbe6c63f1deecc7be
author athomasliz <athomasliz@yahoo.com.hk> 1685166947 +0800
committer athomasliz <athomasliz@yahoo.com.hk> 1685166947 +0800

Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 62862ef896e99e31a8ea3fdbbe6c63f1deecc7be
# highlight-next-line
tree
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 62862ef896e99e31a8ea3fdbbe6c63f1deecc7be
# highlight-start
100644 blob 557db03de997c86a4a028e1ebd3a1ceb225be238	HelloWorld.txt
040000 tree e37f3782464ff4e498f4bd98500305503678bcf9	folderA
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t e37f3782464ff4e498f4bd98500305503678bcf9
# highlight-next-line
tree
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p e37f3782464ff4e498f4bd98500305503678bcf9
# highlight-start
100644 blob 557db03de997c86a4a028e1ebd3a1ceb225be238	HelloWorld2.txt
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % cat .git/refs/heads/master
07ff67e7d021a547594965b1723252997f07d088
thomasli@Thomas-Lis-MBP illustration1 % cat .git/HEAD
ref: refs/heads/master
```
### B. Untracked file vs Tracked file

#### Step 1. Create file in working tree
```bash
thomasli@Thomas-Lis-MBP illustration1 % echo "Happy World" > HappyWorld.txt
thomasli@Thomas-Lis-MBP illustration1 % git status
On branch master
# highlight-start
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	HappyWorld.txt
# highlight-end

nothing added to commit but untracked files present (use "git add" to track)
thomasli@Thomas-Lis-MBP illustration1 % git diff
```

#### Step 2. Modify file in working tree
```bash
thomasli@Thomas-Lis-MBP illustration1 % echo "Hello World 2" > HelloWorld.txt
thomasli@Thomas-Lis-MBP illustration1 % git status
On branch master
# highlight-start
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   HelloWorld.txt
# highlight-end

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	HappyWorld.txt

no changes added to commit (use "git add" and/or "git commit -a")
thomasli@Thomas-Lis-MBP illustration1 % git diff
# highlight-start
diff --git a/HelloWorld.txt b/HelloWorld.txt
index 557db03..3ee3849 100644
--- a/HelloWorld.txt
+++ b/HelloWorld.txt
@@ -1 +1 @@
-Hello World
+Hello World 2
# highlight-end
```

#### Step 3. Add to index tree
```bash
thomasli@Thomas-Lis-MBP illustration1 % git add .
thomasli@Thomas-Lis-MBP illustration1 % git status
On branch master
# highlight-start
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   HappyWorld.txt
	modified:   HelloWorld.txt
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git diff
thomasli@Thomas-Lis-MBP illustration1 % git diff --staged
# highlight-start
diff --git a/HappyWorld.txt b/HappyWorld.txt
new file mode 100644
index 0000000..674b232
--- /dev/null
+++ b/HappyWorld.txt
@@ -0,0 +1 @@
+Happy World
diff --git a/HelloWorld.txt b/HelloWorld.txt
index 557db03..3ee3849 100644
--- a/HelloWorld.txt
+++ b/HelloWorld.txt
@@ -1 +1 @@
-Hello World
+Hello World 2
# highlight-end
```

#### Step 4. Commit to repository
```bash
thomasli@Thomas-Lis-MBP illustration1 % git commit -am "Commit 2" 
[master 90b73b9] Commit 2
 2 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 HappyWorld.txt
thomasli@Thomas-Lis-MBP illustration1 % git status
# highlight-start              
On branch master
nothing to commit, working tree clean
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git diff  
thomasli@Thomas-Lis-MBP illustration1 % git diff --staged
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│       └── heads
│           ├── branch1
│           └── master
├── objects
│   ├── 07
│   │   └── ff67e7d021a547594965b1723252997f07d088
# highlight-start
│   ├── 3e
│   │   └── e384936466a484e0089c82ce559a10dc9c46ea
# highlight-end
│   ├── 55
│   │   └── 7db03de997c86a4a028e1ebd3a1ceb225be238
│   ├── 62
│   │   └── 862ef896e99e31a8ea3fdbbe6c63f1deecc7be
# highlight-start
│   ├── 67
│   │   └── 4b232f5786fef7b39ed8e5173cc646af9c666c
│   ├── 90
│   │   └── b73b9c46204615c93a876db85da5d519109b4f
│   ├── a4
│   │   └── 654fd64cc8965196e7d1bc901bb88564fbd876
# highlight-end
│   ├── e3
│   │   └── 7f3782464ff4e498f4bd98500305503678bcf9
│   ├── info
│   └── pack
└── refs
    ├── heads
    │   └── master
    └── tags

20 directories, 31 files
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 674b232f5786fef7b39ed8e5173cc646af9c666c
# highlight-next-line
blob
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 674b232f5786fef7b39ed8e5173cc646af9c666c
# highlight-next-line
Happy World
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 3ee384936466a484e0089c82ce559a10dc9c46ea
# highlight-next-line
blob
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 3ee384936466a484e0089c82ce559a10dc9c46ea
Hello World 2
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t a4654fd64cc8965196e7d1bc901bb88564fbd876
# highlight-next-line
tree
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p a4654fd64cc8965196e7d1bc901bb88564fbd876
# highlight-start
100644 blob 674b232f5786fef7b39ed8e5173cc646af9c666c	HappyWorld.txt
100644 blob 3ee384936466a484e0089c82ce559a10dc9c46ea	HelloWorld.txt
040000 tree e37f3782464ff4e498f4bd98500305503678bcf9	folderA
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -t 90b73b9c46204615c93a876db85da5d519109b4f
# highlight-next-line
commit
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p 90b73b9c46204615c93a876db85da5d519109b4f
# highlight-start
tree a4654fd64cc8965196e7d1bc901bb88564fbd876
parent 07ff67e7d021a547594965b1723252997f07d088
author athomasliz <athomasliz@yahoo.com.hk> 1685168740 +0800
committer athomasliz <athomasliz@yahoo.com.hk> 1685168740 +0800

Commit 2
# highlight-end
```

### C. Branching and Merging

#### Step 1. Create a branch
```bash
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % git branch branch1
thomasli@Thomas-Lis-MBP illustration1 % tree .git
.git
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│       └── heads
│           ├── branch1
│           └── master
├── objects
│   ├── 07
│   │   └── ff67e7d021a547594965b1723252997f07d088
│   ├── 3e
│   │   └── e384936466a484e0089c82ce559a10dc9c46ea
│   ├── 55
│   │   └── 7db03de997c86a4a028e1ebd3a1ceb225be238
│   ├── 62
│   │   └── 862ef896e99e31a8ea3fdbbe6c63f1deecc7be
│   ├── 67
│   │   └── 4b232f5786fef7b39ed8e5173cc646af9c666c
│   ├── 90
│   │   └── b73b9c46204615c93a876db85da5d519109b4f
│   ├── a4
│   │   └── 654fd64cc8965196e7d1bc901bb88564fbd876
│   ├── e3
│   │   └── 7f3782464ff4e498f4bd98500305503678bcf9
│   ├── info
│   └── pack
└── refs
    ├── heads
        # highlight-next-line
    │   ├── branch1
    │   └── master
    └── tags

20 directories, 32 files
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % cat .git/refs/heads/branch1 
90b73b9c46204615c93a876db85da5d519109b4f
thomasli@Thomas-Lis-MBP illustration1 % cat .git/refs/heads/master 
90b73b9c46204615c93a876db85da5d519109b4f
thomasli@Thomas-Lis-MBP illustration1 % git log --oneline --decorate --graph
# highlight-start
* 90b73b9 (HEAD -> master, branch1) Commit 2
* 07ff67e Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git show-branch --more=50
# highlight-start
! [branch1] Commit 2
 * [master] Commit 2
--
+* [branch1] Commit 2
+* [branch1^] Initial commit
# highlight-end
```
#### Step 2. Add and commit file to master
```bash
thomasli@Thomas-Lis-MBP illustration1 % echo "Master" > master.txt
thomasli@Thomas-Lis-MBP illustration1 % git add .
thomasli@Thomas-Lis-MBP illustration1 % git commit -am "Commit master"
[master 226ce7b] Commit master
 1 file changed, 1 insertion(+)
 create mode 100644 master.txt
thomasli@Thomas-Lis-MBP illustration1 % git log --oneline --decorate --graph
# highlight-start
* 226ce7b (HEAD -> master) Commit master
* 90b73b9 (branch1) Commit 2
* 07ff67e Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git show-branch --more=10         
# highlight-start  
! [branch1] Commit 2
 * [master] Commit master
--
 * [master] Commit master
+* [branch1] Commit 2
+* [branch1^] Initial commit
# highlight-end
```
#### Step 3. Add and commit file to branch1
```bash
thomasli@Thomas-Lis-MBP illustration1 % echo "Branch 1" > branch1.txt 
thomasli@Thomas-Lis-MBP illustration1 % git add .
thomasli@Thomas-Lis-MBP illustration1 % git commit -am "Commit branch 1"
[branch1 2c40a53] Commit branch 1
 1 file changed, 1 insertion(+)
 create mode 100644 branch1.txt
thomasli@Thomas-Lis-MBP illustration1 % git log --oneline --decorate --graph
# highlight-start
* 2c40a53 (HEAD -> branch1) Commit branch 1
* 90b73b9 Commit 2
* 07ff67e Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git show-branch --more=10           
# highlight-start
* [branch1] Commit branch 1
 ! [master] Commit master
--
*  [branch1] Commit branch 1
 + [master] Commit master
*+ [branch1^] Commit 2
*+ [branch1~2] Initial commit
# highlight-end
```

#### Step 4. Merge branch1 to master
```bash
thomasli@Thomas-Lis-MBP illustration1 % git checkout master
Switched to branch 'master'
# highlight-next-line
thomasli@Thomas-Lis-MBP illustration1 % git merge branch1
hint: Waiting for your editor to close the file... 
Merge branch 'branch1'
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
~
~
~
Merge made by the 'ort' strategy.
 branch1.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 branch1.txt
thomasli@Thomas-Lis-MBP illustration1 % git log --oneline --decorate --graph
# highlight-start
*   db15771 (HEAD -> master) Merge branch 'branch1'
|\  
| * 2c40a53 (branch1) Commit branch 1
* | 226ce7b Commit master
|/  
* 90b73b9 Commit 2
* 07ff67e Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git show-branch --more=10
# highlight-start    
! [branch1] Commit branch 1
 * [master] Merge branch 'branch1'
--
 - [master] Merge branch 'branch1'
+* [branch1] Commit branch 1
 * [master^] Commit master
+* [master~2] Commit 2
+* [master~3] Initial commit
# highlight-end
thomasli@Thomas-Lis-MBP illustration1 % git cat-file -p db15771          
tree 944a9ec0188c09280146a157b8710c5b04eadc57
# highlight-start 
parent 226ce7b8dc033a1f709873af758604edf9c5b64e
parent 2c40a531b384033ed3da55c32ffa96709c4d6fab
# highlight-end
author athomasliz <athomasliz@yahoo.com.hk> 1685197296 +0800
committer athomasliz <athomasliz@yahoo.com.hk> 1685197296 +0800

Merge branch 'branch1'

```
## 6. Reference
https://stackoverflow.com/questions/58003030/what-is-the-git-restore-command-and-what-is-the-difference-between-git-restor