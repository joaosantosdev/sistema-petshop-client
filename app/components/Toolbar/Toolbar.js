import React from 'react'
import {View, Text, Image, StatusBar, ScrollView,TouchableOpacity} from 'react-native'
import {colors} from "../../resource";

export default class Toolbar extends React.PureComponent {
    render() {
        return (
            <View
                style={{height: 70,flexDirection:'row', backgroundColor: colors.default, alignItems: 'center', justifyContent: 'center'}}>

                    <TouchableOpacity onPress={e=>this.props.navigation.goBack()} style={{
                        height: 50,
                        width: 50,
                        marginLeft: 15,
                        position:'absolute',
                        left:5,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius: 50,
                        backgroundColor: colors.gray
                    }}>
                        <Image style={{height:30,width:30}} source={require('../../assets/imgs/voltar.png')}/>
                    </TouchableOpacity>
                <StatusBar backgroundColor={colors.default}/>
                    <View style={{flex: 1,alignItems:'center'}}>
                        <Text style={{fontSize:18,color:colors.primary,fontWeight:'bold'}}>{this.props.title}</Text>
                    </View>



            </View>
        )
    }
}
