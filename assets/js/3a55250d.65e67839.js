"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[4422],{9197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));n(1839);const r={sidebar_position:5},o="Lesson 4: React i18n",l={unversionedId:"react/react-i18n",id:"react/react-i18n",title:"Lesson 4: React i18n",description:"Internationalize your web apps on the client & server.",source:"@site/docs/react/react-i18n.md",sourceDirName:"react",slug:"/react/react-i18n",permalink:"/Notesaurus/docs/react/react-i18n",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react/react-i18n.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Lesson 3: Redux Thunk",permalink:"/Notesaurus/docs/react/react-thunk"},next:{title:"(Deprecated) React Redux",permalink:"/Notesaurus/docs/react/deprecated-react-redux"}},i={},c=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Import library",id:"1-import-library",level:3},{value:"2. Prepare Message Resource Files",id:"2-prepare-message-resource-files",level:3},{value:"3. Wrap App Component with IntlProvider component. Specify locale and message resource",id:"3-wrap-app-component-with-intlprovider-component-specify-locale-and-message-resource",level:3},{value:"4a. Usage 1: use &lt;FormattedMessage&gt;",id:"4a-usage-1-use-formattedmessage",level:3},{value:"4b. Usage 2: React Hook useIntl",id:"4b-usage-2-react-hook-useintl",level:3},{value:"Reference",id:"reference",level:2},{value:"Issues",id:"issues",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lesson-4-react-i18n"},"Lesson 4: React i18n"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"npm install react-intl\nnpm install intl\n")),(0,s.kt)("p",null,"Internationalize your web apps on the client & server."),(0,s.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,s.kt)("h3",{id:"1-import-library"},"1. Import library"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"import 'intl';\nimport 'intl/locale-data/jsonp/en'; // or any other locale you need\nimport 'intl/locale-data/jsonp/zh-Hans-CN'; // or any other locale you need\nimport 'intl/locale-data/jsonp/zh-Hant-HK'; // or any other locale you need\nimport { en, cn, hk } from './src/i18n';\nimport { IntlProvider } from 'react-intl';\n")),(0,s.kt)("h3",{id:"2-prepare-message-resource-files"},"2. Prepare Message Resource Files"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/cn.js"',title:'"src/i18n/cn.js"'},"const cn = { \n    'tab.account': '\u8d26\u6237',\n    'tab.login': '\u767b\u5165',\n    'tab.portfolio': '\u6295\u8d44\u7ec4\u5408'\n};\nexport default cn;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/en.js"',title:'"src/i18n/en.js"'},"const en = { \n    'tab.account': 'Account',\n    'tab.login': 'Login',\n    'tab.portfolio': 'Portfolio'\n};\nexport default en;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/hk.js"',title:'"src/i18n/hk.js"'},"const hk = { \n    'tab.account': '\u8cec\u6236',\n    'tab.login': '\u767b\u5165',\n    'tab.portfolio': '\u6295\u8cc7\u7d44\u5408'\n};\nexport default hk;\n")),(0,s.kt)("h3",{id:"3-wrap-app-component-with-intlprovider-component-specify-locale-and-message-resource"},"3. Wrap App Component with IntlProvider component. Specify locale and message resource"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"const App = () => {\n\n  const i18nFormattedMessages={\n    'en': en,\n    'zh-Hans-CN': cn,\n    'zh-Hant-HK': hk\n  };\n  const [ myLocale, useMyLocale ]= useState('zh-Hant-HK');\n    \n  return (\n    ...\n      <IntlProvider locale={myLocale} defaultLocale='en' messages={i18nFormattedMessages[myLocale]}>\n       ...\n      </IntlProvider>\n    ...\n  );\n};\n")),(0,s.kt)("h3",{id:"4a-usage-1-use-formattedmessage"},"4a. Usage 1: use ","<","FormattedMessage",">"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<FormattedMessage\n  id="app.greeting"\n  description="Greeting to welcome the user to the app"\n  defaultMessage="Hello, {name}!"\n  values={{\n    name: \'Eric\',\n  }}\n/>\n')),(0,s.kt)("h3",{id:"4b-usage-2-react-hook-useintl"},"4b. Usage 2: React Hook useIntl"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/screens/index.js"',title:'"src/screens/index.js"'},"import { useIntl } from 'react-intl'\nconst EmoTabScreen = () => {\n  const intl = useIntl();\n  return (\n      ...\n          <Tab.Screen \n              name=\"Portfolio\" \n              component={PortfolioScreen}\n              options={{\n                  tabBarLabel: intl.formatMessage({ id: 'tab.portfolio'}),\n                  tabBarIcon: ({ color, size }) => (\n                    <AntDesign name=\"piechart\" color={color} size={size} />\n                  ),\n                }}\n          />\n       ...\n  );\n};                          \n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://formatjs.io/"},"Official Site"))),(0,s.kt)("h2",{id:"issues"},"Issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Placeholder cannot use FormattedMessage"),(0,s.kt)("li",{parentName:"ul"},"Using React Hook intl.formatMessage(messages.title)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/issues/712"},"react-navigation/react-navigation#712")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://iq.js.org/questions/react/how-to-use-formattedmessage-as-placeholder-using-react-intl"},"How to use ","<","FormattedMessage",">"," as placeholder using React Intl?"))))}u.isMDXComponent=!0}}]);