import React from 'react';
import * as CustomCode from '../components.js';
import {
  Button,
  Container,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const CreateSiteScreen = props => {
  const { theme } = props;

  const create = async () => {
    const url = `http://liti.ap-southeast-1.elasticbeanstalk.com/crawl?url=${notionUrl}&page=${siteName}&json=true`;

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
          <Text
            style={[
              theme.typography.headline4,
              styles.Textzz,
              { color: theme.colors.strong },
            ]}
          >
            {'Create website from Notion'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextPZ,
              { color: theme.colors.strong },
            ]}
          >
            {
              'Custom domains, themes, automatic sync, and more—no code required.\n'
            }
          </Text>
          <TextField
            style={styles.TextField_5O}
            placeholder=""
            type="solid"
            value={notionUrl}
            onChangeText={notionUrl => setNotionUrl(notionUrl)}
            label="Notion link"
          />
          <TextField
            placeholder=""
            type="solid"
            value={siteName}
            onChangeText={siteName => setSiteName(siteName)}
            label="Site Name"
          />
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
                {'Create'}
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
              <Text style={[styles.TextJU, { color: theme.colors.primary }]}>
                {'Your site is ready at '}
                {siteName}
                {'.lotion.one'}
              </Text>
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
  },
  TextPZ: {
    marginTop: 20,
    textAlign: 'center',
  },
  TextField_5O: {
    marginTop: 20,
    marginBottom: 20,
  },
  ButtonVZ: {
    width: 200,
  },
  ActivityIndicatorEQ: {
    width: 36,
    height: 36,
  },
  TextJU: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingTop: 40,
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