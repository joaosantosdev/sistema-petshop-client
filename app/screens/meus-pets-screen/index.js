import React from 'react'
import {View, Text, StatusBar, SafeAreaView,TextInput, TouchableOpacity, ScrollView,Image} from 'react-native'
import Toolbar from "../../components/Toolbar/Toolbar";
import {colors, styles} from "../../resource";
import PetCard from '../../components/PetCard/PetCard'
import Input from '../../components/Input/Input';
import firebase from "firebase";
import LoginScreen from "../login-screen/login-screen";
export default class MeusPetsScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state ={
            pets:{}
        }
    }
    componentDidMount(): void {
      let pets=  firebase.database().ref("usuarios").child(LoginScreen.usuario).child('pets')
        pets.on('value',(snapshot)=>{
            if(snapshot.val() != null){
                this.setState({pets:snapshot.val()})
            }else{
                this.setState({pets:{}})
            }

        })

    }

    render(){
        return (
            <View style={{flex:1}}>
                <Toolbar navigation={this.props.navigation} title='Meus Pets'/>

                <ScrollView style={{flex: 1, backgroundColor: colors.gray}}>
                    <SafeAreaView style={{padding:20}}>
                                <Input
                                    placeholder='Pesquisar'
                                />
                        {
                            Object.keys(this.state.pets).map(key=>{
                                return <PetCard navigation={this.props.navigation} key={key} pet={this.state.pets[key]}/>
                            })
                        }
                    </SafeAreaView>
                </ScrollView>
            </View>
        )
    }
}
