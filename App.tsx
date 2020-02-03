/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar, TouchableOpacity,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Adverb, CarList} from "./view";
// ... screen imports

import('./config/reactotronConfig');
// import { createStackNavigator } from '@react-navigation/stack';
// type RootStackParamList = {
//   AdverbsList: undefined;
//   Adverb: undefined;
const RootStack = createStackNavigator({
  CarList: {
    screen: CarList,
  }, Adverb: {
    screen: Adverb,
  }
}, {
  initialRouteName: 'CarList'
});

const AppContainer = createAppContainer(RootStack);
// };

// const RootStack = createStackNavigator<RootStackParamList>();
// const HomeStack = createSwitchNavigator({
//   CarList: {
//       screen: CarList,
//       path: '/'
//   }, Adverb: {
//     screen: Adverb,
//     path: '/adverb'
//   }});

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
      {/*<SafeAreaView >*/}

      {/*  /!*<CarList />*!/*/}
      {/*  /!*<RootStack.Navigator initialRouteName="AdverbList">*!/*/}
      {/*  /!*  <RootStack.Screen name="AdverbsList" component={CarList} />*!/*/}
      {/*  /!*  <RootStack.Screen*!/*/}
      {/*  /!*      name="Adverb"*!/*/}
      {/*  /!*      component={Adverb}*!/*/}
      {/*  /!*  />*!/*/}
      {/*  /!*</RootStack.Navigator>*!/*/}
      {/*</SafeAreaView>*/}
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
