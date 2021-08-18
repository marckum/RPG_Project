'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersEquipSchema extends Schema {
  up () {
    this.create('pers_equips', (table) => {
      table.increments()
      table.integer('personagem_id').references('id').inTable('personagems').notNullable()
      table.integer('equipamento_id').references('id').inTable('equipamentos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pers_equips')
  }
}

module.exports = PersEquipSchema
