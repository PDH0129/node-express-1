const express = require('express')
const app = express()
const port = 8084

app.get('/', (req, res) => {
    res.send('this is main!')
})

app.get('/add', (req, res) => {
    res.send('new todo added!')
});

app.get('/del', (req, res) => {
    res.send('selected todo deleted!')
});

app.get('/user/:id/pwd/:pwd', (req, res) => {
    const param = req.params
    console.log(param)
    console.log(param.id)

    res.json({'animal': param.id, 'password':param.pwd});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})