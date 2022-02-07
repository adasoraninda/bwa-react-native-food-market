import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker style={{height: 45}}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#020202',
  },
});
