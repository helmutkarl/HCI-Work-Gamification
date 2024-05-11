import React from 'react';
import { View, FlatList, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import rewardsData from '../data/rewards.json';
import background from '../assets/images/background.png';

export default RewardsScreen = ({ navigation }) => {
    const renderItem = ({ item }) => {
        const handlePress = () => {
            navigation.navigate('RewardDetailScreen', {
                imageUrl: item.image,
                itemName: item.name,
                itemAcquired: item.acquired
            });
        };

        return (
            <TouchableOpacity onPress={handlePress}>
                <Image source={{ uri: item.image }} style={{ width: 180, height: 180, marginLeft: 3 }} />
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground source={background} style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>My Rewards</Text>
                <Text style={{ fontSize: 16 }}>Claim your rewards here!</Text>
            </View>
            <FlatList
                data={rewardsData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </ImageBackground>
    );
};