"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "rolkaloube-com.mail.protection.outlook.com",
        port: 25,
        secure: false, // true for 465, false for other ports

        logger: true,
        debug: true,
        secureConnection: false,

        tls: {
            rejectUnAuthorized:true
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"RolkaLoube" <wordpress@rolkaloube.com>', // sender address
        to: "jmuir@rolkaloube.com", // list of receivers
        subject: "Your wordpress account is ready", // Subject line
        text: "Please click here to activate your wordpress acount", // plain text body
        html: "<b>Please click here to activate your wordpress account</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);