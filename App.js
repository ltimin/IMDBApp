import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Root } from 'native-base';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Home from './screens/Home.js';
import Actor from './screens/Actor.js';
import Movie from './screens/Movie.js';
import ActorBio from './screens/ActorBio.js';
import MovieList from './screens/MovieList.js';
import Cast from './screens/Cast.js';
import Trailer from './screens/Trailer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Root>
          <Routes />
        </Root>
      </React.Fragment>
    );
  }
};
//* Navigation for the entire App *//
//Tab Navigation For Search Screen
const SearchTabs = createMaterialTopTabNavigator({
  tabActor: {
    screen: Actor,
    //Actor Tab Style
    navigationOptions: {
      tabBarLabel: 'Actor',
      headerStyle: {
        backgroundColor: 'whitesmoke',
      },
      //* End of headerStyle *//
      tabBarOptions: {
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: '#C11C32',
        inactiveTintColor: 'whitesmoke',
        indicatorStyle: {
          backgroundColor: 'whitesmoke'
        },
      }
      //* End of tabBarOptions *//
    }
    //* End of navgationOptions *//
  },
  tabMovie: {
    screen: Movie,
    navigationOptions: {
      //Movie Tab Style
      tabBarLabel: 'Movie',
      headerStyle: {
        backgroundColor: 'whitesmoke',
      },
      //* End of headerStyle *//
      tabBarOptions: {
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: '#C11C32',
        inactiveTintColor: 'whitesmoke',
        indicatorStyle: {
          backgroundColor: 'whitesmoke'
        },
      }
      //* End of tabBarOptions *//
    }
  },
});

export const DetailTabs = createMaterialTopTabNavigator({
  tabCast: {
    screen: Cast,
    //Actor Tab Style
    navigationOptions: {
      tabBarLabel: 'Cast',
      headerStyle: {
        backgroundColor: 'whitesmoke',
      },
      //* End of headerStyle *//
      tabBarOptions: {
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: '#C11C32',
        inactiveTintColor: 'whitesmoke',
        indicatorStyle: {
          backgroundColor: 'whitesmoke'
        },
      }
      //* End of tabBarOptions *//
    }
    //* End of navgationOptions *//
  },
  tabTrailer: {
    screen: Trailer,
    navigationOptions: {
      //Movie Tab Style
      tabBarLabel: 'Trailer',
      headerStyle: {
        backgroundColor: 'whitesmoke',
      },
      //* End of headerStyle *//
      tabBarOptions: {
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: '#C11C32',
        inactiveTintColor: 'whitesmoke',
        indicatorStyle: {
          backgroundColor: 'whitesmoke'
        },
      }
      //* End of tabBarOptions *//
    }
  },
});
//Style for the header on the Search Page
SearchTabs.navigationOptions = ({ navigation }) => {
  return {
    headerTitle:
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
        <View style={{ backgroundColor: '#C11C32', width: 55, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 2 }}>
          <Image style={{ width: 50, height: 25 }} source={{ uri: '../assets/img/CAA-Logo.png' }} />
        </View>
      </TouchableOpacity>,
    headerStyle: {
      backgroundColor: 'whitesmoke',
    },
    headerTintColor: '#C11C32',
  };
}
//Style for the header on MovieDetails Page
DetailTabs.navigationOptions = ({ navigation, screenProps }) => {
  const params = navigation.state.params || {};
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Search')} >
      <Image style={{ width: 20, height: 20, marginRight: 10 }} source={{ uri: '../assets/img/CAA-Logo.png' }} />
    </TouchableOpacity>,
    headerTitle:
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{params.title}</Text>,
    headerStyle: {
      backgroundColor: 'whitesmoke',
    },
    headerTintColor: '#C11C32',
  };
};
//Main App Routes/Screens
const Routes = createStackNavigator({
  Home: Home,
  Search: SearchTabs,
  Actor: Actor,
  Movie: Movie,
  ActorBio: ActorBio,
  MovieList: MovieList,
  MovieDetail: DetailTabs
});
//App Compenent Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});