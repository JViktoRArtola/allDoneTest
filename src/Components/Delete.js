import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';

function Delete({remove, setRemove, deleteTask, item}) {
  return (
    <Modal visible={remove} transparent>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Be Careful with this action</Text>
          <Text style={styles.subtitle}>
            Do you really want to perfom this action ?
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.cancel}
              onPress={() => setRemove(false)}>
              <Text style={styles.textC}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.proceed}
              onPress={() => deleteTask(item)}>
              <Text style={styles.textP}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#091540',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  subtitle: {
    color: '#7b869a',
    fontSize: 14,
    fontWeight: '400',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  cancel: {
    padding: 8,
    backgroundColor: '#eaf0f5',
    borderRadius: 2,
    lineHeight: 16,
    letterSpacing: 0.8,
    marginRight: 25,
  },
  proceed: {
    padding: 8,
    backgroundColor: '#e00000',
    borderRadius: 2,
    lineHeight: 16,
    letterSpacing: 0.8,
  },
  textP: {
    color: 'white',
    fontWeight: '500',
  },
  textC: {
    color: 'black',
    fontWeight: '500',
  },
});

export default Delete;
