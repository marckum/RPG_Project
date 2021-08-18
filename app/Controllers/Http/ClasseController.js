'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Classe = use('App/Models/Classe')

/**
 * Resourceful controller for interacting with classes
 */
class ClasseController {
  /**
   * Show a list of all classes.
   * GET classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Classe.all()

  }

  /**
   * Render a form to be used for creating a new classe.
   * GET classes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new classe.
   * POST classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Classe.getCampos()
    const dados = request.only(campos)

    return await Classe.create(dados)

  }

  /**
   * Display a single classe.
   * GET classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const dados = await Classe.findOrFail( params.id)

    return dados
  }

  /**
   * Render a form to update an existing classe.
   * GET classes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update classe details.
   * PUT or PATCH classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const classe = await Classe.findOrFail(params.id)

    const campos = Classe.getCampos()
    const nova_classe = request.only(campos)

    classe.merge(nova_classe)
    await classe.save()

    return classe
  }

  /**
   * Delete a classe with id.
   * DELETE classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const classe = await Classe.findOrFail(params.id)

    return await classe.delete()

  }
}

module.exports = ClasseController
