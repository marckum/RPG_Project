'use strict'

/*
|--------------------------------------------------------------------------
| PersonagemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Personagem = use('App/Models/Personagem')

class PersonagemSeeder {
  async run () {
    await Personagem.createMany([
      {nome_personagem: 'Lione', 
      constelacao: 'Leo', 
      usuario_id: 1, 
      classe_id: 1},

      {nome_personagem: 'Aether', 
      constelacao: 'Gemini', 
      usuario_id: 2, 
      classe_id: 2},

    ])
  }
}

module.exports = PersonagemSeeder
