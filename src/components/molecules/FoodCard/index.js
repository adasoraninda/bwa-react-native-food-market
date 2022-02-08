import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';

const FoodCard = ({image, index}) => {
  return (
    <View style={styles.container(index)}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.starContainer}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <View style={{width: 4}} />
          <Text>4</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: index => ({
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    marginLeft: index && 24,
  }),
  content: {
    padding: 12,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  ratingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
});
