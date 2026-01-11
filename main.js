const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require('./models/Employess.js')

const port = 3000
mongoose.connect('mongodb://localhost:27017/company');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

const getrand = (arr) =>{
    let rand = Math.floor(Math.random()*(arr.length))
    return arr[rand]
}


let randomname = ["sam","ram","rohit","virat"]
let randomlang = ['c++','python','javascript','html']
let randomcity = ['basti','lucknow','goarakhpur','vanarasi']

app.get('/generate', async (req, res) => {

    // await Employee.deleteMany({})

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getrand(randomname),
            salary: Math.floor(Math.random()*45000),
            Language: getrand(randomlang),
            city: getrand(randomcity),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)

    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
