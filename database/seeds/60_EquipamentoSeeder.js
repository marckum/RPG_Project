'use strict'

/*
|--------------------------------------------------------------------------
| EquipamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Equipamento = use('App/Models/Equipamento')

class EquipamentoSeeder {
  async run () {
    await Equipamento.createMany([
      {nome: 'Espada de uma mão', 
      atributos: 'ATK 50',
      raridade:'comum',
      valor: '1000',
      classe_id: 1,
      categoria_id: 2,
      tipo_id: 1},

      {nome: 'Esucudo de madeira', 
      atributos: 'DEF 50',
      raridade:'comum',
      valor: '1000',
      classe_id: 1,
      categoria_id: 2,
      tipo_id: 2},

      {nome: 'Espada Longa', 
      atributos: 'ATK 100',
      raridade:'comum',
      valor: '2000',
      classe_id: 1,
      categoria_id: 2,
      tipo_id: 3},

      {nome: 'Peitoral de Couro', 
      atributos: 'DEF 50',
      raridade:'comum',
      valor: '1500',
      classe_id: 1,
      categoria_id: 1,
      tipo_id: 5},      
      
      
    ])
  }
}

module.exports = EquipamentoSeeder
