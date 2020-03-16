import {colors} from '../resource';

export const buttonDefault ={
    width:'100%',
    height:30,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    padding:20
}
export const buttonOutline ={
   ...buttonDefault,
    backgroundColor: undefined,
    borderWidth:2,
    borderColor:colors.primary
}
export const titleDefault = {
    fontSize: 18,
    color: colors.default,
}
export const titleOutline = {
    fontSize: 18,
    color: colors.primary,
}
