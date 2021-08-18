'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PersEquip extends Model {
    
    static getCampos(){
        return['personagem_id','equipamento_id']
    }
    
}

module.exports = PersEquip
