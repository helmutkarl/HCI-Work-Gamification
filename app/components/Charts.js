import { React, useState, useEffect } from 'react';
import { View, Text, Image, } from 'react-native';

import styles from '../styles/Charts.styles';


const Charts = ({ userProfile }) => {

    const [registeredCount, setRegisteredCount] = useState(0);
    const [inProgressCount, setInProgressCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        if (userProfile) {
            const registered = userProfile.courses.filter(course => course.status === 'Registered').length;
            const inProgress = userProfile.courses.filter(course => course.status === 'In Progress').length;
            const completed = userProfile.courses.filter(course => course.status === 'Completed').length;

            setRegisteredCount(registered);
            setInProgressCount(inProgress);
            setCompletedCount(completed);
        }
    }, [userProfile]);

    return (
        <View style={styles.chartContainerAll}>
            <View style={styles.chartContainer}>
                <Image source={require('../assets/icons/chart_1.png')} style={{ width: 115, height: 115 }} />
                <Text style={{ ...styles.chartNumber, left: '49%' }}>{registeredCount}</Text>
                <Text style={styles.chartText}>Registered</Text>
            </View>
            <View style={styles.chartContainer}>
                <Image source={require('../assets/icons/chart_2.png')} style={{ width: 115, height: 115 }} />
                <Text style={{ ...styles.chartNumber }}>{inProgressCount}</Text>
                <Text style={styles.chartText}>In Progress</Text>
            </View>
            <View style={styles.chartContainer}>
                <Image source={require('../assets/icons/chart_3.png')} style={{ width: 115, height: 115 }} />
                <Text style={{ ...styles.chartNumber, left: '45%' }}>{completedCount}</Text>
                <Text style={styles.chartText}>Completed</Text>
            </View>
        </View>
    );
};

export default Charts;