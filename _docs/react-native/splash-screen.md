# Splash screen

## With expo

Add config to `app.json` 

```json
{
  "name": "Fado Global App Sample",
  "displayName": "Fado Global App Sample",
  "expo": {
    "name": "Fado Global App Sample",
    "slug": "fadoGlobalAppSample",
    "version": "1.0.0",
    "splash": { // Config expo here
      "image": "./src/assets/images/splash-screen.png",
      "backgroundColor": "#b62c2c",
      "resizeMode": "cover"
    },
    "assetBundlePatterns": [
      "**/*"
    ]
  }
}
```

## With bare app

Docs: https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-installation-in-bare-react-native-projects

Example:
```sh
yarn expo-splash-screen -p all -i ./src/assets/images/splash-screen.png -r cover -b "#b62c2c" --status-bar-style light-content
```