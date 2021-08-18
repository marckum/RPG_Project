'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Tipo extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:20|min:1|unique:tipos,nome',
      
    }
  }
}

module.exports = Tipo
