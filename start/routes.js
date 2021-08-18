'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(()=>{

  Route.resource('/usuarios', 'UsuarioController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Usuario'],
    ]))

Route.resource('/classes','ClasseController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Classe'],
    ]))

Route.resource('/personagems','PersonagemController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Personagem'],
    ]))

Route.resource('/categorias','CategoriaController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Categoria'],
    ]))

Route.resource('/tipos','TipoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Tipo'],
    ]))

Route.resource('/equipamentos','EquipamentoController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'Equipamento'],
    ]))

Route.resource('/persequip','PersEquipController')
     .apiOnly()
     .validator(new Map([
      [['store', 'update'], 'PersEquip'],
    ]))
})//.middleware('auth')

