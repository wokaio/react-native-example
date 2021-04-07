# Expo

## Bare workflow

https://docs.expo.io/introduction/managed-vs-bare/#bare-workflow

### Use package from expo

For bare React Native projects, you must ensure that you have installed and configured the `react-native-unimodules` package before continuing.

https://docs.expo.io/bare/installing-unimodules/

`react-native-unimodules`: This library contains infrastructure and a small set of foundational libraries and interfaces that are commonly depended on by other modules. You can install react-native-unimodules in any react-native app, and once it is installed you can use most of the libraries from the Expo SDK, like expo-camera, expo-media-library and many more.

```
npm install react-native-unimodules
npx pod-install
```

Example: setup `expo-device` package

```
# Setup unimodules
npm install react-native-unimodules
npx pod-install
# Install package
expo install expo-device
```
