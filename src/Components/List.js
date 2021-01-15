import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  View,
  Platform,
} from 'react-native';
import {validEmail, validURL} from '../js/validations';
import Update from './Update';

export default function List({list, setList, item}) {
  const [flag, setFlag] = useState(false);
  const observer = (value) => {
    if (value.startsWith('#')) {
      return styles.hashtag;
    } else if (value.startsWith('@')) {
      return styles.dat;
    } else if (validEmail(value)) {
      return styles.email;
    } else if (validURL(value)) {
      return styles.link;
    } else {
      return styles.normal;
    }
  };
  return (
    <>
      {!flag ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setFlag(!flag)}>
          <Text style={styles.check}>✅ </Text>
          <Text>
            {item.map((i, index) => (
              <View key={index}>
                <Text style={[observer(i), styles.responsive]}>
                  {validURL(i) ? (
                    <Text
                      onPress={() => {
                        Platform.OS === 'web'
                          ? window.open(i, '_blank')
                          : Linking.openURL(i);
                      }}>
                      🔗 Link
                    </Text>
                  ) : validEmail(i) ? (
                    <Text
                      accessibilityHint={'Ya'}
                      title={'Ya'}
                      onPress={() =>
                        Linking.openURL(`mailto:${i}?subject=Change Here!!!`)
                      }>
                      📧 Mail
                    </Text>
                  ) : (
                    i + ' '
                  )}
                </Text>
              </View>
            ))}
          </Text>
        </TouchableOpacity>
      ) : (
        <Update list={list} setList={setList} setFlag={setFlag} item={item} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  touchable: {
    // overflow: 'hidden',
    flexDirection: 'row',
    // marginTop: 10,
    width: '90%',
    marginLeft: 4,
    marginBottom: 15,
  },
  responsive: {
    marginBottom: 5,
  },
  normal: {
    color: '#000000',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  hashtag: {
    backgroundColor: '#DBC7FF',
    color: '#702EE6',
    marginRight: 5,
    borderRadius: 50,
    minHeight: 24,
    paddingRight: 7,
    paddingLeft: 7,
    height: 24,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '500',
    paddingBottom: 5,
  },
  link: {
    backgroundColor: '#d6ebff',
    color: '#007FFF',
    marginRight: 5,
    borderRadius: 50,
    minHeight: 24,
    paddingRight: 7,
    paddingLeft: 7,
    height: 24,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '500',
  },
  dat: {
    backgroundColor: '#adf0d9',
    color: '#07A873',
    marginRight: 5,
    borderRadius: 50,
    minHeight: 24,
    paddingRight: 7,
    paddingLeft: 7,
    height: 24,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '500',
  },
  email: {
    backgroundColor: '#ffe6c7',
    color: '#F58E0A',
    marginRight: 5,
    borderRadius: 50,
    minHeight: 24,
    paddingRight: 7,
    paddingLeft: 7,
    height: 24,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '500',
  },
  check: {
    marginRight: 13,
    marginLeft: 1,
    marginTop: 3,
  },
});
