# Application Name

## Guide for bare app

Cách làm dưới vẫn có vấn đề là tên của app trên ios dù sửa tên có space nhưng khi build thì lại không có space

---

Doc: https://stackoverflow.com/a/62448556/6522759 

First of all: Open `app.json` file in your react-native project directory. And, just replace displayName json property's value in this file. e.g.:

{
  "name": "SomethingSomething",
  "displayName": "Fado Global Sample"
}

For Android app: Open strings.xml file, replace the <string name="app_name"> tag's value to your new app name. e.g.:

```xml
<string name="app_name">Fado Global Sample</string>
```

For iOS: Open info.plist, replace the value after <key>CFBundleDisplayName</key> to your app name. e.g.:

```xml
<key>CFBundleDisplayName</key>
<string>Fado Global Sample</string>
```

Uninstall your previous app installed on your device. Use npm install in project main directory, in ios folder directory run pod install commands. Now, simply install app in your device.