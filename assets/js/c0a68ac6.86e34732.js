"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[613],{2969:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{children:t,color:n}=e;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},4197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=(n(1839),n(2969));const i={sidebar_position:3},s="Redux Thunk",c={unversionedId:"react-native/framework-library/react-thunk",id:"react-native/framework-library/react-thunk",title:"Redux Thunk",description:"",source:"@site/docs/react-native/framework-library/react-thunk.mdx",sourceDirName:"react-native/framework-library",slug:"/react-native/framework-library/react-thunk",permalink:"/Notesaurus/docs/react-native/framework-library/react-thunk",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react-native/framework-library/react-thunk.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Redux Tookit (New)",permalink:"/Notesaurus/docs/react-native/framework-library/redux-toolkit"},next:{title:"React Navigation",permalink:"/Notesaurus/docs/react-native/framework-library/react-navigation"}},l={},u=[{value:"Reference",id:"reference",level:3},{value:"Step by Step Guide",id:"step-by-step-guide",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redux-thunk"},"Redux Thunk"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"middleware")," (syntactic sugar / abstraction) that support redux async action to be handled and dispatched."),(0,a.kt)("blockquote",null,(0,a.kt)("img",{src:"https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif",width:"350"}),(0,a.kt)("p",{parentName:"blockquote"},"From ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-6-async-logic"},"Async Logic and Data Fetching in Redux official site"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install redux-thunk\nnpm install remote-redux-devtools\n")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},"Official Site")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redux.js.org/usage/writing-logic-thunks"},"Writing Logic with Thunks"))),(0,a.kt)("h3",{id:"step-by-step-guide"},"Step by Step Guide"),(0,a.kt)(o.Z,{color:"#dd0000",mdxType:"Highlight"},"Deprecated"),(0,a.kt)("p",null,"Please follow the approach in ",(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/usage-guide"},"Redux Toolkit"),"."),(0,a.kt)("hr",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up the redux store to support redux thunk middleware "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/rootStore.js"',title:'"src/store/rootStore.js"'},"import { createStore, applyMiddleware } from 'redux'\nimport rootReducer from './rootReducer.js'\nimport { composeWithDevTools } from 'remote-redux-devtools';\nimport thunk from 'redux-thunk';\n\nexport default store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Basically, 2 Action Creators are written. The first one calls async action(e.g. call API), the second one updates the redux store (if the first one succeed)."),(0,a.kt)("p",{parentName:"li"},"This is because Redux store needs to be updated synchronously. Without Redux Thunk, one has to first perform all the asynchronous actions before he can dispatch and store the data in redux store, which implies the logic of asynchronous action has to be placed elsewhere (which is not what we want!)."),(0,a.kt)("p",{parentName:"li"},"Redux Thunk resolved the problem by aligning all the action logic and placing them in action creators, be it async or sync logic. This is transparent to developer. To developer, whether the action is sync or async will be dispatched in the same manner.But there is one single difference between async action creator and sync action creator. Instead of returning payload, the former returns a function which takes dispatch as input parameter."),(0,a.kt)("p",{parentName:"li"},"The underlying mechanism is, when the async action is dispatched, redux thunk will perform that piece of async logic. When async action is finished, react thunk will dispatch the sync action to Redux Store (This can be controlled by condition, e.g. success leads to update Redux Store, failure does not)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Async action creator LoginAction in src/store/login/LoginAction.js"',title:'"Async',action:!0,creator:!0,LoginAction:!0,in:!0,'src/store/login/LoginAction.js"':!0},"const LoginAction = ({username, password}) => {\n    return async function(dispatch) {\n    ...\n        if(response.status === 200){\n            xmlParser.parseStringPromise(response.data)\n            .then(result => { \n                ...\n                dispatch(LoginSucceedAction(targetLoginSession));\n                ...\n            })\n            .catch(error =>{\n            ...\n            });\n        }  \n    ...\n}\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sync action creator LoginSucceedAction in src/store/login/LoginAction.js"',title:'"Sync',action:!0,creator:!0,LoginSucceedAction:!0,in:!0,'src/store/login/LoginAction.js"':!0},"const LoginSucceedAction = ( loginSession ) => { \n    console.log(\"[LoginSucceedAction] loginSession: \" + JSON.stringify(loginSession) );\n    return {\n        type: 'LOGIN_SUCCEED',\n        payload: {                        \n        loginSession: loginSession\n        },\n    };\n}\n")))))}p.isMDXComponent=!0}}]);