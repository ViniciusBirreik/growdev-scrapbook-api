import express, { Request, Response } from 'express'
import { errands } from '../data/data'

export function midVerifyFields(request: Request, response: Response, next: () => void) {
    const { description, detail } = request.body
    if (!description || !detail) {
        return response.status(400).json({
            msg: "Fill in the fields correctly"
        })
    }
    next()
}

export function midVerifyId(request: Request, response: Response, next: () => void) {
    const { id } = request.params
    const item = errands.find((f) => parseInt(id) === f.id)
    if (!item) {
        return response.status(404).json({
            smg: "ID not found"
        })
    }
    next()
}