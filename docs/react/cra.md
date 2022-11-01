---
sidebar_position: 1
---

# Lesson 1: Create React App

```console
npx create-react-app my-app
cd my-app
npm start
```

Just as Spring boot has [spring initializr](https://start.spring.io/), React has something similar named [Create React App (CRA)](https://create-react-app.dev/docs/getting-started).

You can create React project Without CRA, but then you have to build everything from scratch, from creating a node project, configurating Babel and Webpack, to managing  React dependencies, file structure and modules .... Blah Blah Blah ....

> Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
>  
> ***From Create React App Official Site***

There is another similar React project starter named [Create Next App](https://nextjs.org/docs/api-reference/create-next-app), which based on Next.js. But its ecosystem is smaller. There are not many books about it. It supports SSR (Server side Rendering), which favours SEO, but the concept is different, You may have difficulty integrating other React families (React Router / Redux etc) with it.

