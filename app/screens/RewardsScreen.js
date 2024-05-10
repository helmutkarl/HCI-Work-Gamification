import { React, UseState }from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, FlatList, Text , Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors.js'

import background from '../assets/images/background.png'

const DATA = [
    { id: '1', imageUrl: require('../assets/images/reward_shield.png') },
    { id: '2', imageUrl: require('../assets/images/reward_fire.png') },
    { id: '3', imageUrl: require('../assets/images/reward_target.png') },
    { id: '4', imageUrl: require('../assets/images/reward_medal.png') },
    { id: '5', imageUrl: require('../assets/images/reward_bookmark.png') },
    { id: '6', imageUrl: require('../assets/images/reward_star.png') },
    { id: '7', imageUrl: require('../assets/images/reward_trophy.png') },
    { id: '8', imageUrl: require('../assets/images/reward_crown.png') },
  ];


const RewardsScreen = () => {
    const navigation = useNavigation();

      const renderItem = ({ item }) => {

        const handlePress = () => {
          navigation.navigate('RewardDetailScreen', { itemId: item.id, imageUrl: item.imageUrl });
        };
      
        return(
            <TouchableOpacity style={styles.item}>
                <Image source={item.imageUrl} style={styles.image} />
            </TouchableOpacity>
        )
      }

    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>My Rewards</Text>
                    <Text style={styles.subTitleText}>Claim your rewards here!</Text>
                </View>
                <ScrollView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    container: {
        flex: 1,
        paddingHorizontal: 25,

      },

    titleContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left',
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },

    subTitleText: {
        color: colors.titles,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500'
    },
})

export default RewardsScreen;
