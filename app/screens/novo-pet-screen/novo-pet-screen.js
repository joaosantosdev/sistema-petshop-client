import React from 'react'
import {View, Text, StatusBar, TextInput, TouchableOpacity,ToastAndroid,Alert, ScrollView, Image} from 'react-native'
import Toolbar from "../../components/Toolbar/Toolbar";
import {colors, styles} from "../../resource";
import Input from "../../components/Input/Input";
import ImagePicker from 'react-native-image-picker';
import Select from "../../components/Input/Select";
import Button from "../../components/Button/components";
import {Pet} from "../../models/Pet";
import firebase from "firebase";
import LoginScreen from "../login-screen/login-screen";

export default class NovoPetScreen extends React.Component {
    constructor(props) {
        super(props);
        let pet = new Pet()
        if(props.route.params != undefined && props.route.params.pet != undefined){
            pet = props.route.params.pet;
        }
        this.state = {
            pet,
            image: pet.foto?{uri:pet.foto}:null,
            borderImg:pet.foto?1000000:0
        }
    }

    onChange = (text, name) => {
        let pet = this.state.pet
        pet[name] = text;
        console.log(pet)
        this.setState({pet})
    }
    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {

            if (response.didCancel) {
                this.setState({image:null,borderImg:0})
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                this.setState({image:null,borderImg:0})
            } else {
                const image ={uri:'data:image/png;base64,'+response.data}
                this.setState({
                    image,
                    borderImg:100000,
                });
            }
        });


    }
    salvar = () => {
        const pet = this.state.pet
        if(pet.nome.toString().trim() == ""){
            Alert.alert('Campo Obrigatório','O campo nome é obrigatório!');
        }
        var pets = firebase.database().ref('usuarios').child(LoginScreen.usuario).child('pets')


        if(this.state.image != null){
            pet.foto = this.state.image.uri;
        }


        if(pet.id != null){
            pets.child(pet.id).update(pet);
            ToastAndroid.show('Pet atualizado com sucesso!',ToastAndroid.SHORT)
            this.props.navigation.goBack()
            return;
        }

        let id = 'pet-'+Date.now()+'-'+parseInt(Math.random(100)*100)
        pet.id = id;
        ToastAndroid.show('Pet cadastrado com sucesso!',ToastAndroid.SHORT)
        this.props.navigation.goBack()
        pets.child(id).set(this.state.pet)

    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Toolbar title='Novo Pet'/>
                <ScrollView style={{flex: 1, backgroundColor: colors.gray}}>
                    <View style={{padding: 20}}>
                        <View style={{alignItems: 'center', marginBottom: 30, marginTop: 20}}>
                            <TouchableOpacity onPress={this.launchCamera} style={{
                                borderRadius: 100,
                                padding: 10,
                                width: 90,
                                height: 90,
                                backgroundColor: colors.default
                            }}>
                                <Image style={{width: 70, height: 70,borderRadius:this.state.borderImg}} source={this.state.image != null?this.state.image:require('../../assets/imgs/dog.png')}/>
                            </TouchableOpacity>
                        </View>

                        <Input
                            value={this.state.pet.nome}
                            onChangeText={this.onChange}
                            name={'nome'}
                            label='Nome'
                        />
                        <Select
                            itemSelected={this.state.pet.tipo.id}
                            data={[
                                {id: 1, nome: 'Cachorro'},
                                {id: 2, nome: 'Gato'},
                                {id: 3, nome: 'Pássaro'},
                                {id: 4, nome: 'Outros'}
                            ]}
                            name={'tipo'}
                            onChange={this.onChange}
                            label='Tipo'
                            attrId={"id"}
                            attrName={'nome'}
                        />
                        <Select
                            itemSelected={this.state.pet.porte.id}
                            name={'porte'}
                            onChange={this.onChange}
                            data={[
                                {id: 1, nome: 'Pequeno'},
                                {id: 2, nome: 'Médio'},
                                {id: 3, nome: 'Grande'}
                            ]}
                            label='Porte'
                            attrId={"id"}
                            attrName={'nome'}
                        />
                        <Input
                            value={this.state.pet.observacao}
                            onChangeText={this.onChange}
                            name={'observacao'}
                            label='Observação'
                        />
                        <Button
                            onPress={this.salvar}
                            styleButton={{marginTop: 15}}
                            bg='danger'
                            round={true}
                            radius={10}
                            title='Salvar'/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
