
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StackNavigation} from "react-stack-navigation";
import HomeScreen from './app/screens/home-screen/home-screen';
import ChatScreen from './app/screens/chat-screen'
import LoginScreen from './app/screens/login-screen/login-screen';
import MeusPetsScreen from './app/screens/meus-pets-screen';
import NovoPetScreen from './app/screens/novo-pet-screen/novo-pet-screen'
import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCriynyfJ-zNle2zkU8pSkhexi510JoopE",
    authDomain: "petshop-bff57.firebaseapp.com",
    databaseURL: "https://petshop-bff57.firebaseio.com",
    projectId: "petshop-bff57",
    storageBucket: "petshop-bff57.appspot.com",
    messagingSenderId: "290524381499",
    appId: "1:290524381499:web:4346f44e44689c6f29b71e"
};

firebase.initializeApp(firebaseConfig);
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CriarContaScreen from "./app/screens/criar-conta-screen/criar-conta-screen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer >
            <Stack.Navigator  screenOptions={{
                headerShown: false
            }} initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}

                />
                <Stack.Screen
                    name="CriarConta"
                    component={CriarContaScreen}

                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen
                    name="MeusPets"
                    component={MeusPetsScreen}

                />
                <Stack.Screen
                    name="Chat"
                    component={ChatScreen}

                />
                <Stack.Screen
                    name="NovoPet"
                    component={NovoPetScreen}
                    options={{title: 'Welcome'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
AppRegistry.registerComponent(appName, () => MyStack);
