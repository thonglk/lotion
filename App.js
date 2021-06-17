import * as React from 'react';
import { Dimensions , Platform, StyleSheet, Text, View ,StatusBar} from 'react-native';

import { AppLoading } from 'expo';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import AppNavigator from './AppNavigator';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import DraftbitTheme from './themes/DraftbitTheme.js';



export default class App extends React.PureComponent {
  state = {
    isReady: false,
    autoHideSplash:true
  };

  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <AppLoading
    //       startAsync={cacheAssetsAsync}
    //       onFinish={() => this.setState({ isReady: true })}
    //       onError={alert}
    //       autoHideSplash={this.state.autoHideSplash}
    //     />
    //   );
    // }

    return (
     
      <SafeAreaProvider>
       <StatusBar
          barStyle="dark-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#00BCD4"
          //Background color of statusBar
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <ThemeProvider  theme={DraftbitTheme}>
          <AppNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const marginLeft = windowWidth>600? (windowWidth-600)/2 : 0

// const styles = StyleSheet.create({
//   View_NavigationContainer:{
//     maxWidth:600,
//     marginLeft:marginLeft,
//  }
// })
