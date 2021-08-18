'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Usuario extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nickname: 'required|max:20|min:1|unique:usuarios,nickname',
      nome_familia: 'required|max:20|min:1|unique:usuarios,nome_familia',
      email: 'required|email|unique:usuarios,email',
      senha: "required"
    }
  }
}

module.exports = Usuario
