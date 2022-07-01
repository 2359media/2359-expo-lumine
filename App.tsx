import React from 'react';
import {AppProvider} from './src';
import {StorybookApp} from './src/storybook';

export default function App() {
  return (
    <AppProvider>
      <StorybookApp />
    </AppProvider>
  );
}
