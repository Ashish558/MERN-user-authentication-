const nodemailer = require("nodemailer");

require("dotenv").config()

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            port: 465,
            secure: true,
            auth: {    
                user: process.env.USER,
                pass: process.env.PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
        });
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;
