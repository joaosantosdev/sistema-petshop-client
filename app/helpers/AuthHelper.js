export class AuthHelper {

    static removerCaracteres = (email) =>{
      let newEmail =  email.split('.').join('ponto')
            .split('#').join('cifrao')
            .split('$').join('dolar')
            .split('[').join('parentesesLeft')
            .split('[').join('parentesesRight')
        return newEmail
    }

}
