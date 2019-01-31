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

    const data = { test: 'data' } // Data to be passed to job handle
    const priority = 'normal' // Priority of job, can be low, normal, medium, high or critical
    const attempts = 1 // Number of times to attempt job if it fails
    const remove = true // Should jobs be automatically removed on completion
    const jobFn = job => { // Function to be run on the job before it is saved
      job.backoff()
    }
    const job = kue.dispatch(Job.key, data, { priority, attempts, remove, jobFn })
    
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
