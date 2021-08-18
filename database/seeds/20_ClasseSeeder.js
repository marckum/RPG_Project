'use strict'

/*
|--------------------------------------------------------------------------
| ClasseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Classe = use('App/Models/Classe')

class ClasseSeeder {
  async run () {
    await Classe.createMany([
      {nome: 'Guerreiro', funcao:'Tank'},
      {nome: 'Mago', funcao: 'Dps'},
      {nome: 'Sacerdotisa', funcao: 'Healer'},
      {nome: 'Arqueiro', funcao: 'Dps'},
      {nome: 'Paladino', funcao: 'Tank/Healer'}
    ])
  }
}

module.exports = ClasseSeeder
