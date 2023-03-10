import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import hbs from 'nodemailer-express-handlebars'
import path from 'path'

export const SendVerificationEmail = async (Email) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp-relay.sendinblue.com',
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.SMTP_PASSWORD
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
            from: 'Verificación <iara.detector@gmail.com>',
            to: Email,
            subject: 'Verificación',
            template: 'email'
        }
    
        const sentEmail = await transport.sendMail(mailOptions)
        return sentEmail
    } catch (error) {
        console.log(error)
    }
}

export const SendVerificationEmailWithGmail = async (Email, id) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.SMTP_PASSWORD
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
            from: 'Verificación <iara.detector@gmail.com>',
            to: Email,
            subject: 'Verificación',
            //template: 'ForgotPassword'
            html: `"<html lang='es'> <head> <meta charset='UTF-8' /> <meta http-equiv='X-UA-Compatible' content='IE=edge' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>Document</title><style>.container {background-color: black;}h1 {color: blue;}p {color: brown;}</style></head><body> <div class='container'><h1>title</h1><p>text</p> <a href="http://localhost:5173/updatePassword/${id}"><button>Recuperar contraseña</button></a>  </div></body></html>"`
        }
    
        const sentEmail = await transport.sendMail(mailOptions)
        return sentEmail
    } catch (error) {
        console.log(error)
    }
}
export const SendVerificationEmailWithGmailApi = async (Email) => {
    try {
        const CLIENT_ID = '606708961766-ttag6051su85n61c05rfcq6nv0kp9p0e.apps.googleusercontent.com'
        const CLIENT_SECRET = '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'
        const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
        const REFRESH_TOKEN = '1//04LS7v9xNwf-PCgYIARAAGAQSNwF-L9IrQfSCazTfTF4-3K7my1wc0WN6Dv3gRBC_xrVhFw1v9ukJm8hS0UORd-4l-xJOjiq6Fts'
        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

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
                to: Email,
                subject: 'Verificación',
                template: 'email'
            }
        const sentEmail = await transport.sendMail(mailOptions)
        return sentEmail
    } catch (error) {
        console.log(error)
    }
}
