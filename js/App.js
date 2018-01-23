/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginPage from "./pages/LoginPage";
import RootPage from './pages/RootPage';


const RootNavigator = StackNavigator({
    Home: {
        screen: RootPage
    },
    Login: {
        screen: LoginPage,
        navigationOptions: {
            headerTitle: '登录',
        }
    }
});

export default RootNavigator;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//       backgroundColor: '#FFFFFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
