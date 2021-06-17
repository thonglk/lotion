import React from 'react';
import {
  Button,
  Container,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import {
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

      alert(`Success! Your site at ${siteName}.lotion.one`);
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  const [notionUrl, setNotionUrl] = React.useState('');
  const [siteName, setSiteName] = React.useState('');
  const [loader, setLoader] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
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

        <Container elevation={0} useThemeGutterPadding={true}>
          <Button
            onPress={async () => {
              try {
                await create();
              } catch (err) {
                console.error(err);
              }
            }}
            type="solid"
            color={theme.colors.null}
          >
            {'Create'}
          </Button>
        </Container>
        <TextInput
          style={[styles.TextInputox, { borderColor: theme.colors.divider }]}
          placeholder="Change my fieldname to email or password on the right side"
          value={loader}
          onChangeText={loader => setLoader(loader)}
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
  },
  KeyboardAvoidingViewWs: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
});

export default withTheme(CreateSiteScreen);