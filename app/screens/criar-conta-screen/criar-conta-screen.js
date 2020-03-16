import React from 'react';
import {colors, styles} from '../../resource';
import {View, Text, StatusBar, TextInput, TouchableOpacity, ScrollView,Alert,Image,ToastAndroid,ActivityIndicator} from 'react-native';
import Input from "../../components/Input/Input";
import Toolbar from "../../components/Toolbar/Toolbar";
import Select from "../../components/Input/Select";
import Button from "../../components/Button/components";
import firebase from "firebase";
import {AuthHelper} from "../../helpers/AuthHelper";
export default class CriarContaScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            rsenha: '',
            telefone: '',
            nome: '',
            errors: {}
        }
    }

    onChangeInput = (text, name) => {
        const newState = {}
        newState[name] = text
        this.setState(newState)
    }
    validar = () => {
        const errors = {}
        let notError = true;
        if(this.state.nome.trim() === ''){
            errors['nome'] = 'Campo obrigatório'
            notError = false
        }
        if (this.state.email.trim() === '') {
            errors['email'] = 'Campo obrigatório'
            notError = false
        }
        if(this.state.senha.trim()  !== this.state.rsenha.trim()){
            errors['senha'] = 'Senhas não correspondem'
            errors['rsenha'] = 'Senhas não correspondem'
            notError = false
        }
        if (this.state.senha.trim() === '') {
            errors['senha'] = 'Campo obrigatório'
            notError = false
        }
        if (this.state.senha.trim().length < 8) {
            errors['senha'] = 'Senha deve tem 8 caracteres ou mais'
            errors['rsenha'] = 'Senha deve tem 8 caracteres ou mais'
            notError = false
        }

        if (this.state.telefone.trim() === '') {
            errors['telefone'] = 'Campo obrigatório'
            notError = false
        }
        if(!notError){

            this.setState({
                errors:errors,
                loading:false
            })
        }
        return notError
    }
    criarConta = () => {
        this.setState({errors:{},loading:true},()=>{
            if (this.validar()) {
                const usuarioAuth = firebase.auth();
                const usuarios = firebase.database().ref('usuarios')
                const {email,senha,telefone,nome} = this.state
                usuarioAuth.createUserWithEmailAndPassword(email,senha).then(e=>{
                    usuarios.child(AuthHelper.removerCaracteres(  43email.toString().toLocaleLowerCase())).set({
                        email:email.toString().toLocaleLowerCase(),telefone,nome,administrador:false
                    }).then(e=>{
                        Alert.alert('Sucesso','Usuário cadastrado com sucesso.')
                        this.setState({
                            loading:false,
                            email:'',
                            senha:'',
                            rsenha:'',
                            telefone:'',
                            nome:'',
                            errors:{}
                        })
                    }).catch(error=>{
                        Alert.alert('Erro','Fale com o suporte.')
                        this.setState({loading:false})
                    })
                }).catch(error=>{
                    if(error.code === 'auth/email-already-in-use'){
                        Alert.alert('Erro','Email já possui cadastro')
                    }else if(error.code === 'auth/invalid-email'){
                        Alert.alert('Erro','Email inválido')
                    }else{
                        Alert.alert('Erro','Erro desconhecido')
                    }
                    this.setState({loading:false})
                })
            }
        })

    }
    static usuario = ""
    disabled = () =>{
        return <View style={{position:'absolute',width:'100%',height:'100%',elevation:100,zIndex:100}}>

        </View>
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {
                    this.state.loading?this.disabled():null
                }
                <Toolbar navigation={this.props.navigation} title='Criar Conta'/>
                <ScrollView style={{flex: 1, backgroundColor: colors.gray}}>
                    <View style={{padding: 20}}>
                        <Input
                            value={this.state.nome}
                            onChangeText={this.onChangeInput}
                            name={'nome'}
                            label='Nome'

                            error={this.state.errors.nome}
                        />
                        <Input
                            value={this.state.email}
                            onChangeText={this.onChangeInput}
                            name={'email'}
                            label='Email'

                            error={this.state.errors.email}
                        />

                        <Input
                            value={this.state.senha}
                            onChangeText={this.onChangeInput}
                            name={'senha'}

                            secureTextEntry={true}
                            error={this.state.errors.senha}
                            label='Senha'
                        />

                        <Input
                            value={this.state.rsenha}
                            onChangeText={this.onChangeInput}
                            name={'rsenha'}

                            error={this.state.errors.rsenha}
                            secureTextEntry={true}
                            label='Confirmar senha'
                        />
                        <Input
                            value={this.state.telefone}
                            onChangeText={this.onChangeInput}
                            name={'telefone'}
                            label='Telefone'

                            error={this.state.errors.telefone}
                            keyboardType={'number-pad'}
                        />
                        <Button
                            onPress={this.criarConta}

                            bg='danger'
                            round={true}
                            radius={10}
                            title={this.state.loading?'Criando...':'Criar Conta'}/>
                        {
                            this.state.loading?this.loading():null
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }

    loading = () =>{
        return   <View style={{marginTop:20}}>
            <ActivityIndicator color={colors.primary}  size={50}/>
        </View>
    }
}
