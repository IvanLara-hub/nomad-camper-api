const nodemailer = require("nodemailer");
const template = require("./mailtemplate");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASSWORD,
  },
});

module.exports.sendBudgetConfirmation = (email) => {
  transporter.sendMail({
    from: `info@camperslocas.com <${process.env.NM_USER}>`,
    to: email,
    subject: "Aquí tienes tu presupuesto",
    html: template.generateEmail(),
  });
};
