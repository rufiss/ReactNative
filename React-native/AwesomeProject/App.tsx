/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { CrossPki, DigestAlgorithm } from 'react-native-cross-pki';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const base64 = "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";

const CertificateStart = async () =>{
  
  console.log("começo");
  await CrossPki.importPkcs12(base64,"1234"); 
  console.log("fim");
  var certificate = await CrossPki.listCertificatesWithKey();
  console.log(certificate);
}

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            <Button title="oi" onPress={CertificateStart}></Button>
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
