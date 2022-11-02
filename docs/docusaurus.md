---
sidebar_position: 2
---

# Docusaurus

## About Docusaurus
This site makes use of Docusarus [here](https://docusaurus.io/). It is something really cool. It allows you to create a beautiful site in hours with mark down language, and host it in your server or Github. 

## Step by Step Guide

### 1. Install [Node.js](https://nodejs.org/en/download/) and [Visual Studio](https://visualstudio.microsoft.com/).

### 2. Download Docusaurus project template with below command.
    
```
npx create-docusaurus@latest {Your project name} classic
```

### 3. Start the server

```
yarn start
```

### 4. Change the configuration in docusaurus.config.js

```jsx title="docusaurus.config.js"    
const config = {
    title: 'Keep your notes',
    tagline: '',
    url: 'https://athomasliz.github.io',
    baseUrl: '/Notesaurus/',
    projectName: 'Notesaurus', 

...
```

### 5. Create repository in GitHub (Main branch). 

You may download [GitHub Desktop](https://desktop.github.com/).

### 6. Create a branch gh_pages in GitHub. 

### 7. Set up the SSL communication with GitHub. 

You may refer [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```
ssh-keygen -t ed25519 "{your email}"
ssh-add ~/.ssh/id_ed25519
```

Add the public key to GitHub.
   
![GitHub Add public key](/img/github/github-setup-public-key.PNG)

### 8. Generate your Personal Access Token in GitHub

![GitHub Personal Access Token](/img/github/github-personal-access-token.PNG)

### 9. Deploy the program

```
set GIT_USER={Your GitHub Username}
set GIT_PASS={Your GitHub Personal Access Token}
yarn deploy
```

### 10. Configure the branch to gh_pages and publish the page in GitHub Pages.

![GitHub Pages Configuration](/img/github/github-pages-configuration.PNG)
