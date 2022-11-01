---
sidebar_position: 2
---

# Lesson 2: Redux

```console
npm install @reduxjs/toolkit
```

### Concept
Redux is based on [Flux architecture](https://facebook.github.io/flux/docs/in-depth-overview/) and act as state management **store** for React.

> <img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" width="350"/>
>
> From [Redux Concepts and Data Flow in Redux official site](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

5 things, event, dispatcher, action, reducer, state
- UI triggers event
- Event dispatches action
- Action triggers reducer
- Reducer updates state
- State change will automatically rerender UI


### Step by Step Guide 

#### 1. Define reducer and state for a slice

You may treat slice as a package of related functions

```js title='src/store/locale/index.js'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: 'en'}
const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.id = action.payload
    }
  },
})

export { localeSlice }
```

#### 2. Aggregate slices in Redux store

```js title='src/store/index.js'
import { configureStore } from '@reduxjs/toolkit'
import { localeSlice } from './locale'

const store = configureStore({
  reducer: {
    locale: localeSlice.reducer,
  },
  devTools: false,
  enhancers: null,
})

export { store };

```

#### 3. Trigger event, dispatch action

```jsx title="src/screen/settings/SettingScreen.js"

{/* highlight-start */}  
import { useDispatch } from "react-redux"
import { localeSlice } from '../../store/locale'
{/* highlight-end */}  

const SettingScreen = () => {
    
    {/* highlight-start */}  
    const dispatch = useDispatch();
    {/* highlight-end */}  

     return (
        <View>
            {/* highlight-start */}   
            <TouchableOpacity activeOpacity={0.6} onPress={() => dispatch(localeSlice.actions.setLocale("zh-Hant-HK"))} style={{ margin: 0, alignItems: 'flex-start'}}>
            {/* highlight-end */}       
                <View style={[styles.switchOff, styles.first]}>
                    <Text style={styles.switchOffText}>繁體中文</Text>
                </View>
            </TouchableOpacity>
        </View>
     )
};

export default SettingScreen;

```

#### 4. Detect state change and rerender UI

```jsx title='src/screens/index.js'
...
{/* highlight-start */} 
import { useSelector } from "react-redux";
{/* highlight-end */}

const RootScreen = () => {
  {/* highlight-start */}  
  const myLocale = useSelector(state => state.locale);   
  {/* highlight-end */}
  return (
        <ErrorBoundary>
          {/* highlight-start */}  
          <IntlProvider locale={myLocale.id} defaultLocale='en' messages={i18nFormattedMessages[myLocale.id]}>    
          {/* highlight-end */}
            <SafeAreaView style={{flex:1}}>
             <StatusBar backgroundColor="#ED0013" />
             <NavigationContainer>
              <RootStackScreen/>       
             </NavigationContainer>
            </SafeAreaView>
          </IntlProvider>
        </ErrorBoundary>

  );
};

```

### Redux Toolkit as the savior

Before the emergence of [Redux Toolkit](https://redux-toolkit.js.org/), integrating Redux with React is a messy, cumbersome, troublesome, error-prone and logic-scattered-everywhere task. I have experienced at least 3 different versions of setting up Redux. You may also see the deprecated sections in the next chapter. It reminds me of bad old days one can curse day and night!

At the abyss of despair comes the savior [Redux Toolkit](https://redux-toolkit.js.org/). Let's see how the official Redux site comments about it.

> Redux Toolkit contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.Because of this, Redux Toolkit is the standard way to write Redux application logic. The "hand-written" Redux logic you've written so far in this tutorial is actual working code, but you shouldn't write Redux logic by hand - we've covered those approaches in this tutorial so that you understand how Redux works. However, for real applications, you should use Redux Toolkit to write your Redux logic.
>  
> ***[Recommended by Redux](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)***

What does it mean? It means "We confess the old way of setting up redux in react is a nightmare and disaster, so please use redux toolkit, they are way far better".

### Reference

- [Redux offical site](https://redux.js.org/)
- [Redux Toolkit offical site](https://redux-toolkit.js.org/)
- [Using Redux with React Hooks](https://thoughtbot.com/blog/using-redux-with-react-hooks)
- [Basic Concepts behind Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Why use redux and not React Context ](https://stackoverflow.com/questions/49568073/react-context-vs-react-redux-when-should-i-use-each-one)