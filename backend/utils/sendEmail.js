import nodeMailer from "nodemailer";//it is node module allows us to send mail from your server easily

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,//on this email we send mail//options.email
    subject: options.subject,
    text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
  };
  await transporter.sendMail(mailOptions);
};
