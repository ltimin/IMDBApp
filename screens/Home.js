import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgFlex}>
                    <View style={styles.imgBackground}>
                        <Image style={{ width: 150, height: 75 }} source={require('../assets/img/CAA-Logo.png')} />
                    </View>
                </View>
                <View style={styles.searchFlex}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={styles.searchButton}><Text style={styles.text}>ENTER</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
//Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#C11C32',
        fontSize: 40,
        fontFamily: 'Al Nile',
        fontWeight: '500'
    },
    imgBackground: {
        width: 300,
        height: 150,
        backgroundColor: '#C11C32',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: .3,
        shadowRadius: 1,
        shadowOffset: { width: .2, height: 1, },
        shadowColor: 'black',
    },
    imgFlex: {
        flex: 3,
        justifyContent: 'center'
    },
    searchFlex: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    searchButton: {
        width: 315,
        height: 75,
        borderRadius: 5,
        shadowOpacity: .3,
        shadowRadius: 1,
        shadowOffset: { width: .2, height: 1, },
        shadowColor: 'black',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});