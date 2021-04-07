import { I18nLoader } from '@/helpers/I18nLoader';
import { ColorPalette } from '@/config/theme';
import { SCREEN_NAME } from '@/navigation/screen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FavoriteTabView from './FavoriteTabScreen';
import HistoryTabView from './HistoryTabScreen';
import HomeTabView from './HomeTabScreen';
import MenuTabView from './MenuTabScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      lazy={ true }
      tabBarPosition="bottom"
      swipeEnabled={ false }      
      tabBarOptions={{
        showIcon: true,
        inactiveTintColor: ColorPalette.info.default,
        activeTintColor: ColorPalette.primary.dark,
        tabStyle: {
          borderTopColor: ColorPalette.info.light,
          borderTopWidth: 1,
          height: 60,
          marginBottom: insets.bottom,
        },        
        labelStyle: {
          marginTop: 0,
          fontSize: 12,
          textTransform: 'none',
        },
        indicatorStyle: {
          backgroundColor: ColorPalette.primary.dark,
          top: 0,
          height: 2,
        },
      }}
    >
      <Tab.Screen 
        name={ SCREEN_NAME.HOME_TAB } 
        component={ HomeTabView } 
        options={{
          tabBarLabel: I18nLoader('screens.home.homeTabTitle'),
          tabBarIcon: ({ color }) => (
            <Icon 
              type="material"
              name="storefront"
              size={ 22 }
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen 
        name={ SCREEN_NAME.HOME_HISTORY_TAB } 
        component={ HistoryTabView } 
        options={{
          tabBarLabel: I18nLoader('screens.home.historyTabTitle'),
          tabBarIcon: ({ color }) => (
            <Icon 
              type="material"
              name="history"
              size={ 22 }
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen 
        name={ SCREEN_NAME.HOME_FAVORITE_TAB } 
        component={ FavoriteTabView } 
        options={{
          tabBarLabel: I18nLoader('screens.home.favoriteTabTitle'),
          tabBarIcon: ({ color }) => (
            <Icon 
              type="material"
              name="favorite"
              size={ 22 }
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen 
        name={ SCREEN_NAME.HOME_MENU_TAB } 
        component={ MenuTabView } 
        options={{
          tabBarLabel: I18nLoader('screens.home.menuTabTitle'),
          tabBarIcon: ({ color }) => (
            <Icon 
              type="material"
              name="menu"
              size={ 22 }
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
