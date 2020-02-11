import express from 'express'
import cors  from 'cors'
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('short'))

app.get('/', (req, res) => {
    res.status(200).send("Ok")
})

app.listen(3333)