import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import {validEmail, validURL} from '../js/validations';

export default function Input({list, setList}) {
  const [txt, setTxt] = useState('');
  const [contentSize, setContentSize] = useState({width: '99%', height: 0});
  const [modal, setModal] = useState(false);
  const [width, setWidth] = useState(null);
  const observer = (value) => {
    if (value.startsWith('#') && value.length > 1) {
      return styles.hashtag;
    } else if (value.startsWith('@') && value.length > 1) {
      return styles.dat;
    } else if (validEmail(value)) {
      return styles.email;
    } else if (validURL(value)) {
      return styles.link;
    } else {
      return styles.normal;
    }
  };
  function save() {
    if (txt) {
      setList([txt.split(' '), ...list]);
      setTxt('');
    } else {
      setModal(false);
      setTxt('');
    }
  }
  return (
    <View style={styles.container}>
      {!modal && (
        <Pressable
          style={styles.touchable}
          onPress={() => {
            setModal(true);
          }}>
          <View style={styles.button}>
            <Text style={styles.plus}>➕</Text>
          </View>
          {!modal && !txt && (
            <Text style={styles.text2}>Type to add new task</Text>
          )}
        </Pressable>
      )}
      {modal && (
        <View
          style={styles.box}
          onLayout={(layout) => {
            setWidth(layout.nativeEvent.layout.width);
          }}>
          {Platform.OS === 'web' && (
            <View style={styles.plusButton}>
              <Text style={styles.plus}>➕</Text>
            </View>
          )}
          <TextInput
            autoCorrect={false}
            autoFocus
            value={txt}
            onChangeText={(value) => setTxt(value.replace(/\s\s+/g, ' '))} // allow only one space
            style={[styles.input, contentSize]}
            placeholder="Type to add new task"
            multiline
            numberOfLines={1}
            placeholderTextColor="#8A94A6"
            onContentSizeChange={(e) => {
              setContentSize(e.nativeEvent.contentSize);
            }}
          />
          <View style={styles.printer}>
            <View style={styles.container2}>
              <Text>
                {txt.split(' ').map((item, index) => (
                  <Text key={index} style={observer(item)}>
                    {item}{' '}
                  </Text>
                ))}
              </Text>
            </View>
          </View>
          <View style={styles.allButtons}>
            <View style={styles.actions}>
              {width > 98 && (
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    setModal(false);
                    setTxt('');
                  }}>
                  <Text style={styles.cancelText}>
                    {width > 1070 ? 'Cancel' : '✖'}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.addButton} onPress={() => save()}>
                <Text style={styles.addText}>
                  {width > 1070 ? (txt ? 'Add' : 'Ok') : '➕'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F1F3F4',
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2: {
    color: '#8A94A6',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
    marginLeft: 41,
    position: 'absolute',
    top: 3,
  },
  input: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'transparent',
      },
      default: {
        outlineColor: 'transparent',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.32,
    color: 'transparent',
    position: 'absolute',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'transparent',
      },
      default: {
        caretColor: '#04142F',
      },
    }),
    width: '102%',
    paddingRight: 0,
    marginLeft: Platform.OS === 'web' ? 40 : 7,
    top: Platform.OS === 'web' ? 2 : 0,
  },
  container2: {
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  printer: {
    flex: 1,
    top: Platform.OS === 'web' ? 2 : 8,
    marginBottom: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    minHeight: 40,
    marginLeft: Platform.OS === 'web' ? 40 : 10,
    height: 40,
    zIndex: -1,
  },
  normal: {
    color: '#000000',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  hashtag: {
    color: '#7d41e8',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  link: {
    color: '#158aff',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  dat: {
    color: '#26b385',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  email: {
    color: '#f7a842',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 24,
    fontWeight: '400',
  },
  button: {
    marginTop: 4,
    marginLeft: 4,
    borderWidth: 2.5,
    borderColor: '#007FFF',
    borderRadius: 3,
  },
  plusButton: {
    marginTop: 4,
    marginLeft: 4,
    borderWidth: 2.5,
    borderColor: '#007FFF',
    borderRadius: 3,
    position: 'absolute',
  },
  plus: {
    alignSelf: 'center',
    padding: 2,
    fontSize: 12,
  },
  cancelButton: {
    backgroundColor: '#EAF0F5',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#0d55cf',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  cancelText: {
    color: '#04142F',
    fontWeight: '500',
    paddingHorizontal: 8,
    letterSpacing: 0.8,
    lineHeight: 16,
    fontSize: 14,
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 8,
    letterSpacing: 0.8,
    lineHeight: 16,
    fontSize: 14,
  },
  allButtons: {
    flex: 1,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFBFB',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: '#E7ECEF',
    paddingVertical: 7,
    paddingHorizontal: 9,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  avatarButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 1,
  },
  avatar: {
    width: 25,
    height: 25,
  },
  avatarD: {
    width: 25,
    height: 25,
    opacity: 0.5,
  },
});
