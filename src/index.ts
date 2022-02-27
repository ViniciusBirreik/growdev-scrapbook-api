import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

const recados: any = []

app.post('/recados', (request: Request, response: Response) => {
    const {recado} = request.body
    
    recados.push(recado)
    response.status(201).json({
        mensagem: "Recado adicionado",
        item: recado,
        recados
    })
})

app.listen(4040, () => {
    console.log('servidor rodando')
})