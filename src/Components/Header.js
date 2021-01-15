import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {navsItems} from '../data';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.navBar}>
        {navsItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.navItem}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
