import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ButtonPanel({width}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>⇗</Text>
        {width > 1070 && <Text style={styles.textButtons}>Open</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>📆</Text>
        {width > 1070 && <Text style={styles.textButtons}>01.01.21</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>💭</Text>
        {width > 1070 && <Text style={styles.textButtons}>Comment</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>☀</Text>
        {width > 1070 && <Text style={styles.textButtons}>Normal</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.textButtons}>🛑</Text>
        {width > 1070 && <Text style={styles.textButtons}>Estimation</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    borderColor: '#8e97a9',
    borderWidth: 1,
    alignSelf: 'center',
    padding: 6,
    borderRadius: 6,
    marginRight: 10,
  },
  textButtons: {
    color: '#8b95a6',
    fontWeight: '600',
    marginRight: 2,
  },
});

export default ButtonPanel;
