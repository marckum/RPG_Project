'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Personagem extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome_personagem: 'required|max:30|min:5|unique:personagems,nome_personagem',
      usuario_id: 'required',
      classe_id: 'required'
    }
  }
}

module.exports = Personagem
