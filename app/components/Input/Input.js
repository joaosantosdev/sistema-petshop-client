import React from 'react'
import {View, Text, Image, TextInput} from 'react-native'
import {colors, styles} from "../../resource";

export default class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ...props
        }
    }
    render() {
        console.log('aqui',error)
        const {props} = this
        const {label,error} = this.props
        return (
            <View style={this.props.styleContent}>
                {
                    label?<Text style={{color:colors.grayDark,fontSize:18,marginBottom:2}}>{label}</Text>:null
                }
                <TextInput

                    {...props}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChangeText={e=>this.props.onChangeText(e,this.props.name)}
                    style={[styles.input,this.props.style]}
                />
               {
                   error?<Text style={{color:colors.primary,marginTop:-10,marginLeft:2,marginBottom:10}}>{error}</Text>:null
               }
            </View>
        )
    }
}
