'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with kues
 */

const kue = use('Kue')
const Job = use('App/Jobs/sendMain')

class KueController {
  /**
   * Show a list of all kues.
   * GET kues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const data = { test: 'data' } // Dados a serem passados ​​para o identificador de trabalho
    const priority = 'normal' // Prioridade do trabalho, pode ser baixa, normal, média, alta ou crítica
    const attempts = 1 // Número de vezes para tentar trabalho se falhar
    const remove = true // Os trabalhos devem ser removidos automaticamente após a conclusão

    const job = kue.dispatch(Job.key, data, { priority, attempts, remove })

    response.json({
      data: job
    })
  }

  /**
   * Render a form to be used for creating a new kue.
   * GET kues/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new kue.
   * POST kues
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single kue.
   * GET kues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing kue.
   * GET kues/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update kue details.
   * PUT or PATCH kues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a kue with id.
   * DELETE kues/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = KueController
