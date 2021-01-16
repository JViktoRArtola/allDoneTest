/**
 * Sample allDone Test
 * https://alldonetest.herokuapp.com/
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Body />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
