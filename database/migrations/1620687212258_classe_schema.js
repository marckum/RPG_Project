'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClasseSchema extends Schema {
  up () {
    this.create('classes', (table) => {
      table.increments()

      table.string('nome', 30).notNullable()
      table.string('funcao', 30)

      table.timestamps()
    })
  }

  down () {
    this.drop('classes')
  }
}

module.exports = ClasseSchema
