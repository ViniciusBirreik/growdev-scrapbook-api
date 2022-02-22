import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/recados', (request: Request, response: Response) => {
    const {...recados} = request.query
    
})

app.listen(4040, () => {
    console.log('servidor rodando')
})