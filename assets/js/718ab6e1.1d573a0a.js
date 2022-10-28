"use strict";(self.webpackChunknotesaurus=self.webpackChunknotesaurus||[]).push([[9725],{2969:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},5137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=(r(1839),r(2969));const s={sidebar_position:1},i="React Redux (Old)",l={unversionedId:"react-native/framework-library/react-redux",id:"react-native/framework-library/react-redux",title:"React Redux (Old)",description:"",source:"@site/docs/react-native/framework-library/react-redux.mdx",sourceDirName:"react-native/framework-library",slug:"/react-native/framework-library/react-redux",permalink:"/Notesaurus/docs/react-native/framework-library/react-redux",draft:!1,editUrl:"https://github.com/athomasliz/Notesaurus/tree/main/docs/react-native/framework-library/react-redux.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference",permalink:"/Notesaurus/docs/javascript/reference"},next:{title:"Redux Tookit (New)",permalink:"/Notesaurus/docs/react-native/framework-library/redux-toolkit"}},c={},p=[{value:"Reference",id:"reference",level:3},{value:"Step by Step Guide",id:"step-by-step-guide",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-redux-old"},"React Redux (Old)"),(0,a.kt)("p",null,"State management ",(0,a.kt)("strong",{parentName:"p"},"store")," for React."),(0,a.kt)("blockquote",null,(0,a.kt)("img",{src:"https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif",width:"350"}),(0,a.kt)("p",{parentName:"blockquote"},"From ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux Concepts and Data Flow in Redux official site"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install react-redux\nnpm install redux\n")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react-redux.js.org/"},"React Redux offical site")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux offical site")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thoughtbot.com/blog/using-redux-with-react-hooks"},"Using Redux with React Hooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/essentials/part-1-overview-concepts"},"Basic Concepts behind Redux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one"},"Why use redux and not React Context "))),(0,a.kt)("h3",{id:"step-by-step-guide"},"Step by Step Guide"),(0,a.kt)(o.Z,{color:"#dd0000",mdxType:"Highlight"},"Deprecated"),(0,a.kt)("p",null,"Please follow the approach in ",(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/usage-guide"},"Redux Toolkit"),"."),(0,a.kt)("hr",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"createStore")," to ",(0,a.kt)("strong",{parentName:"p"},"create the redux store")," (At this moment, ignore the parameter rootReducer, we will have it in step 3)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/rootStore.js"',title:'"src/store/rootStore.js"'},"import { createStore } from 'redux'\nimport rootReducer from './rootReducer.js'\nexport default store = createStore(rootReducer);\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'},"import store from './rootStore.js'\nexport { store };\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wrap the app component with ",(0,a.kt)("strong",{parentName:"p"},"Provider")," and pass the redux store to it. This way the ",(0,a.kt)("strong",{parentName:"p"},"whole app can access the redux store.App.js")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {Provider} from 'react-redux'\nimport {store} from './src/store'\n...\nconst App = () => {\n...\nreturn (\n    <Provider store={store}>\n    ...\n    </Provider>\n);\n};\nexport default App;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare the reducer"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/login/LoginReducer.js"',title:'"src/store/login/LoginReducer.js"'},'const defaultLogin = \n{\n    status: "",\n    returnCode: "",\n    msg: "",\n    userId: "",\n    sessionId: ""\n};\n\nconst successLogin = \n{\n    status: "SUCCESS",\n    returnCode: "0",\n    msg: "LOGIN SUCCESS",\n    userId: "S5627",\n    sessionId: "34567894567890"\n};\n\nconst LoginReducer = (state = { loginSession: defaultLogin } , action) => {\n\n    if (action.type === \'LOGIN\'){\n\n        return { loginSession: successLogin };\n\n    }\n    else if  (action.type === \'LOGOUT\'){\n\n        return { loginSession: defaultLogin };\n\n    }\n    return state;\n}\n\nexport default LoginReducer;\n')),(0,a.kt)("p",{parentName:"li"},"Combine all the reducers as root reducer with ",(0,a.kt)("strong",{parentName:"p"},"combineReducer")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/login/LoginReducer.js"',title:'"src/store/login/LoginReducer.js"'},"import { combineReducers } from 'redux'\nimport { LoginReducer } from './login'\n\nconst rootReducer = combineReducers({  \n    LoginReducer\n})\n\nexport default rootReducer;\n")),(0,a.kt)("p",{parentName:"li"},"and passed to redux store (This is done in step 1)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare the ",(0,a.kt)("strong",{parentName:"p"},"action creator")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/login/LoginAction.js"',title:'"src/store/login/LoginAction.js"'},"const LoginAction = ({ userId, password }) => { \n    return {\n    type: 'LOGIN',\n    payload: {                        \n        userId,\n        password\n    },\n    };\n}\n\nconst LogoutAction = () => { \n    return {\n    type: 'LOGOUT',\n    payload: {                        \n    },\n    };\n}\nexport { LoginAction, LogoutAction }\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use React Hook ",(0,a.kt)("strong",{parentName:"p"},"useSelector")," to ",(0,a.kt)("strong",{parentName:"p"},"select and get redux store state data")," in a component.Note we simply set the tree path ",(0,a.kt)("strong",{parentName:"p"},"state.LoginReducer.loginSession.userId")," in the hook, this way the hook will select that piece of data."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/login/LoginAction.js"',title:'"src/store/login/LoginAction.js"'},"import { useSelector } from 'react-redux'\n\nconst PortfolioScreen = () => {\n    const userId = useSelector(state => state.LoginReducer.loginSession.userId);\n    return (\n        <View style={styles.container}>\n\n        { userId === '' ? \n            <Text>Please Login</Text>\n        : \n            <Text>Hi {userId}, this is your portfolio.</Text>\n        }\n        </View>\n    );\n};\n\nexport default PortfolioScreen;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use React Hook ",(0,a.kt)("strong",{parentName:"p"},"setDispatch")," to ",(0,a.kt)("strong",{parentName:"p"},"dispatch the action to corresponding reducer")," triggered by a event of a component (such as press event in the example below).This way ",(0,a.kt)("strong",{parentName:"p"},"reducer will calculate the new state data"),", which will be ",(0,a.kt)("strong",{parentName:"p"},"(automatically without additional code) saved in redux store"),". And the ",(0,a.kt)("strong",{parentName:"p"},"component will (automatically without additional code) rerender itself for the new state"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/store/login/LoginScreen.js"',title:'"src/store/login/LoginScreen.js"'},'...\nimport { useDispatch } from "react-redux";\n...\n\nconst LoginScreen = () => {\n...\n    const userId = useSelector(state => state.LoginReducer.loginSession.userId);\n    const dispatch = useDispatch();\n\n    return (\n        <View style={styles.container}>\n\n        { userId === \'\' ? \n            <>\n            <Text>Login</Text>\n            <Button\n                onPress={() => dispatch(LoginAction(\'\',\'\'))}\n                title="Login"\n                color="#FF0000"\n            />\n            </>\n        : \n            <>\n            <Text>Logout</Text>\n            <Button\n                onPress={() => dispatch(LogoutAction())}\n                title="Logout"\n                color="#EEEEEE"\n            />\n            </>\n        }\n        </View>\n        \n    );\n};\n\nexport default LoginScreen;\n')))))}d.isMDXComponent=!0}}]);