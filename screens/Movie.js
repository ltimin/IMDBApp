import React, { Component } from 'react';
import * as Ajax from '../services/Ajax.js';
import * as MovieData from '../json/JSON.js';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Toast } from 'native-base';

export default class Movie extends Component {
    state = {
        movieName: '',
        showToast: false
    }

    getMovieName = () => {
        //Going to grab the movie(s) with that name
        let movieTitle = this.state.movieName;
        // This checks if the input box is empty or null
        if (!/\S/.test(movieTitle)) {
            Toast.show({
                text: "         Put In Movie's Name!",
                buttonText: 'OKAY',
                position: 'top',
                type: 'danger'
            })
        } else {
            // *(Note: Only use if the 3rd Party API is down or slow | Use local getTransformers instead of getMovieByName(movieTitle)*
            const data = MovieData.getTransformers();
            this.props.navigation.navigate('MovieList', data);
            //This splits the input name into seperate first, middle, and last names w/ "+" for API
            // movieTitle = movieTitle.trim().split(' ').join('+');
            //Getting the data from the API
            //  Ajax.getMovieByName(movieTitle)
            //         .then(
            //             resp => {
            //                 for (let i = 0; i < resp.data.length; i++) {
            //                     console.log(resp.data[i].title);
            //                 }
            //             },
            //             err => {
            //                 console.log("Error with Movie", err)
            //             }
            //         )
            // }
        }
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.imgCard}>
                    <Image style={styles.imgCard} source={require('../assets/img/Golden-Globe.png')} />
                </View>
                Card
                <View style={styles.card}>
                    <TextInput style={styles.searchBox} placeholder='Search for a Movie...' value={this.state.movieName} onChangeText={e => this.setState({ movieName: e })} />
                    <Text style={{ color: '#C11C32', fontWeight: '600', fontFamily: 'Al Nile' }}>────────────────────</Text>
                    <TouchableOpacity style={styles.searchButton} onPress={this.getMovieName}>
                        <Text style={styles.text}>SEARCH</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
};
//Style Sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'hsla(360, 100%, 100%, 1.0)',
        width: 350,
        height: 140,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowOpacity: .2,
        shadowRadius: 2,
        shadowOffset: { width: -3, height: 5 },
        shadowColor: 'black',
    },
    imgCard: {
        backgroundColor: 'hsla(360, 100%, 100%, 1.0)',
        width: 350,
        height: 180,
        borderRadius: 2,
        shadowOpacity: .2,
        shadowRadius: 2,
        shadowOffset: { width: -3, height: 5 },
        shadowColor: 'black',
    },
    text: {
        color: 'whitesmoke',
        fontSize: 20,
        fontFamily: 'Al Nile'
    },
    searchButton: {
        width: 200,
        height: 40,
        borderRadius: 2,
        shadowOpacity: .3,
        shadowRadius: 1,
        shadowOffset: { width: .2, height: 1, },
        shadowColor: 'black',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        opacity: 1,
        borderRadius: 3,
        textAlign: 'center',
        fontFamily: 'Al Nile',
        fontWeight: '500',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 14,
    }
});