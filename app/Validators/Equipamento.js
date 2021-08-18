'use strict'

const ValidatorAbstract = use ('App/Validators/ValidatorAbstratc')

class Equipamento extends ValidatorAbstract{
  get rules () {
    return {
      // validation rules
      nome: 'required|max:20|min:1|unique:equipamentos,nome',
      atributos: 'required',
      classe_id: 'required',
      categoria_id: 'required',
      tipo_id: 'required'
    }
  }
}

module.exports = Equipamento
