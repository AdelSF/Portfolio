const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { SMTPClient } = require('emailjs')
// import { SMTPClient } from 'emailjs';

app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/email', function (req, res, next) {
    const { firstname, lastname, phonenum, email, gender, porpose, experience, style, conditions } = req.body
    const client = new SMTPClient({
        user: 'pakrad.adel@gmail.com',
        password: 'adel000151210',
        host: 'smtp.gmail.com',
        ssl: true
    });

    const from = `Contact Form`
    const text = `${firstname} ${lastname} ${phonenum} ${email} ${gender} ${porpose} ${experience} ${style} ${conditions} `
    client.send({
        text,
        from,
        to: 'adelpakrad@gmail.com',
        cc: '',
        subject: "Majid"
    }, (err, message) => {
        if(err) console.log(err)
    })
    res.end()
})

app.listen(3000)