import React from 'react'
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native'
import {colors, styles} from "../../resource";
import {Pet} from "../../models/Pet";
import firebase from "firebase";
import LoginScreen from "../../screens/login-screen/login-screen";

export default class PetCard extends React.PureComponent {
    getStyleImg = (pet) => {
        if (pet.foto == null) {
            return {width: 70, height: 70}
        }
        return {width: 90, height: 90, borderRadius: 10000}
    }

    render() {
        let pet: Pet = this.props.pet
        return (
            <View style={{
                marginBottom: 10,
                width: '100%',
                flexDirection: 'row',
                height: 130,
                backgroundColor: colors.default,
                borderRadius: 10
            }}>
                <View style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        borderWidth: 2,
                        borderRadius: 100,
                        margin: 10,
                        padding: pet.foto ? 0 : 10,
                        borderColor: colors.primary
                    }}>
                        <Image style={this.getStyleImg(pet)}
                               source={pet.foto ? {uri: pet.foto} : require('../../assets/imgs/dog.png')}/>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: colors.grayDark}}>Nome: <Text
                            style={{fontWeight: 'normal'}}>{pet.nome}</Text></Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: colors.grayDark}}>Porte: <Text
                            style={{fontWeight: 'normal'}}>{pet.porte.nome}</Text></Text>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: colors.grayDark}}>Tipo: <Text
                            style={{fontWeight: 'normal'}}>{pet.tipo.nome}</Text></Text>
                    </View>
                </View>
                <View style={{padding: 10, justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={e=>this.remover()}>
                    <Image style={{width: 25, height: 25}} source={require('../../assets/imgs/delete.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={e=>this.edit()}>
                        <Image style={{width: 25, height: 25}} source={require('../../assets/imgs/edit.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    edit = ()=>{
        this.props.navigation.push('NovoPet',{pet:this.props.pet})
    }
    remover = () =>{
        ToastAndroid.show('Pet removido com sucesso!',ToastAndroid.SHORT)
        firebase.database().ref('usuarios').child(LoginScreen.usuario).child('pets').child(this.props.pet.id).remove()
    }
}
