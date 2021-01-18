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
