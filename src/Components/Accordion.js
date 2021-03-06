import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Accordion({data}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>{!expanded ? 'MENU' : 'X'}</Text>
      </TouchableOpacity>
      {expanded &&
        data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.child}>
            <Text style={styles.textChild}>{item}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 40,
    paddingHorizontal: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#007fff',
    borderRadius: 4,
  },
  child: {
    backgroundColor: 'rgba(0,127,255,0.48)',
    padding: 7,
    marginVertical: 2,
    borderRadius: 6,
    alignItems: 'center',
  },
  textChild: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
