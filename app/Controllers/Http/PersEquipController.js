'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PersEquip = use('App/Models/PersEquip')

/**
 * Resourceful controller for interacting with PersEquips
 */
class PersEquipController {
  /**
   * Show a list of all PersEquips.
   * GET PersEquips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return PersEquip.all()
  }

  /**
   * Render a form to be used for creating a new PersEquip.
   * GET PersEquips/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new PersEquip.
   * POST PersEquips
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = PersEquip.getCampos()
    const dados = request.only(campos)

    return await PersEquip.create(dados)
  }

  /**
   * Display a single PersEquip.
   * GET PersEquips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await PersEquip.query()
                     .where('id', params.id)
                     .first()

  }

  /**
   * Render a form to update an existing PersEquip.
   * GET PersEquips/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update PersEquip details.
   * PUT or PATCH PersEquips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const dados = await PersEquip.findOrFail(params.id)

    const campos = PersEquip.getCampos()
    const novo_campo = request.only(campos)

    user.merge(novo_campo)
    await dados.save()

    return dados
  }

  /**
   * Delete a PersEquip with id.
   * DELETE PersEquips/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const dados = await PersEquip.findOrFail(params.id)

    return await dados.delete()
  }
}

module.exports = PersEquipController
