'use strict'

const Job = use('App/Jobs/sendMain')
const Mail = use('Mail')

class EmailController {

  async index () {
    console.log('chamou envio de email')
    let d = await Mail.send('emails.notification', { name: 'liniker' }, (message) => {
      message
        .to('contato@liniker.com.br')
        .from('linikerdev@gmail.com')
        .subject('Welcome to yardstick')
    })
    console.log(d)
    return d;
  }

}

module.exports = EmailController
