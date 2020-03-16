import React from 'react';
import LoginScreen from './app/screens/login-screen/login-screen';
import HomeScreen from "./app/screens/home-screen/home-screen";
import NovoPetScreen from "./app/screens/novo-pet-screen/novo-pet-screen";
import MeusPetsScreen from './app/screens/meus-pets-screen'
import ChatScreen from './app/screens/chat-screen'
export default class App extends React.PureComponent {
  render() {
    return <ChatScreen />;
  }
}
