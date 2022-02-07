import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <Gap height={24} />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  page: {flex: 1},
});
