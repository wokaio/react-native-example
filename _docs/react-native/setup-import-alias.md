# Setup import alias

- Install `babel-plugin-module-resolver` 

- Edit `babel.config.js` 

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Setup for alias folder
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  };
};
```

- Setup `jsconfig.json`

```json
{
  "compilerOptions": {
    "module": "es6",
    "target": "es6",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "strict": true,
    "jsx": "react-native", // Chỗ này quan trọng
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src", "."], // Cần có `"."` để file `App.js` ở root folder vẫn có thể 
  "exclude": ["node_modules"]
}
```
