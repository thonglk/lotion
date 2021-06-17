import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Analytics from 'expo-firebase-analytics';

Analytics.logEvent('MobileOpen');



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



Notifications.addNotificationReceivedListener(notification => {
      // setNotification(notification);
      // alert(JSON.stringify(notification))
    });

Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });


async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice && Platform.OS !== 'web') {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    const nativeToken = (await Notifications.getDevicePushTokenAsync()).data
    const token = (await Notifications.getExpoPushTokenAsync()).data

    console.log('nativeToken',nativeToken);
    console.log('expoToken',token);

    await saveToken({nativeToken,expoToken:token,platform:Platform.OS})


  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const saveToken = async (tokenObject) => {
    console.log('saveToken',tokenObject)
     const userId = await AsyncStorage.getItem('userId');

    tokenObject.userId = userId
    const url = `https://fitlive.glitch.me/saveToken`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

   
    const body = JSON.stringify(tokenObject);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);

      console.log(result.msg);
      
    } catch (error) {

      alert(error);
    }
  };

export default {
  registerForPushNotificationsAsync
};
