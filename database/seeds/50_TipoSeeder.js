'use strict'

/*
|--------------------------------------------------------------------------
| TipoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Tipo = use('App/Models/Tipo')

class TipoSeeder {
  async run () {
    await Tipo.createMany([
      {nome: 'Arma Primaria'},
      {nome: 'Arma Secundaria'},
      {nome: 'Arma Despertar'},
      {nome: 'Elmo'},
      {nome: 'Peitoral'},
      {nome: 'Bota'},
      {nome: 'Luva'},
      {nome: 'Anel'},
      {nome: 'Brinco'},
      {nome: 'Amuleto'},
    ])
  }
}

module.exports = TipoSeeder
