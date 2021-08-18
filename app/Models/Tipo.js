'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tipo extends Model {

    static getCampos(){
        return['nome']
    }

    equipamentos(){
        return this.hasMany('App/Models/Equipamento')
    }
}

module.exports = Tipo
