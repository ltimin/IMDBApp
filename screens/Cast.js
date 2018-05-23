import React, { Component } from 'react';
import { Body, Left, Right, ListItem, List, Thumbnail, Container, Content } from 'native-base';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Toast } from 'native-base';

export default class Cast extends Component {
    state = {
        poster: '../assets/img/CAA-Logo.png',
        cast: [],
    }
    componentWillMount() {
        const data = this.props.navigation.state.params;
        this.setImage(data);
        this.mapCast(data);
    };
    setImage = (data) => {
        //Setting the poster image
        this.setState({ poster: data.poster.large || data.poster.thumb });
    }
    mapCast = (data) => {
        //Setting the cast data to displayed below the poster
        this.setState({ cast: data.cast })
    }
    gotoActor = (actor) => {
        //*(Note: This would go to the Actor's page with Props, but it's currently returning a toast of Actor's name)*
        Toast.show({
            text: "         " + actor,
            buttonText: 'Okay',
            position: 'top',
            type: 'danger'
        })
    }
    render() {
        return (
            <ScrollView >
                <View style={styles.posterCard}>
                    <Image style={styles.poster} source={{ uri: this.state.poster }} />
                </View>
                <List style={styles.listView}>
                    {this.state.cast.map((actor, index) => (
                        <ListItem style={{ height: 60 }} key={index} onPress={() => this.gotoActor(actor.name)} avatar>
                            <Left>
                                <Thumbnail style={{ width: 55, height: 55 }} source={{ uri: actor.image || '../assets/img/CAA-Logo.png' }} />
                            </Left>
                            <Body>
                                <Text style={styles.text}>    {actor.name} </Text>
                            </Body>
                            <Right>
                                <Image style={{ width: 30, height: 30 }} source={require('../assets/img/Arrow-Forward.png')} />
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </ScrollView>
        )
    }
};
//Stylesheet
const styles = StyleSheet.create({
    posterCard: {
        backgroundColor: 'hsla(360, 100%, 100%, 1.0)',
        height: 250,
        borderRadius: 2,
        borderBottomColor: '#C11C32',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        marginBottom: 8
    },
    poster: {
        backgroundColor: 'hsla(360, 100%, 100%, 1.0)',
        height: 245,
        borderRadius: 2,
    },
    text: {
        color: '#C11C32',
        fontSize: 20,
        fontFamily: 'Al Nile'
    }
});
