import React, { Component } from 'react';
import { Body, Left, Right, ListItem, List, Grid, Col } from 'native-base';
import { StyleSheet, ScrollView, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Toast } from 'native-base';

export default class ActorBio extends Component {
    //This is for the navigation on the page *(Note: Need to figure out if can use a component instead)*
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                <Image style={{ width: 20, height: 20, marginRight: 10 }} source={require('../assets/img/Search.png')} />
            </TouchableOpacity>,
            headerTitle:
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                    <View style={{ backgroundColor: '#C11C32', width: 55, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
                        <Image style={{ width: 50, height: 25 }} source={require('../assets/img/CAA-Logo.png')} />
                    </View>
                </TouchableOpacity>,
            headerStyle: {
                backgroundColor: 'whitesmoke',
            },
            headerTintColor: '#C11C32',
        }
    };
    //End of Navigation
    state = {
        actorPic: '../assets/img/Person-Grey.png',
        actorName: 'First Last',
        actorInfo: 'Bio',
        firstSix: [],
        films: []
    }
    componentWillMount = () => {
        const data = this.props.navigation.state.params[0];
        this.setBio(data)
        this.mapMovies(data);
    };
    setBio = (data) => {
        //Setting the bio of the Actor
        this.setState({ actorPic: data.image.thumb });
        this.setState({ actorName: data.title });
        this.setState({ actorInfo: data.description });
    }
    mapMovies = (data) => {
        //*(Note: The loops are backwards for earliest movies first)*
        //Setting the first 6 Actor's movies to be displayed to the right of bio
        let firstArr = [];
        for (let i = 30; i >= 25; i--) {
            firstArr.push(data.filmography.actor[i]);
        }
        //Setting the rest of the Actor's movies to be displayed on the bottom of the bio
        let filmsArr = [];
        for (let j = 24; j >= 1; j--) {
            filmsArr.push(data.filmography.actor[j]);
        }
        this.setState({ films: filmsArr });
        this.setState({ firstSix: firstArr });
    }
    goToMovie = (title) => {
        //*(Note: This would do an API call to go get movie by ID, but it's currently returning a toast of title)*
        Toast.show({
            text: "         " + title,
            buttonText: 'Okay',
            position: 'top',
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Grid>
                    <Col style={{ width: 170, height: 455 }}>
                        <View style={styles.bio}>
                            <View style={styles.actorPic}>
                                <Image style={{ width: 110, height: 110, borderRadius: 55 }} source={{ uri: this.state.actorPic || '../assets/img/Person-Grey.png' }} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: 'whitesmoke', fontWeight: '600', fontFamily: 'Al Nile' }}>─────────</Text>
                                <Text style={styles.actorName}>{this.state.actorName}</Text>
                                <Text style={{ color: 'whitesmoke', fontWeight: '600', fontFamily: 'Al Nile' }}>─────────</Text>
                            </View>
                            <Text style={styles.actorInfo}>{this.state.actorInfo}</Text>
                        </View>
                    </Col>
                    <Col>
                        <View style={styles.listView}>
                            <List>
                                {this.state.firstSix.map((six) => (
                                    <ListItem key={six.imdb_id} onPress={() => this.goToMovie(six.title)}>
                                        <Body>
                                            <Text style={styles.movieList}>{six.title}</Text>
                                            <Text style={{ fontFamily: 'Al Nile' }} note>{six.year}</Text>
                                        </Body>
                                        <Image style={{ width: 30, height: 30 }} source={require('../assets/img/Arrow-Forward.png')} />
                                    </ListItem>
                                ))}
                            </List>
                        </View>
                    </Col>
                </Grid>
                <View style={styles.listView}>
                    <List>
                        {this.state.films.map((film) => (
                            <ListItem key={film.imdb_id} onPress={() => this.goToMovie(film.title)}>
                                <Body>
                                    <Text style={styles.movieList}>{film.title}</Text>
                                    <Text style={{ fontFamily: 'Al Nile' }} note>{film.year}</Text>
                                </Body>
                                <Image style={{ width: 30, height: 30 }} source={require('../assets/img/Arrow-Forward.png')} />
                            </ListItem>
                        ))}
                    </List>
                </View>
            </ScrollView>
        )
    }
};
//Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    bio: {
        flex: 1,
        height: 455,
        width: 170,
        backgroundColor: '#C11C32',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        shadowOpacity: .2,
        borderRadius: 2,
        shadowRadius: 2,
        shadowOffset: { width: -3, height: 5 },
        shadowColor: 'black',
        zIndex: 2
    },
    actorPic: {
        width: 120,
        height: 120,
        borderRadius: 90,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 1,
        shadowOffset: { width: -3, height: 5 },
        shadowColor: 'black',
        shadowOpacity: .2,
        zIndex: 3
    },
    actorName: {
        fontFamily: 'Al Nile',
        fontWeight: '500',
        fontSize: 16,
        color: 'whitesmoke',
        zIndex: 3
    },
    actorInfo: {
        width: 130,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: -20,
        color: 'whitesmoke',
        fontSize: 10,
        zIndex: 3
    },
    movieList: {
        fontFamily: 'Al Nile',
        fontWeight: '500',
        fontSize: 16,
        color: '#C11C32',
    },
    listView: {
        flex: 1,
        flexWrap: 'wrap',
        flexGrow: 2
    }
});