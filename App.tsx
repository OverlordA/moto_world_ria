/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootStack from "./navigator";

import('./config/reactotronConfig');

const AppContainer = createAppContainer(RootStack);

const App: React.FC = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer
          style={{
            borderWidth: 1,
            borderColor: '#ff0008'
          }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
