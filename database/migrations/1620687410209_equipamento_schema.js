'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipamentoSchema extends Schema {
  up () {
    this.create('equipamentos', (table) => {
      table.increments()
      table.integer('nome', 30).notNullable()
      table.integer('atributos', 20).notNullable()
      table.integer('raridade', 10)
      table.float('valor')
      table.integer('classe_id').references('id').inTable('classes').notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').notNullable()
      table.integer('tipo_id').references('id').inTable('tipos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('equipamentos')
  }
}

module.exports = EquipamentoSchema
