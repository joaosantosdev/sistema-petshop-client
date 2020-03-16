import React from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {colors} from '../resource';
import {buttonDefault, buttonOutline, titleDefault, titleOutline} from './styles';


export default class Button extends React.PureComponent {
    titleDefault = 'Click';

    constructor(props) {
        super(props);
    }

    getTitle = () => {
        return this.props.title ? this.props.title : this.titleDefault;
    };
    bgButton = (style, type, bg) => {
        style = {...style};
        style[type == 'outline' ? 'borderColor' : 'backgroundColor'] = bg;
        return style;
    };
    getButtonStyle = () => {
        let {bg, round, radius, width, height, type, borderSize, borderColor} = this.props;
        let style = type == 'outline' ? buttonOutline : buttonDefault;
        let bgIsDefault = colors[bg];
        if (bg) {
            style = this.bgButton(style, type, bgIsDefault ? bgIsDefault : bg);
        }
        if (round) {
            style = {...style, borderRadius: radius ? radius : 10000};
        }
        if (width) {
            style = {...style, width: width};
        }
        if (height) {
            style = {...style, height: height};
        }
        if (borderSize) {
            style = {...style, borderWidth: borderSize};
        }
        if (borderColor) {
            style = {...style, borderColor: borderColor};
        }

        return style;
    };
    getTitleStyle = () => {
        let {color, size, bg, type} = this.props;
        let isOutline = type == 'outline';
        let style = isOutline ? titleOutline : titleDefault;
        if (isOutline) {
            if (bg) {
                style = {...style, color: bg};
                let bgIsDefault = colors[bg];
                if (bgIsDefault) {
                    style = {...style, color: bgIsDefault};
                }
            }
        }
        if (color) {
            style = {...style, color: color};
            let bgIsDefault = colors[color];
            if (bgIsDefault) {
                style = {...style, color: bgIsDefault};
            }
        }
        if (size) {
            style = {...style, fontSize: size};
        }
        return style;
    };
    getTouchable = (button) => {
        let {width, touchType} = this.props;

            return <TouchableOpacity onPress={this.props.onPress} style={{width: width ? width : '100%'}}>{button}</TouchableOpacity>;

        return <TouchableHighlight  onPress={this.props.onPress} style={{width: width ? width : '100%'}}>{button}</TouchableHighlight>;
    };

    render() {
        const {getTouchable} = this;
        return getTouchable(
            <View style={[this.getButtonStyle(),this.props.styleButton]}>
                <Text style={this.getTitleStyle()}>{this.getTitle()}</Text>
            </View>,
        );
    }
}
