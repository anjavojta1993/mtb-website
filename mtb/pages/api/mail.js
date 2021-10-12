import sgMail from '@sendgrid/mail';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function sendMail(req, res) {
  const body = JSON.parse(req.body);
  console.log('body', body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
`;

  await sgMail
    .send({
      to: 'anja.vojta@gmail.com',
      from: 'systemischercoachmtb@gmail.com',
      subject: 'Neue Nachricht Systemischer Coach!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}
