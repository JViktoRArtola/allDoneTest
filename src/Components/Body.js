import React, {useState} from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import Current from './Current';

function Body() {
  const [width, setWidth] = useState(501);
  const os = {
    paddingHorizontal: Platform.OS === 'android' ? 30 : width < 500 ? 20 : 80,
  };
  return (
    <View
      style={[styles.sectionContainer, os]}
      onLayout={(layout) => {
        setWidth(layout.nativeEvent.layout.width);
      }}>
      <Current />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 30,
  },
});

export default Body;
