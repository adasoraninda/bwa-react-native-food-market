import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <View style={styles.back}>
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <IcBack />
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  back: {
    marginLeft: -10,
    marginRight: 10,
    padding: 16,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
