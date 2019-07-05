const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'sdharmendra8858@gmail.com',
        subject: 'test2',
        text: `Hello ${name}, we are testing again`
    })
}

const sendCancilationEmail = ( email, name) => {
    sgMail.send({
        to: email,
        from: 'sdharmendra8858@gmail.com',
        subject: 'cancilation mail',
        text: `hello ${name}, this is to inform you that you have been removed from the profile.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancilationEmail
}