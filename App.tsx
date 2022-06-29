import React from 'react';
import {ScrollView} from 'react-native';
import {
  Button,
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
  AppProvider,
  colors,
  createStyles,
} from './src';

async function waitFor5Seconds(ut: (t: string) => void) {
  await new Promise(r => {
    ut('Wait for 5 seconds');
    setTimeout(r, 5000);
  });
}

export default function App() {
  return (
    <AppProvider asyncs={[waitFor5Seconds]}>
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
    </AppProvider>
  );
}

const styles = createStyles({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 24,
    paddingTop: 56,
  },
  button: {
    marginBottom: 24,
  },
});
