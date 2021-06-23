import React from 'react';
import * as CustomCode from '../components.js';
import {
  Button,
  Container,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CreateSiteScreen = props => {
  const { theme } = props;

  const gotolink = () => {
    window.location.href = `${siteName}.lotion.one`;
  };

  const create = async () => {
    const url = `https://fitlivesv.liti.me/crawl?url=${notionUrl}&page=${siteName}&json=true`;

    if (loader) return console.log(loader);
    setLoader('Loading...');
    try {
      const response = await fetch(url);
      const result = await response.json();
      const response_mobile = await fetch(url + '&mobile=true');
      const result2 = await response_mobile.json();

      if (result.error) throw new Error(result.error);
      setLoader(undefined);

      setNotif(`Success! Your site at ${siteName}.lotion.one`);
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  const [notionUrl, setNotionUrl] = React.useState('');
  const [siteName, setSiteName] = React.useState('');
  const [loader, setLoader] = React.useState('');
  const [notif, setNotif] = React.useState('');

  const onPress0xoah5JP = async () => {
    await WebBrowser.openBrowserAsync('https://template.lotion.one');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerlp}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewWs}
        enabled={true}
        behavior="padding"
        keyboardVerticalOffset={60}
      >
        <Container elevation={0} useThemeGutterPadding={true}>
          <Text style={[styles.Textzz, { color: theme.colors.strong }]}>
            {'Create website from Notion'}
          </Text>

          <View style={styles.ViewZc} pointerEvents="auto">
            <Touchable
              onPress={async () => {
                try {
                  await onPress0xoah5JP();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text style={{ color: theme.colors.primary }}>
                {'Duplicate a template from here ↗'}
              </Text>
            </Touchable>

            <Text style={{ color: theme.colors.strong }}>
              {'to your Notion workspace.'}
            </Text>
          </View>
          <TextField
            style={styles.TextField_5O}
            placeholder=""
            type="solid"
            value={notionUrl}
            onChangeText={notionUrl => setNotionUrl(notionUrl)}
            label="Notion link"
          />
          <View
            style={[
              styles.ViewdE,
              {
                borderRadius: 6,
                borderColor: theme.colors.divider,
                backgroundColor: theme.colors.background,
              },
            ]}
            pointerEvents="auto"
          >
            <TextInput
              style={[
                styles.TextInputsU,
                { borderColor: theme.colors.divider },
              ]}
              placeholder="site-name"
              value={siteName}
              onChangeText={siteName => setSiteName(siteName)}
            />
            <Text style={{ color: theme.colors.strong }}>{'.lotion.one'}</Text>
          </View>
        </Container>

        <Container
          style={styles.ContainerlH}
          elevation={0}
          useThemeGutterPadding={true}
        >
          <>
            {loader ? null : (
              <Button
                onPress={async () => {
                  try {
                    await create();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.ButtonVZ}
                type="solid"
                color={theme.colors.null}
              >
                {'Create site'}
              </Button>
            )}
          </>
          <>
            {!loader ? null : (
              <ActivityIndicator
                style={styles.ActivityIndicatorEQ}
                size="small"
                animating={true}
                hidesWhenStopped={true}
              />
            )}
          </>
          <>
            {!notif ? null : (
              <Text style={[styles.TextJU, { color: theme.colors.medium }]}>
                {'Your site is ready at '}
              </Text>
            )}
          </>
          <>
            {!notif ? null : (
              <Touchable
                onPress={() => {
                  try {
                    gotolink();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text style={[styles.TextDm, { color: theme.colors.primary }]}>
                  {siteName}
                  {'.lotion.one'}
                </Text>
              </Touchable>
            )}
          </>
        </Container>
        <TextInput
          style={[styles.TextInputox, { borderColor: theme.colors.divider }]}
          placeholder=""
          value={loader}
          onChangeText={loader => setLoader(loader)}
        />
        <TextInput
          style={[styles.TextInput_6X, { borderColor: theme.colors.divider }]}
          placeholder=""
          value={notif}
          onChangeText={notif => setNotif(notif)}
        />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textzz: {
    textAlign: 'center',
    fontFamily: 'NunitoExtraBold',
    fontSize: 20,
  },
  ViewZc: {
    minHeight: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  TextField_5O: {
    marginTop: 20,
    marginBottom: 20,
  },
  TextInputsU: {
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  ViewdE: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  ButtonVZ: {
    width: 200,
  },
  ActivityIndicatorEQ: {
    width: 36,
    height: 36,
  },
  TextJU: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingTop: 40,
  },
  TextDm: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  ContainerlH: {
    alignItems: 'center',
  },
  TextInputox: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    opacity: 0,
  },
  TextInput_6X: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    opacity: 0,
  },
  KeyboardAvoidingViewWs: {
    justifyContent: 'space-around',
    flexGrow: 1,
    width: '100%',
    maxWidth: 600,
  },
  ScreenContainerlp: {
    alignItems: 'center',
  },
});

export default withTheme(CreateSiteScreen);