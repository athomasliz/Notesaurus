---
sidebar_position: 5
---
# React i18n

```console
npm install react-intl
npm install intl
```

Internationalize your web apps on the client & server.

## Step by Step Guide

### 1. Import library

```jsx title="App.js"
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import 'intl/locale-data/jsonp/zh-Hans-CN'; // or any other locale you need
import 'intl/locale-data/jsonp/zh-Hant-HK'; // or any other locale you need
import { en, cn, hk } from './src/i18n';
import { IntlProvider } from 'react-intl';
```

### 2. Prepare Message Resource Files

```jsx title="src/i18n/cn.js"
const cn = { 
    'tab.account': '账户',
    'tab.login': '登入',
    'tab.portfolio': '投资组合'
};
export default cn;
```

```jsx title="src/i18n/en.js"
const en = { 
    'tab.account': 'Account',
    'tab.login': 'Login',
    'tab.portfolio': 'Portfolio'
};
export default en;
```

```jsx title="src/i18n/hk.js"
const hk = { 
    'tab.account': '賬戶',
    'tab.login': '登入',
    'tab.portfolio': '投資組合'
};
export default hk;
```

### 3. Wrap App Component with IntlProvider component. Specify locale and message resource

```jsx title="App.js"
const App = () => {

  const i18nFormattedMessages={
    'en': en,
    'zh-Hans-CN': cn,
    'zh-Hant-HK': hk
  };
  const [ myLocale, useMyLocale ]= useState('zh-Hant-HK');
    
  return (
    ...
      <IntlProvider locale={myLocale} defaultLocale='en' messages={i18nFormattedMessages[myLocale]}>
       ...
      </IntlProvider>
    ...
  );
};
```

### 4a. Usage 1: use &lt;FormattedMessage&gt;

```jsx
<FormattedMessage
  id="app.greeting"
  description="Greeting to welcome the user to the app"
  defaultMessage="Hello, {name}!"
  values={{
    name: 'Eric',
  }}
/>
```

### 4b. Usage 2: React Hook useIntl

```jsx title="src/screens/index.js"
import { useIntl } from 'react-intl'
const EmoTabScreen = () => {
  const intl = useIntl();
  return (
      ...
          <Tab.Screen 
              name="Portfolio" 
              component={PortfolioScreen}
              options={{
                  tabBarLabel: intl.formatMessage({ id: 'tab.portfolio'}),
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="piechart" color={color} size={size} />
                  ),
                }}
          />
       ...
  );
};							
```

## Reference
- [Official Site](https://formatjs.io/)

## Issues
- Placeholder cannot use FormattedMessage
- Using React Hook intl.formatMessage(messages.title)
- [react-navigation/react-navigation#712](https://github.com/react-navigation/react-navigation/issues/712)
- [How to use &lt;FormattedMessage&gt; as placeholder using React Intl?](https://iq.js.org/questions/react/how-to-use-formattedmessage-as-placeholder-using-react-intl)