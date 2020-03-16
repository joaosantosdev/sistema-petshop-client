import React from 'react'
import {ScrollView, StatusBar, Text, TextInput, TouchableOpacity, Image, View} from "react-native";
import {colors, styles,string} from "../../resource";
import CardButton from "../../components/CardButton/CardButton";
import PromoCard from "../../components/PromoCard/PromoCard";

export default class HomeScreen extends React.PureComponent {
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: colors.gray}}>
                <StatusBar backgroundColor={colors.primary}/>
                <View style={{backgroundColor: colors.primary, height: 200}}>
                   <View style={{alignItems:'flex-end',height: 200,padding:20}}>
                       <View style={{ flexDirection:'row-reverse',justifyContent:'center',alignItems:'center',marginTop:10}}>

                           <Image style={{
                               width:70,
                               height:70,
                               borderRadius:100,
                           }} source={require('../../assets/imgs/user.jpg')}/>
                           <Text style={{color:colors.default,fontSize:18,marginRight:10}}>Olá, Bolsonaro</Text>
                       </View>
                   </View>
                </View>
                <View style={{marginTop: -30,padding:10}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CardButton
                            onPress={e=>{
                                this.props.navigation.push('NovoPet')
                            }}
                            text={string.label_novo_pet}
                            img={require('../../assets/imgs/novo_pet.png')}
                        />
                        <CardButton
                           onPress={e=>{
                            this.props.navigation.push('MeusPets')
                        }}
                            text={string.label_meus_pets}
                            img={require('../../assets/imgs/meus_pets.png')}
                        />
                        <CardButton
                           onPress={e=>{
                                this.props.navigation.push('NovoPet')
                            }}
                            text={string.label_novo_servico}
                            img={require('../../assets/imgs/novo_servico.png')}
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <CardButton
                            text={string.label_agendamento}
                            img={require('../../assets/imgs/agendamento.png')}
                        />
                        <CardButton
                            text={string.label_servicos}
                            img={require('../../assets/imgs/servicos.png')}
                        />
                        <CardButton
                           onPress={e=>{
                            this.props.navigation.push('Chat')
                        }}
                            text={string.label_fale_conosco}
                            img={require('../../assets/imgs/chat.png')}
                        />
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={{flex:1,flexDirection:'row',padding:5}}>
                            <PromoCard/>
                            <PromoCard/>
                            <PromoCard/>
                            <PromoCard/>
                            <PromoCard/>
                            <PromoCard/>
                            <PromoCard/>
                        </View>
                    </ScrollView>
                </View>

            </ScrollView>
        )
    }
}
