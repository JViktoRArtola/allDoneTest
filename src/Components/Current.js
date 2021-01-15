import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Current() {
  return (
    <>
      <Text style={styles.sectionTitle}>Tasks</Text>
      <View style={styles.sectionSubTitle}>
        <Text style={styles.text}>
          <Text style={styles.icon}>● </Text>
          Private ▪ <Text style={styles.icon}>Ⓜ </Text>
          Snake
        </Text>
      </View>
      <Text style={styles.status}>TODAY • SUNDAY • 2 POINTS</Text>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionSubTitle: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
  icon: {
    color: '#e17055',
  },
  status: {
    fontSize: 11,
    color: '#6d6d6d',
    letterSpacing: 2,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 15,
  },
});

export default Current;
