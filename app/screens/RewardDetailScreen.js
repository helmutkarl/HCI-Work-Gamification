import React from 'react';
import { StyleSheet, View, ScrollView, Text , ImageBackground, Image , TouchableOpacity} from 'react-native';

import colors from '../config/colors.js'
import background from '../assets/images/background.png'


//CTA image needs to be imported in a bigger size + othr button for not claimed rewards!!!


const RewardDetailScreen = ({route}) => {
    const {imageUrl, itemName, itemAcquired} = route.params;

    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={{ width: 260, height: 260, marginRight: 10}}/>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{itemName}</Text>
                    <Text style={styles.subTitleText}>200 XP</Text>
                    <Text style={styles.descriptionText}>The Cyber Guardian Badge symbolizes your dedication to upholding the highest standards of IT security within our organization. By completing ALL quarterly IT Security trainings this year, you've equipped yourself with essential knowledge and skills to identify and mitigate cybersecurity threats effectively.</Text>
                    <Text style={styles.benefitsTitle}>Your Benefits</Text>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10}}/>
                        <Text style={styles.benefitsText}>free lunch in the canteen</Text>
                    </View>
                    <View style={styles.benefitsContainer}>
                        <Image source={require('../assets/icons/star.png')} style={{ width: 20, height: 20, marginTop: 10, marginRight: 10}}/>
                        <Text style={styles.benefitsText}>50 Euro Amazon gift card</Text>
                    </View>
                </View>
                <CtaButton onPress ={() => {  console.log("Benefits Claimed")}}/>
            </ScrollView>
        </ImageBackground>
    );
}

const CtaButton  = ({ onPress }) => {
    return (
      <TouchableOpacity style={styles.ctaContainer}>
        <Image source={require('../assets/images/cta.png')} style={{ width: 350,}}resizeMode='contain' />
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },

    imageContainer: {
        marginTop: 60,
        paddingHorizontal: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },

    ctaContainer: {
        marginTop: 25,
        //backgroundColor: colors.primary,
        alignItems: 'center',
    },

    
    titleContainer: {
        paddingHorizontal: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'left,'
    },

    titleText: {
        color: colors.titles,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: '900'
    },

    subTitleText: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop:8,
        fontWeight: '500',
    },
    descriptionText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 30,
        fontWeight: '500',
    },

    benefitsContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'left,'
    },

    benefitsTitle: {
        color: colors.text,
        fontSize: 18,
        marginLeft: 8,
        marginTop: 30,
        marginBottom: 10,
        fontWeight: '700',
    },

    benefitsText: {
        color: colors.text,
        fontSize: 16,
        marginLeft: 8,
        marginTop: 10,
        fontWeight: '500',
    },

    cta: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '900',
    },
})

export default RewardDetailScreen;
