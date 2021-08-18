'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Classe extends Model {
    static getCampos(){
        return['nome', 'funcao']
    }

}

module.exports = Classe
