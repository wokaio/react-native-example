import 'react-native-gesture-handler'; // ! Make sure it's at the top and there's nothing else before it
import React, { useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from '@/navigation/RootNavigation';
import AppLoading from '@/components/AppLoading';
import { cacheFonts, cacheImages } from '@/helpers/AssetsCaching';
import { cacheFontList, cacheImageList } from '@/config/assetsCache';
import { RNETheme } from '@/config/theme';
import store from '@/store/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const startupAsync = async () => {
    const imageAssets = cacheImages(cacheImageList);
    const fontAssets = cacheFonts(cacheFontList);
    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if(!isReady) {
    return (
      <AppLoading 
        startAsync={ startupAsync }
        onFinish={ () => setIsReady(true) }
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={ store }>
      <ThemeProvider theme={ RNETheme }>
        <StatusBar barStyle="light-content" />
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
