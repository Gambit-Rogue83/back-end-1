//add required files
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json()) //calls json to use objects correctly
app.use(cors())

// ENDPOINTS //
app.get('/api/users', (req, res) => {
    let friends = ['CamCam', 'JoeJoe', 'B-roney', 'Mr. Williams']
    res.status(200).send(friends)
})

app.get('/weather/:temperature', (req, res) => {
    const {temperature} = req.params
    const phrase = `<h3>It was ${temperature} today</h3>`
    res.status(200).send(phrase)
})

// LISTEN //
app.listen(4000, () => console.log('Server running on port 4000!'))
