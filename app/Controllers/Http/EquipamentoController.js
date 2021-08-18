'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Equipamento = use('App/Models/Equipamento')

/**
 * Resourceful controller for interacting with equipamentos
 */
class EquipamentoController {
  /**
   * Show a list of all equipamentos.
   * GET equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Equipamento.all()
  }

  /**
   * Render a form to be used for creating a new equipamento.
   * GET equipamentos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new equipamento.
   * POST equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Equipamento.getCampos()
    const dados = request.only(campos)

    return await Equipamento.create(dados)

  }

  /**
   * Display a single equipamento.
   * GET equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Equipamento.query()
                           .with('classe')
                           .with('tipo')
                           .with('categoria')
                           .where('id', params.id)
                           .first()
  }

  /**
   * Render a form to update an existing equipamento.
   * GET equipamentos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update equipamento details.
   * PUT or PATCH equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = await Equipamento.findOrFail(params.id)

    const campos = Equipamento.getCampos()
    const novo_campo = request.only(campos)

    user.merge(novo_campo)
    await dados.save()

    return dados
  }

  /**
   * Delete a equipamento with id.
   * DELETE equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dados = await Equipamento.findOrFail(params.id)

    return await dados.delete()
  }
}

module.exports = EquipamentoController
