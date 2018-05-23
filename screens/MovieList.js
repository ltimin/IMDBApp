import React, { Component } from 'react';
import { Body, Left, Right, ListItem, List, Thumbnail, Container, Content } from 'native-base';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

export default class MovieList extends Component {
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
        movies: []
    }
    componentWillMount = () => {
        const data = this.props.navigation.state.params;
        this.mapMovies(data);
    };

    mapMovies = (data) => {
        //Setting the movies data from props to be mapped
        this.setState({ movies: data });
    }
    getmovieDetails = (movie) => {
        //Grabbing the specific movie and navigating to Movie Detail Screen
        this.props.navigation.navigate('MovieDetail', movie)
    }
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <List style={styles.listView}>
                        {this.state.movies.map((movie) => (
                            <ListItem key={movie.imdb_id} onPress={() => this.getmovieDetails(movie)}>
                                <Thumbnail square size={80} source={{ uri: movie.poster.thumb || movie.poster.large }} />
                                <Body>
                                    <Text style={styles.movieList}>    {movie.title} </Text>
                                    <Text style={{ fontFamily: 'Al Nile' }} note>       {movie.director} </Text>
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
//Style sheet
const styles = StyleSheet.create({
    movieList: {
        fontFamily: 'Al Nile',
        fontWeight: '500',
        fontSize: 18,
        color: '#C11C32',
    },
});