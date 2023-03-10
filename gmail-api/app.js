import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

const CLIENT_ID = '606708961766-ttag6051su85n61c05rfcq6nv0kp9p0e.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04cj07yNc2vDWCgYIARAAGAQSNwF-L9IrbcQjK5s8G0GCRiGVBSw90Q4_fwmhJIz3Dhw3zjWOBgutxYSCfVFxJU5b_zqgwFtRpOE'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

/*
contentHTML = `<li>Informacion del usuario</li>`;
console.log(contentHTML)
*/
async function sendMail() {
    try {

        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'luisembonstrizzi@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const handlebarsOptions = {
            viewEngine: {
                extname: ".handlebars",
                partialsDir: path.resolve('./views'),
                defaultLayout: false
            },
            viewPath: path.resolve('./views'),
            extName: ".handlebars"
        }

        transport.use('compile', hbs(handlebarsOptions))

        const mailOptions = {
            from: 'Verificación <luisembonstrizzi@gmail.com>',
            to: '47205114@est.ort.edu.ar',
            subject: 'Verificación',
            template: 'email'
        }

        const result = await transport.sendMail(mailOptions)

        return result
        
    } catch (error) {
        return error
    }
}

sendMail().then(result => console.log('Email sent...', result)).catch(error => console.log(error.message))