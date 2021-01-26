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
import TaskState from './context/tasks/taskState';

// disable react-dev-tools for this project
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
  for (let [key, value] of Object.entries(
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__,
  )) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
      typeof value === 'function' ? () => {} : null;
  }
}

const App: () => React$Node = () => {
  return (
    <TaskState>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Header />
          <Body />
        </ScrollView>
      </SafeAreaView>
    </TaskState>
  );
};

export default App;
