'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonagemSchema extends Schema {
  up () {
    this.create('personagems', (table) => {
      table.increments()

      table.string('nome_personagem', 30).notNullable()
      table.string('constelacao', 30)
      table.integer('usuario_id').references('id').inTable('usuarios').notNullable()
      table.integer('classe_id').references('id').inTable('classes').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('personagems')
  }
}

module.exports = PersonagemSchema
