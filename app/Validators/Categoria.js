'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Categoria extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:20|min:1|unique:categoria,nome',
      
    }
  }
}

module.exports = Categoria
