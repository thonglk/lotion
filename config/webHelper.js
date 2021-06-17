import firebase from "firebase/app";
import "firebase/messaging";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

import * as Analytics from 'expo-firebase-analytics';

function getBrowser() { 
     if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        return('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        return('Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        return('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         return('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      return('IE'); 
    }  
    else 
    {
       return('unknown');
    }
}
function getDevice(){
  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
return isMobile.any()[0]
}


 var firebaseConfig = {
    apiKey: "AIzaSyBdxLQp5bspKC4g-VXYKXayeWGSnWbnhFY",
    authDomain: "get-fitlive.firebaseapp.com",
    databaseURL: "https://get-fitlive.firebaseio.com",
    projectId: "get-fitlive",
    storageBucket: "get-fitlive.appspot.com",
    messagingSenderId: "307800118128",
    appId: "1:307800118128:web:f71b0decd1a93fec1e75b5",
    measurementId: "G-R4P9BPMJY1"
  };

firebase.initializeApp(firebaseConfig);
Analytics.logEvent('AppOpen');

var browser = getBrowser()
console.log(browser)

const initNoti = ()=>{
  if(browser !== 'Safari' && browser !== 'unknown'){
  const messaging = firebase.messaging();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../firebase-messaging-sw.js")
      .then(function(ServiceWorkerRegistration) {
        console.log("Service Worker Registering");
         messaging
              .getToken({
                vapidKey:
                  "BG_vA6aelhwPdYbUfsSzzFYklKEvnIfDalUBEYuRqHiEHdXfqqnsk-EYw9ZfmMwyL1LgjtpfBzcUEZl9uA8PYgc"
              ,ServiceWorkerRegistration})
              .then(currentToken => {
                console.log("currentToken", currentToken);
                if (currentToken) {
                  saveToken({firebaseToken: currentToken,browser,platform:Platform.OS})
                  
                } else {
                  // Show permission request UI
                  console.log(
                    "No registration token available. Request permission to generate one."
                  );
                  // ...
                }
              })
              .catch(err => {
                console.log("An error occurred while retrieving token. ", err);
                // ...
              });
      }).catch(err => {
            console.log("An error occurred while serviceWorker register ", err);
          });;
}

}
 
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
console.log('saveToken successfully!');
      
    } catch (error) {

      alert(error);
    }
  };


export default {
  initNoti,getDevice,getBrowser,Device
};


