import { StyleSheet, Text, TouchableOpacity, View, Animated, Platform, Switch, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState, useRef } from 'react';

const sidebarWidth = 400;
const translateX = useRef(new Animated.Value(sidebarWidth)).current;

// SIDEBAR
const toggleSidebar = () => {
    Animated.timing(translateX, {
        toValue: sidebarOpen ? sidebarWidth : 0,
        duration: 250,
        useNativeDriver: true,
    }).start(() => setSidebarOpen(!sidebarOpen));
};

// FILTERS
const toggleExpand = (section) => {
    setFilters(prev => ({ ...prev, [section]: !prev[section] }));
};

const toggleCountrySelection = (country) => {
    setFilters(prevFilters => ({
        ...prevFilters,
        countries: prevFilters.countries.includes(country)
            ? prevFilters.countries.filter(c => c !== country)
            : [...prevFilters.countries, country]
    }));
};

<Animated.ScrollView showsVerticalScrollIndicator={false} style={[styles.sidebar, { transform: [{ translateX }] }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8, paddingRight: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='filter-list' size={24} color='#b50938' />
            <Text style={{ color: '#b50938', fontSize: 18, paddingLeft: 8 }}>Filters</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
            <Icon name='close' size={28} color='#b50938' />
        </TouchableOpacity>
    </View>
    {/* SHOW ONLY FILTERS */}
    <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.expandableObject} onPress={() => toggleExpand('expandShowOnly')}>
            <Text style={styles.expandableObjectTitle}>SHOW ONLY</Text>
            <Icon name={filters.expandShowOnly ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color='#000' />
        </TouchableOpacity>
        {filters.expandShowOnly && (
            <View>
                <View style={styles.switchRow}>
                    <Switch
                        trackColor={{ false: "#666", true: "#b50938" }}
                        thumbColor={filters.onlyOnView ? "#f4f3f4" : "#f4f3f4"}
                        onValueChange={() => setFilters({ ...filters, onlyDescription: !filters.onlyDescription })}
                        value={filters.onlyDescription}
                    />
                    <Text style={styles.switchLabel}>Has Description</Text>
                </View>
                <View style={styles.switchRow}>
                    <Switch
                        trackColor={{ false: "#666", true: "#b50938" }}
                        thumbColor={filters.onlyOnView ? "#f4f3f4" : "#f4f3f4"}
                        onValueChange={() => setFilters({ ...filters, onlyPublicDomain: !filters.onlyPublicDomain })}
                        value={filters.onlyPublicDomain}
                    />
                    <Text style={styles.switchLabel}>Public Domain</Text>
                </View>
                <View style={styles.switchRow}>
                    <Switch
                        trackColor={{ false: "#666", true: "#b50938" }}
                        thumbColor={filters.onlyOnView ? "#f4f3f4" : "#f4f3f4"}
                        onValueChange={() => setFilters({ ...filters, onlyOnView: !filters.onlyOnView })}
                        value={filters.onlyOnView}
                    />
                    <Text style={styles.switchLabel}>Currently On View</Text>
                </View>
            </View>
        )}
        {/* COUNTRY FILTER */}
        <TouchableOpacity style={styles.expandableObject} onPress={() => toggleExpand('expandCountry')}>
            <Text style={styles.expandableObjectTitle}>COUNTRY</Text>
            <Icon name={filters.expandCountry ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color='#000' />
        </TouchableOpacity>
        {filters.expandCountry && ['United States', 'France', 'Japan', 'England', 'Italy', 'Germany', 'China', 'Netherlands', 'Austria'].map(country => (
            <TouchableOpacity
                key={country}
                style={filters.countries.includes(country) ? styles.selectedCountry : styles.country}
                onPress={() => toggleCountrySelection(country)}
            >
                <Text>{country}</Text>
            </TouchableOpacity>))}
        {/* DATE FILTER */}
        <TouchableOpacity style={styles.expandableObject} onPress={() => toggleExpand('expandDate')}>
            <Text style={styles.expandableObjectTitle}>DATE</Text>
            <Icon name={filters.expandCountry ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color='#000' />
        </TouchableOpacity>
        {filters.expandDate && (
            <View>
                <Text>From Year:</Text>
                <TextInput
                    style={styles.date_input}
                    keyboardType="numeric"
                    placeholder="e.g., -300"
                    value={fromYear}
                    onChangeText={setFromYear}
                />
                <Text>To Year:</Text>
                <TextInput
                    style={styles.date_input}
                    keyboardType="numeric"
                    placeholder="e.g., 1960"
                    value={toYear}
                    onChangeText={setToYear}
                />
            </View>
        )}
    </View>
</Animated.ScrollView>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        paddingTop: 64
    },
    logoBox: {
        width: 225,
        height: 225,
        borderWidth: 4,
        justifyContent: 'flex-end',
        padding: 4,
        marginBottom: 32
    },
    logo: {
        fontWeight: 'bold',
        letterSpacing: 5,
        fontSize: 32
    },
    text: {
        fontSize: 24
    },
    searchContainer: {
        width: '80%',
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    searchInputContainer: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8
    },
    button: {
        marginTop: 10,
        backgroundColor: '#b50938',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        margin: 8,
        flexDirection: 'row'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 8,
        fontWeight: '500'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    sidebar: {
        position: 'absolute',
        right: 0,
        top: 50,
        bottom: 10,
        width: '80%',
        backgroundColor: 'white',
        paddingLeft: 24,
        paddingTop: 8,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: -3, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                borderWidth: 0.2,
                borderColor: '#ccc'
            },
            android: {
                elevation: 16,
            }
        }),
    },
    closeButton: {
        alignSelf: 'flex-end'
    },
    filterContainer: {
        marginTop: 4
    },
    expandableObject: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 14,
        marginTop: 10,
        borderBottomWidth: 0.5,
        marginBottom: 6,
        paddingBottom: 6
    },
    expandableObjectTitle: {
        fontSize: 16,
        letterSpacing: 3
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4
    },
    selectedCountry: {
        backgroundColor: '#eee',
        padding: 10,
        margin: 2,
        borderRadius: 8,
        marginRight: 24
    },
    country: {
        padding: 10,
        margin: 2
    },
    date_input: {
        height: 40,
        borderColor: '#999',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        marginRight: 16
    }
});