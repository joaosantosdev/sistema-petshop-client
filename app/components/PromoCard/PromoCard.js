import React from 'react'
import {Image, Text, View} from "react-native";
import {colors} from "../../resource";
export default class PromoCard extends React.PureComponent{
    render(){
        return (
            <View style={{
                height:200,
                backgroundColor:colors.default,
                width:300,
                borderRadius:10,
                flexDirection:'row',
                marginRight:10

            }}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    padding:5
                }}>
                    <View style={{backgroundColor:colors.gray,borderRadius:100,width:130,height:130,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            style={{
                                width:80,
                                height:80
                            }}
                            source={require('../../assets/imgs/agendamento.png')}/>
                    </View>
                </View>

                <View style={{
                    flex:1,
                    justifyContent:'center',
                    padding:5

                }}>
                    <Text style={{fontSize:20,color:colors.grayDark}}>Serviço 1</Text>
                    <Text style={{fontSize:15,color:colors.primary}}>R$ 300,00</Text>
                    <Text style={{fontSize:12,color:colors.grayDark,textAlign:'justify',padding:3}}>Lorem ipsum lobortis quam rutrum ad iaculis porttitor, duis euismod suscipit lacinia nostra quisqt adipiscing orci ornare nunc vehicula </Text>
                </View>


            </View>
        )
    }
}
