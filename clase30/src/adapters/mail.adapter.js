const { email } = require('../configs/services.config')
const transport = require('../utils/nodemailer.util')

class MailAdapter {
  async sendMessage(messageInfo) {
    await transport.sendMail({
      from: email.identifier,
      to: messageInfo.email,
      subject: 'Bienvenido a nuestro Sitio',
      html: `
          <h1>Hola ${messageInfo.name}!!!</h1>
          <div>Sigue y mira que tenemos para ti desde un adapter</div>
          <p>Y este perrito es para ti</p>
          <img src="cid:perrito" alt="Un perrito"/>
          <p>Disfrútalo</p
        <div>
        `,
      attachments: [
        {
          filename: 'perrito.jpg',
          path: process.cwd() + '/src/images/perrito.jpg',
          cid: 'perrito',
        },
      ],
    })
  }
}

module.exports = MailAdapter
