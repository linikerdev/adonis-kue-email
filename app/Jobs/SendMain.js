'use strict'
const EmailController = use('App/Controllers/Http/EmailController')

class SendMain {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SendMain-job'
  }

  // This is where the work is done.
  async handle (data) {
    setTimeout(() => {
      let email = new EmailController()
      email.index()
        .then((res) => 'enviado com sucesso')
        .catch((res) => 'Erro ao enviar')
    }, 3000)
    return 'teste'
  }
}

module.exports = SendMain

