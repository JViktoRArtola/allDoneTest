import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {navsItems} from '../data';
import Accordion from './Accordion';

export default function Header() {
  const [width, setWidth] = useState(null);
  return (
    <View
      style={styles.header}
      onLayout={(layout) => setWidth(layout.nativeEvent.layout.width)}>
      {Platform.OS === 'android' || (width && width < 500) ? (
        <Accordion data={navsItems} />
      ) : (
        <View style={styles.navBar}>
          {navsItems.map((item, index) => (
            <TouchableOpacity style={styles.navItem} key={index}>
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#0a44a5',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    paddingVertical: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  navItem: {
    fontSize: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
