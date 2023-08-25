const nodemailer = require("nodemailer");
import { SendMailOptions } from "../interface/mailler";
const sendMail = async ({ email, html, subject }: SendMailOptions) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "hungtuongcode@gmail.com", // generated ethereal user
            pass: "didprvawsylysjkb", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Hung hoc nodejs 👻" <no-relply@hung.com>', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
    });

    return info;
};

module.exports = sendMail;
