import React from 'react'
import {View,Text,Image} from 'react-native'
import {colors, styles} from "../../resource";
export default class PetCard extends React.PureComponent{

    render(){
        const {padding} = this.props
        let pad = {paddingLeft:30}
        if(padding == 'right'){
           pad = {paddingRight:30}
        }
        return (
          <View style={pad}>
                            <View style={{marginBottom:15,width:'100%',backgroundColor:colors.default,borderRadius:10,padding:10}}>
                               <Text style={{color:colors.primary,fontWeight:'bold',fontSize:18}}>{this.props.usuarioNome}</Text>
                               <Text>
                                  {
                                      this.props.mensagem
                                  }
                               </Text>
                           </View>
                            </View>
        )
    }
}
