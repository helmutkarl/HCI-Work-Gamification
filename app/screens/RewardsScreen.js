import React from 'react';
import { View, FlatList, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

import rewardsData from '../data/rewards.json';
import background from '../assets/images/background.png';
import styles from '../styles/RewardsScreen.styles';
import global from '../styles/global.styles.js';

export default RewardsScreen = ({ navigation }) => {
    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('RewardDetailScreen', {
                imageUrl: item.image,
                itemName: item.name,
                itemAcquired: item.acquired,
                itemXp: item.xp,
                itemDescription: item.description,
            });
        };

        return (
            <TouchableOpacity onPress={handlePress}>
                <Image source={{ uri: item.image }} style={{ width: 180, height: 180, marginLeft: 20 }} />
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground source={background} style={{ flex: 1 }}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>My Rewards</Text>
                <Text style={styles.subTitleText}>Claim your rewards here!</Text>
            </View>
            <FlatList style={global.scrollView} showsVerticalScrollIndicator={false}
                data={rewardsData}
                contentContainerStyle={styles.contentContainer}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </ImageBackground>
    );
};