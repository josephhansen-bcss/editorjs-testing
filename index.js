import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.sendFile("/src/views/index.html", { root: '.' })
})

app.get('/.js', (req, res) => {
    res.sendFile("/src/views/js/index.js", { root: '.' })
})

app.get('/.css', (req, res) => {
    res.sendFile("/src/views/css/index.css", { root: '.' })
})

app.listen(5920, () => {
    console.log('Server is running on port 5920')
})

