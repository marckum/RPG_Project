'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Equipamento extends Model {

    static getCampos(){
        return['nome', 
               'atributos', 
               'raridade', 
               'valor', 
               'classe_id', 
               'categoria_id', 
               'tipo_id']
    }

    tipo(){
        return this.belongsTo('App/Models/Tipo')
    }
    classe(){
        return this.belongsTo('App/Models/Classe')
    }
    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }

}

module.exports = Equipamento
