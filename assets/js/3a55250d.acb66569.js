"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[4422],{9197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));a(1839);const s={sidebar_position:5},o="React i18n",i={unversionedId:"react/react-i18n",id:"react/react-i18n",title:"React i18n",description:"Internationalize your web apps on the client & server.",source:"@site/docs/react/react-i18n.md",sourceDirName:"react",slug:"/react/react-i18n",permalink:"/Notesaurus/docs/react/react-i18n",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react/react-i18n.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"(Deprecated) Redux Thunk",permalink:"/Notesaurus/docs/react/react-thunk"},next:{title:"React Navigation",permalink:"/Notesaurus/docs/react-native/framework-library/react-navigation"}},l={},c=[{value:"Reference",id:"reference",level:2},{value:"Issues",id:"issues",level:2},{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"1. Import library",id:"1-import-library",level:3},{value:"2. Prepare Message Resource Files",id:"2-prepare-message-resource-files",level:3},{value:"3. Wrap App Component with IntlProvider component. Specify locale and message resource",id:"3-wrap-app-component-with-intlprovider-component-specify-locale-and-message-resource",level:3},{value:"4a. Usage 1: use &lt;FormattedMessage&gt;",id:"4a-usage-1-use-formattedmessage",level:3},{value:"4b. Usage 2: React Hook useIntl",id:"4b-usage-2-react-hook-useintl",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-i18n"},"React i18n"),(0,r.kt)("p",null,"Internationalize your web apps on the client & server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install react-intl\nnpm install intl\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://formatjs.io/"},"Official Site"))),(0,r.kt)("h2",{id:"issues"},"Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Placeholder cannot use FormattedMessage"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using React Hook intl.formatMessage(messages.title)"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues/712"},"react-navigation/react-navigation#712"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://iq.js.org/questions/react/how-to-use-formattedmessage-as-placeholder-using-react-intl"},"How to use ","<","FormattedMessage",">"," as placeholder using React Intl?")))))),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,r.kt)("h3",{id:"1-import-library"},"1. Import library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"import 'intl';\nimport 'intl/locale-data/jsonp/en'; // or any other locale you need\nimport 'intl/locale-data/jsonp/zh-Hans-CN'; // or any other locale you need\nimport 'intl/locale-data/jsonp/zh-Hant-HK'; // or any other locale you need\nimport { en, cn, hk } from './src/i18n';\nimport { IntlProvider } from 'react-intl';\n")),(0,r.kt)("h3",{id:"2-prepare-message-resource-files"},"2. Prepare Message Resource Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/cn.js"',title:'"src/i18n/cn.js"'},"const cn = { \n    'tab.account': '\u8d26\u6237',\n    'tab.login': '\u767b\u5165',\n    'tab.portfolio': '\u6295\u8d44\u7ec4\u5408'\n};\nexport default cn;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/en.js"',title:'"src/i18n/en.js"'},"const en = { \n    'tab.account': 'Account',\n    'tab.login': 'Login',\n    'tab.portfolio': 'Portfolio'\n};\nexport default en;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/i18n/hk.js"',title:'"src/i18n/hk.js"'},"const hk = { \n    'tab.account': '\u8cec\u6236',\n    'tab.login': '\u767b\u5165',\n    'tab.portfolio': '\u6295\u8cc7\u7d44\u5408'\n};\nexport default hk;\n")),(0,r.kt)("h3",{id:"3-wrap-app-component-with-intlprovider-component-specify-locale-and-message-resource"},"3. Wrap App Component with IntlProvider component. Specify locale and message resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},"const App = () => {\n\n  const i18nFormattedMessages={\n    'en': en,\n    'zh-Hans-CN': cn,\n    'zh-Hant-HK': hk\n  };\n  const [ myLocale, useMyLocale ]= useState('zh-Hant-HK');\n    \n  return (\n    ...\n      <IntlProvider locale={myLocale} defaultLocale='en' messages={i18nFormattedMessages[myLocale]}>\n       ...\n      </IntlProvider>\n    ...\n  );\n};\n")),(0,r.kt)("h3",{id:"4a-usage-1-use-formattedmessage"},"4a. Usage 1: use ","<","FormattedMessage",">"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<FormattedMessage\n  id="app.greeting"\n  description="Greeting to welcome the user to the app"\n  defaultMessage="Hello, {name}!"\n  values={{\n    name: \'Eric\',\n  }}\n/>\n')),(0,r.kt)("h3",{id:"4b-usage-2-react-hook-useintl"},"4b. Usage 2: React Hook useIntl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/screens/index.js"',title:'"src/screens/index.js"'},"import { useIntl } from 'react-intl'\nconst EmoTabScreen = () => {\n  const intl = useIntl();\n  return (\n      ...\n          <Tab.Screen \n              name=\"Portfolio\" \n              component={PortfolioScreen}\n              options={{\n                  tabBarLabel: intl.formatMessage({ id: 'tab.portfolio'}),\n                  tabBarIcon: ({ color, size }) => (\n                    <AntDesign name=\"piechart\" color={color} size={size} />\n                  ),\n                }}\n          />\n       ...\n  );\n};                          \n")))}u.isMDXComponent=!0}}]);