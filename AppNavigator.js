import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import {lang} from './config/config';


import CreateWebScreen from './screens/CreateWebScreen';
import LoginWithEmailScreen from './screens/LoginWithEmailScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
      const config = {
};

const linking = {
  prefixes: ['https://web.fitlive.fit', 'http://localhost:19006'],
  config,
};

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CreateWebScreen"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
       
        <Stack.Screen
          name="CreateWebScreen"
          component={CreateWebScreen}
          options={{ title: 'Lotion' }}
        />
        <Stack.Screen
          name="LoginWithEmailScreen"
          component={LoginWithEmailScreen}
          options={{ title: 'Login' }}
        />
       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
