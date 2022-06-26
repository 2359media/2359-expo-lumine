import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from './src/components/Button';
import {
  Body1,
  Body2,
  Body3,
  Body4,
  FootNote,
  H1,
  H2,
  H3,
  H4,
  H5,
} from './src/components/Typography';
import {AppLoading} from './src/services/apploading';
import {loadFonts} from './src/services/style';

export default function App() {
  return (
    <AppLoading asyncs={[loadFonts]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Button style={styles.button} text="Primary" />
        <Button style={styles.button} text="Rounded" rounded />
        <Button style={styles.button} text="Disabled" disabled />
        <Button style={styles.button} text="Secondary" secondary />
        <Button style={styles.button} text="Disabled" secondary disabled />
        <Button style={styles.button} text="Link" link />
        <Button style={styles.button} text="Link Small" link small />
        <Button style={styles.button} text="Link Large" link large />
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <Body1>Body 1</Body1>
        <Body2>Body 2</Body2>
        <Body3>Body 3</Body3>
        <Body4>Body 4</Body4>
        <FootNote>Footnote</FootNote>
      </ScrollView>
    </AppLoading>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 24,
  },
  button: {
    marginBottom: 24,
  },
});
