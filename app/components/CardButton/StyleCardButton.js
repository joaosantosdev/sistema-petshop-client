import {colors} from "../../resource";

export default class StyleCardButton {
    static viewMain = {
        width: '100%',
        height: 100,
        margin: 5,
        flex: 1,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: colors.default
    }
    static img = {
        width: 50,
        height: 50
    }
    static text = {marginTop: 5, fontWeight: 'bold', color: colors.grayDark}
}
