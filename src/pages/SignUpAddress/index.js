import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, Gap, TextInput, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Address'}
        subTitle={'Make sure it’s valid'}
        onBack={() => navigation.pop()}
      />
      <Gap height={24} />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label={'City'} />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  page: {flex: 1},
});
