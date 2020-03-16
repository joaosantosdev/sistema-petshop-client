import Color from "./colors";

const colors = Color.colors

export class Style {
    constructor() {
        console.log(colors)

    }


    static styles = {
        input: {
            width: '100%',
            fontSize: 20,
            paddingLeft:20,
            borderRadius: 10,
            height: 45,
            marginBottom:10,
            color: colors.grayDark,
            backgroundColor: colors.default
        }
    }
}
