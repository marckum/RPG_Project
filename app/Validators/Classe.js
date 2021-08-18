'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Classe extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:20|min:1|unique:classes,nome',
      
    }
  }
}

module.exports = Classe
