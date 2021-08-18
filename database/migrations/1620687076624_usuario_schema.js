'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      
      table.string('nickname', 20).notNullable()
      table.string('nome_familia', 20).notNullable()
      table.string('email', 30).notNullable()
      table.integer('senha', 10).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema
