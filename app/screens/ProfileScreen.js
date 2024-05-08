import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text , ImageBackground , Image} from 'react-native';
import { Platform } from 'react-native';


import colors from '../config/colors.js'
import background from '../assets/images/background.png'

const ProfileScreen = () => {
    return (
        <ImageBackground       
                source={background}
                style={styles.backgroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>              
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require('../assets/images/profile_image.png')} 
                        style={styles.image}
                        resizeMode="contain" 
                    />
                </View>
                <View style={styles.tagContainer}>
                    <View style={styles.tags}>
                        <Text style={styles.tagsText}>525 XP</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/trophy.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                        <Text style={styles.tagsText}>4th</Text>
                    </View>
                    <View style={styles.tags}>
                        <Image
                            source={require('../assets/icons/clock.png')} 
                            style={[styles.image, { marginRight: 4 }]}
                            resizeMode="contain"/>
                        <Text style={styles.tagsText}>36h</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Nicole Mayr</Text>
                    <Text style={styles.subTitleText}>Talent Manager</Text>
                </View>
            </ScrollView>     
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    
    profileImageContainer: {
        marginTop: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tags: {
        margin: 5,
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 15,
        elevation: 5,
        shadowRadius: 12,
        overflow: "hidden",
        backgroundColor: '#f8f7d8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },

    titleContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        //backgroundColor: colors.primary,
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    tagsText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: '900'
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

export default ProfileScreen;
