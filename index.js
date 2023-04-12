import express from 'express'
import loginroutres from '../idealsetup/src/routes/login.route.js'

var app= express()
app.use('/auth',loginroutres);

app.listen(3000)