import { NextFunction, Request, Response } from "express";


type FieldError = { field: string, message: string }

export class AppError extends Error {
    constructor(public message: string, public status = 400, public errors?: FieldError[]) {
        super(message)
    }
}

export class ValidationError extends AppError {
    constructor(errors: FieldError[]) {
        super("Dados inválidos", 422, errors)
    }
}


export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) return res.status(err.status).json({ message: err.message, ...(err.errors && { errors: err.errors }) })
    console.error(err);
    return res.status(500).json({ error: "Erro interno" });
}