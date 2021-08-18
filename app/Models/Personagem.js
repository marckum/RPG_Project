'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Personagem extends Model {
    
    static getCampos(){
        return['nome_personagem', 
               'constelacao',
               'usuario_id',
               'classe_id']
    }

    classe(){
        return this.belongsTo ('App/Models/Classe')
    }

    usuario(){
        return this.belongsTo ('App/Models/Usuario')
    }
    equipamentos(){
        return this.belongsToMany ('App/Models/Equipamento').pivotTable('pers_equips')
    }


}

module.exports = Personagem
