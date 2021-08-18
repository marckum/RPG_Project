'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {

    static getCampos(){
        return['nickname',
                'nome_familia',
                'email',
                'senha']
    }

    personagems(){
        return this.hasMany ('App/Models/Personagem')
        
    }


}

module.exports = Usuario
