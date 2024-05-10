import { React, UseState }from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, FlatList, Text , Image, ImageBackground, handlePress } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors.js'

import background from '../assets/images/background.png'

const DATA = [
    { id: '1', name: 'Cyber Guardian Badge', acquired: 'true', imageUrl: require('../assets/images/reward_shield.png') },
    { id: '2', name: 'Fire Drill', acquired: 'true', imageUrl: require('../assets/images/reward_fire.png') },
    { id: '3', name: 'First Target', acquired: 'false', imageUrl: require('../assets/images/reward_target.png') },
    { id: '4', name: '500 XPs', acquired: 'false', imageUrl: require('../assets/images/reward_medal.png') },
    { id: '5', name: '1000 XPs', acquired: 'false', imageUrl: require('../assets/images/reward_bookmark.png') },
    { id: '6', name: 'Star Award', acquired: 'false', imageUrl: require('../assets/images/reward_star.png') },
    { id: '7', name: 'Overachiever Trophy', acquired: 'false', imageUrl: require('../assets/images/reward_trophy.png') },
    { id: '8', name: 'Royalty Status', acquired: 'false', imageUrl: require('../assets/images/reward_crown.png') },
  ];


const RewardsScreen = ({navigation}) => {

      const renderItem = ({ item }) => {

        const handlePress = () => {
          navigation.navigate('RewardDetailScreen', {imageUrl: item.imageUrl , itemName: item.name, itemAcquired: item.acquired });
        };
      
        return(
            <TouchableOpacity style={styles.item} onPress={handlePress}>
                <Image source={item.imageUrl} style={{ width: 180, height: 180, marginLeft: 3,}} />
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
