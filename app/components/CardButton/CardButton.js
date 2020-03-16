import React from 'react'
import {colors} from "../../resource";
import {Image, Text, View, TouchableOpacity} from "react-native";
import StyleCardButton from "./StyleCardButton";

export default class CardButton extends React.PureComponent {
    render() {
        console.log(this.props)
        return (
            <TouchableOpacity style={StyleCardButton.viewMain} onPress={this.props.onPress}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image
                        style={StyleCardButton.img}
                        source={this.props.img}
                    />
                    <Text style={StyleCardButton.text}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
