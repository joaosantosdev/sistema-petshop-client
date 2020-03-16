import React from 'react';
import {colors, styles} from '../../resource';
import {View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Input from "../../components/Input/Input";

export default class LoginScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        }
    }

    onChangeInput = (text, name) => {
        const newState = {}
        newState[name] = text
        this.setState(newState)
    }
    static usuario = ""

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: colors.primary}}>
                <StatusBar backgroundColor={colors.primary}/>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20}}>
                    <Text style={{fontSize: 120}}>Logo</Text>
                </View>
                <View style={{padding: 20}}>
                    <Input
                        value={this.state.email}
                        name='email'
                        onChangeText={this.onChangeInput}
                        placeholder='E-Mail'
                        style={{marginBottom: 20}}
                    />
                    <Input
                        value={this.state.senha}
                        name='senha'
                        onChangeText={this.onChangeInput}
                        placeholder='Senha'
                        secureTextEntry={true}
                        style={{marginBottom: 20}}
                    />
                    <TouchableOpacity onPress={e => {

                        this.props.navigation.push('Home');
                    }} style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: 200,

                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',

                            borderRadius: 10,
                            backgroundColor: colors.default
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: colors.primary
                            }}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Text onPress={e=>{
                            this.props.navigation.push('CriarConta');
                        }} style={{fontSize: 20, color: colors.default}}>Criar Conta</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
