import React, { Component } from 'react';
import { Body, Left, Right, ListItem, List, Thumbnail, Container, Content } from 'native-base';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, WebView } from 'react-native';

export default class Cast extends Component {
    state = {
        trailers: '../assets/img/Person-Grey.png',
    }
    componentWillMount() {
        const data = this.props.navigation.state.params;
        this.mapTrailer(data);
    };
    mapTrailer = (data) => {
        //Setting trailers *(Note: Need conditional statements on empty arrays.  Need to figure out a good replacement)*
        this.setState({ trailers: data.trailer })
    }
    render() {
        return (
            <ScrollView >
                <List style={{ backgroundColor: 'whitesmoke' }}>
                    {this.state.trailers.map((trailer, index) => (
                        <ListItem style={styles.listView} key={index}>
                            <Text style={styles.text}>{index + 1}      </Text>
                            <Body>
                                <WebView style={{ width: 290, height: 300 }}
                                    javaScriptEnabled={true} source={{ uri: trailer.videoUrl }} />
                            </Body>
                        </ListItem>
                    ))}
                </List>
            </ScrollView>
        )
    }
};
//Stylesheet
const styles = StyleSheet.create({
    listView: {
        backgroundColor: 'whitesmoke',
    },
    text: {
        color: '#C11C32',
        fontSize: 36,
        fontFamily: 'Al Nile',
        fontWeight: '600'
    }
});
