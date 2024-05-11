import React from 'react';
import { View, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

import background from '../assets/images/background.png'
import styles from '../styles/RewardDetailScreen.styles.js';

//CTA image needs to be imported in a bigger size + othr button for not claimed rewards!!!

export default RewardDetailScreen = ({ route }) => {
    const { imageUrl, itemName, itemXp, itemDescription, itemAcquired } = route.params;

    return (
        <ImageBackground
            source={background}
            style={styles.backgroundContainer}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageUrl }} style={{ width: 260, height: 260, marginRight: 10 }} />
                </View>
                {itemAcquired &&(
                    <View style={styles.tagContainer}>
                        <View style={styles.tags}>
                            <Text style={styles.tagsText}>acquired</Text>
                        </View>
                    </View>
                )}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{itemName}</Text>
                    <Text style={styles.subTitleText}>{itemXp} XP</Text>
                    <Text style={styles.descriptionText}>{itemDescription}</Text>
                    <Text style={styles.benefitsTitle}>Your Benefits</Text>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10 }} />
                        <Text style={styles.benefitsText}>free lunch in the canteen</Text>
                    </View>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10 }} />
                        <Text style={styles.benefitsText}>50 Euro Amazon gift card</Text>
                    </View>
                </View>
                {itemAcquired &&(
                <CtaButton onPress={() => { console.log("Benefits Claimed") }} />
                )}
            </ScrollView>
        </ImageBackground>
    );
}

const CtaButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.ctaContainer}>
            <Image source={require('../assets/icons/cta_button.png')} style={{ width: 350, }} resizeMode='contain' />
            <Text style={styles.ctaText}>Claim your benefits</Text>
        </TouchableOpacity>
    );
};