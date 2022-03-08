import express, { Request, Response } from 'express'
import cors from 'cors'
import { request } from 'http'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

const rDescricao: any = []
const rDetalhes: any = []

app.post('/recados', (request: Request, response: Response) => {
    const {descricao, detalhes} = request.body
    
    rDetalhes.push(detalhes)
    rDescricao.push(descricao)
    return response.status(201).json({
        mensagem: "Recado adicionado",
        decricao: descricao,
        detalhes: detalhes,
        rDetalhes,
        rDescricao
    })
})

app.get('/recados', (request: Request, response: Response) => {
    return response.json({
        rDetalhes,
        rDescricao
    })
})

app.get('/recados/descricao/:index', (request: Request, response: Response) => {
    const { index } = request.params

    return response.json(rDescricao[index])
})

app.get('/recados/detalhes/:index', (request: Request, response: Response) => {
    const { index } = request.params

    return response.json(rDetalhes[index])
})

app.put('/recados/descricao/:index', (request: Request, response: Response) => {
    const { index } = request.params
    const { descricao } = request.body

    rDescricao[index] = descricao

    return response.json(rDescricao)
})

app.put('/recados/detalhes/:index', (request: Request, response: Response) => {
    const { index } = request.params
    const { detalhes } = request.body

    rDescricao[index] = detalhes

    return response.json(rDetalhes)
})

app.delete('/recados/descricao/:index', (request: Request, response: Response) => {
    const { index } = request.params

    rDescricao.splice(rDescricao[index], 1)

    return response.json(rDescricao)
})

app.delete('/recados/detalhes/:index', (request: Request, response: Response) => {
    const { index } = request.params

    rDetalhes.splice(rDetalhes[index], 1)

    return response.json(rDetalhes)
})

app.listen(4040, () => {
    console.log('servidor rodando')
})