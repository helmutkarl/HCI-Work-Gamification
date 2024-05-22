import React from 'react';
import { View, Text, Image, } from 'react-native';

import styles from '../styles/ProfileScreen.styles';

export default ProfileStats = ({ user }) => {
    return (
        <View style={styles.tagContainer}>
            <View style={styles.tags}>
                <Text style={styles.tagsText}>{user.xp} XP</Text>
            </View>
            <View style={styles.tags}>
                <Image source={require('../assets/icons/trophy.png')} style={{ marginRight: 5 }} />
                <Text style={styles.tagsText}>{user.placement}</Text>
            </View>
            <View style={styles.tags}>
                <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 5 }} />
                <Text style={styles.tagsText}>{user.timeSpent} h</Text>
            </View>
        </View>
    )
};