import React from 'react'
import {View, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native'
import Toolbar from "../../components/Toolbar/Toolbar";
import {colors} from "../../resource";
import Input from '../../components/Input/Input';
import MensagemCard from '../../components/MensagemCard'
import firebase from "firebase";
import Button from "../../components/Button/components";
import LoginScreen from "../login-screen/login-screen";

export default class ChatScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mensagens: {}
        }
    }

    componentDidMount(): void {
        firebase.database().ref('mensagens').child('joao').on('value', (snapshot) => {
            let val = snapshot.val()
            if (val == null) {
                this.setState({mensagens: {}})
            } else {
                this.setState({mensagens: val},()=>{
                    this.scroll.scrollToEnd({animated: true});
                })
            }

        })
    }

    enviarMensagem = (text) => {

        let a = firebase.database().ref('mensagens').child('joao').push().set({
            mensagem: this.state.mensagem,
            timestamp: Date.now(),
            usuario_nome: LoginScreen.usuario,
            usuario: LoginScreen.usuario
        }).then(e=>{
            this.scroll.scrollToEnd({animated: true});
        })
        this.setState({mensagem:''})


    }

    render() {
        const mensagens = this.state.mensagens
        return (
            <View style={{flex: 1}}>
                <Toolbar title='Suporte'/>
                <ScrollView ref={node => this.scroll = node} style={{flex: 1, backgroundColor: colors.gray}}>
                    <SafeAreaView style={{padding: 20}}>
                        {
                            Object.keys(mensagens).map(key => {
                                return <MensagemCard usuarioNome={mensagens[key].usuario_nome}
                                                     mensagem={mensagens[key].mensagem}
                                                     padding={mensagens[key].usuario != LoginScreen.usuario ? 'right' : 'left'}/>
                            })
                        }
                    </SafeAreaView>
                </ScrollView>
                <View style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    backgroundColor: colors.gray,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <Input
                        value={this.state.mensagem}
                        styleContent={{width: '100%', flex: 1}}
                        onChangeText={e => {
                            this.setState({mensagem: e})
                        }}
                        placeholder='Nova Mensagem'
                    />
                    <TouchableOpacity onPress={e => this.enviarMensagem()} style={{width: 35, height: 35, margin: 5}}>
                        <Image style={{width: 35, height: 35}} source={require('../../assets/imgs/send.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
