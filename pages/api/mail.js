const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function sendMail(req, res) {
  const body = req.body;
  console.log('body', body);

  const message = `
  <b>Name:</b> ${body.name}\r\n </br>
  <b>Email:</b> ${body.email}\r\n </br>
  <b>Message:</b> ${body.message} </br>
`;

  await mail
    .send({
      to: 'marlies.brunner@aon.at',
      from: 'info@mt-brunner.at',
      subject: 'Neue Nachricht Systemischer Coach!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    })
    .then(() => {
      res.status(200).json({ status: 'Ok' });
    })
    .catch((error) => {
      console.error(error);
    });
}
