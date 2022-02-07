import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Gap, TextInput, Button} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Sign Up'}
        subTitle={'Register and eat'}
        onBack={() => navigation.pop()}
      />
      <Gap height={24} />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#8D92A3',
    textAlign: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
  page: {flex: 1},
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
  },
});
