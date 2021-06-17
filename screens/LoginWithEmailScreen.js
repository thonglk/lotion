import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';

import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoginWithEmailScreen = props => {
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
  const [loader, setLoader] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus');
      checkLogin();
    });
    return unsubscribe;
  });
  const checkLogin = async () => {
    try {
      const authString = await AsyncStorage.getItem('auth');
      console.log('authString ', authString);
      if (authString != 'null') {
        const auth = JSON.parse(authString);
        if (auth && auth.email && auth.password) {
          setLoader('Loading...');
          setEmail(auth.email);
          setPassword(auth.password);
          const response = await fetch(
            'https://fitlive.glitch.me/auth?email=' +
              auth.email +
              '&password=' +
              auth.password
          );
          const result = await response.json();
          if (result.error) throw new Error(result.error);
          await AsyncStorage.setItem('userId', result.userId);

          setLoader(undefined);

          navigation.navigate('HomepageAdminScreen', { userId: result.userId });
        }
      }
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  const Login = async () => {
    try {
      if (loader) return console.log(loader);
      setLoader('Loading...');
      const response = await fetch(
        'https://fitlive.glitch.me/auth?password=' +
          password +
          '&email=' +
          email
      );

      const result = await response.json();
      if (result.error) throw new Error(result.error);

      await AsyncStorage.setItem('auth', JSON.stringify({ email, password }));
      await AsyncStorage.setItem('userId', result.userId);

      setLoader(undefined);

      navigation.navigate('HomepageAdminScreen', { userId: result.userId });
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  const onPressmwNmwEaV = item => {
    const data = item;
    navigation.navigate('CreateAccountScreen', {});
  };

  const onPresstCasdVNE = item => {
    const data = item;
    navigation.navigate('HomepageScreen', { userId: email });
  };
  const onPressCc6mXqXE = item => {
    const data = item;
    navigation.navigate('HomepageAdminScreen', { userId: email });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContaineryd}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_2b}
        behavior="height"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.ViewNF}>
          <Text
            style={StyleSheet.flatten([
              styles.TextPj,
              theme.typography.headline2,
              { color: theme.colors.strong },
            ])}
          >
            Fitlive
          </Text>
        </View>

        <View
          style={styles.View_1X}
          pointerEvents={[{ label: '', value: '' }]}
          clickable=""
        >
          <TextInput
            style={StyleSheet.flatten([
              styles.TextInputiT,
              {
                color: theme.colors.strong,
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius.global,
                backgroundColor: theme.colors.background,
              },
            ])}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={false}
            placeholder="Email"
            spellcheck={true}
            onChangeText={email => setEmail(email)}
            value={email}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            secureTextEntry={false}
            returnKeyType="next"
            textContentType="emailaddress"
            autoFocus={true}
            keyboardType="email-address"
          />
          <TextInput
            style={StyleSheet.flatten([
              styles.TextInputgw,
              {
                color: theme.colors.strong,
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius.global,
                backgroundColor: theme.colors.background,
              },
            ])}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={false}
            placeholder={lang('Password')}
            spellcheck={true}
            onChangeText={password => setPassword(password)}
            value={password}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
          />
          <Button
            onPress={Login}
            style={StyleSheet.flatten([
              styles.ButtonEL,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            {loader || lang('LogIn')}
          </Button>
        </View>

        <View style={styles.ViewiT}>
          <Text
            style={StyleSheet.flatten([
              theme.typography.subtitle2,
              { color: theme.colors.medium },
            ])}
          >
            {lang('DontHaveAccount')}
          </Text>

          <Button
            onPress={onPressmwNmwEaV}
            style={StyleSheet.flatten([
              styles.ButtonoM,
              { borderColor: theme.colors.custom_rgba0_0_0_0 },
            ])}
            type="outline"
            color={theme.colors.primary}
          >
            {lang('CreateAccount')}
          </Button>

          <Button
            onPress={onPresstCasdVNE}
            style={StyleSheet.flatten([
              styles.Buttonen,
              { borderColor: theme.colors.custom_rgba0_0_0_0 },
            ])}
            type="outline"
            color={theme.colors.primary}
          >
            Sign Up
          </Button>

          <Button
            onPress={onPressCc6mXqXE}
            style={StyleSheet.flatten([
              styles.Buttonwh,
              { borderColor: theme.colors.custom_rgba0_0_0_0 },
            ])}
            type="outline"
            color={theme.colors.primary}
          >
            Sign Up
          </Button>
        </View>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputho}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={loader}
        onChangeText={loader => setLoader(loader)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextInputiT: {
    marginTop: 12,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 14,
    paddingLeft: 14,
    height: 54,
  },
  KeyboardAvoidingView_2b: {
    justifyContent: 'space-around',
    flexGrow: 1,
    maxWidth: 600,
    width: '100%',
  },
  ScreenContaineryd: {
    alignItems: 'center',
  },
  TextPj: {
    textAlign: 'center',
  },
  ViewNF: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  View_1X: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 24,
  },
  ButtonoM: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignSelf: 'center',
    alignContent: 'center',
    borderBottomWidth: 0,
    opacity: 1,
  },
  TextInputho: {
    opacity: 0,
  },
  TextInputgw: {
    marginBottom: 12,
    marginTop: 12,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 14,
    paddingLeft: 14,
    height: 54,
  },
  ButtonEL: {
    justifyContent: 'center',
    height: 54,
    marginTop: 12,
    alignItems: 'center',
  },
  Buttonen: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignSelf: 'center',
    alignContent: 'center',
    borderBottomWidth: 0,
    opacity: 0,
  },
  ViewiT: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
  },
  Buttonwh: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignSelf: 'center',
    alignContent: 'center',
    borderBottomWidth: 0,
    opacity: 0,
  },
});

export default withTheme(LoginWithEmailScreen);