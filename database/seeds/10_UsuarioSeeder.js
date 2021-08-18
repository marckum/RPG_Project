'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')

class UsuarioSeeder {
  async run () {
    await Usuario.createMany([
      {nickname: 'MarckUm',
      nome_familia: 'PrimeUmbra',
      email: 'prime@gmail.com',
      senha: 1111111},

      {nickname: 'MarckDois',
      nome_familia: 'Shadow',
      email: 'shadow@gmail.com',
      senha: 1111111}
    ])
  }
}

module.exports = UsuarioSeeder
