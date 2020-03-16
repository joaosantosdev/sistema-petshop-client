import React from 'react'
import {View, Text, Image, TextInput, Picker, ScrollView, TouchableOpacity} from 'react-native'
import {colors, styles} from "../../resource";
import Input from "./Input";


export default class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemSelected: null,
            text: '',
            hide: true,
            ...props
        }
    }

    countItemRender = 0

    onPressItem = (e, item) => {
        const {attrName} = this.props
        this.setState({itemSelected: item, text: item[attrName], hide: true}, () => {

        })
    }
    renderItem = (item) => {
        const {attrName, attrId} = this.state;
        return <Text onPress={e => this.onPressItem(e, item)} key={item[attrId]} style={{
            width: '100%',
            marginBottom: 5,
            backgroundColor: colors.gray,
            padding: 5,
            fontSize: 18,
            borderRadius: 10
        }}>{item[attrName]}</Text>
    }

    render() {
        let data = [
            {id: 1, nome: 'Item 1'},
            {id: 2, nome: 'Item 2'},
            {id: 3, nome: 'Item 3'},
            {id: 4, nome: 'Item 4'},
            {id: 6, nome: 'Item 5'},
        ]


        return (
            <View >
                {
                    this.props.label ? <Text
                        style={{color: colors.grayDark, fontSize: 18, marginBottom: 2}}>{this.props.label}</Text> : null
                }
                <View style={{           width: '100%',
                    fontSize: 20,

                    borderRadius: 10,
                    height: 45,
                    marginBottom:10,
                    color: colors.grayDark,
                    backgroundColor: colors.default}}>
                <Picker onValueChange={item=>this.props.onChange(this.getItem(item),this.props.name)} selectedValue={this.props.itemSelected}>
                    {
                        this.props.data.map((e, key) => <Picker.Item  key={key} label={e.nome} value={e.id}/>)
                    }
                </Picker>
                </View>

            </View>
        )
    }

    getItem = (id)=>{
        let itemRetorno = {}
        this.props.data.map(item=>{
            if(item.id == id){
                itemRetorno =item
                return;
            }
        })

        return itemRetorno
    }
}
