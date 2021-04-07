import { ColorPalette } from '@/config/theme';
import CartScreen from '@/screens/cart/CartScreen';
import HomeView from '@/screens/home/HomeScreen';
import LoginView from '@/screens/login/LoginScreen';
import AddLinkScreen from '@/screens/product/AddLinkScreen';
import RegisterView from '@/screens/register/RegisterScreen';
import WebViewScreen from '@/screens/web/WebViewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { SCREEN_NAME } from './screen';
import Header from '@/components/Header';
import LanguageSetupScreen from '@/screens/language/LanguageSetupScreen';
import TestScreen from '@/screens/test/TestScreen';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainNavigator = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={{
        headerTitleAlign: 'left',
        headerBackTitleVisible: false,
        headerTintColor: ColorPalette.white,
        headerStyle: {
          height: insets.top + 50,
          backgroundColor: ColorPalette.primary.dark,
        },
        headerTitle: () => <Header />,
      }}
    >
      <MainStack.Screen 
        name={ SCREEN_NAME.HOME } 
        component={HomeView} 
        options={{
          headerLeft: false,
          headerRight: false,
        }}
      />

      <MainStack.Screen 
        name={ SCREEN_NAME.CART } 
        component={CartScreen} 
      />

      <MainStack.Screen 
        name={ SCREEN_NAME.LOGIN } 
        component={LoginView} 
      />

      <MainStack.Screen 
        name={ SCREEN_NAME.REGISTER } 
        component={RegisterView}
      />
    </MainStack.Navigator>
  );
};

const RootNavigation = () => {
  const [isLanguageSetup, setIsLanguageSetup] = useState(true);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={ SCREEN_NAME.MAIN }
        mode="modal"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          }
        }}
      >
        { !isLanguageSetup && 
          <RootStack.Screen
            name={ SCREEN_NAME.LANGUAGE_SETUP }
            component={ LanguageSetupScreen }
          />
        }

        { isLanguageSetup && 
          <>
            <RootStack.Screen 
              name={ SCREEN_NAME.MAIN }
              component={MainNavigator}
            />

            <RootStack.Screen 
              name={ SCREEN_NAME.ADD_LINK } 
              component={AddLinkScreen}
            />

            <RootStack.Screen 
              name={ SCREEN_NAME.WEB_VIEW } 
              component={WebViewScreen} 
            />

            <RootStack.Screen 
              name={ SCREEN_NAME.TEST } 
              component={TestScreen} 
            />
          </>
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;