import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";
import { ValidationError } from "./errorHandler";

type Parsed = {
    body?: unknown;
    params?: Record<string, string>
    query?: unknown
}

export function validate(schema: ZodType) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await schema.safeParseAsync({
                body: req.body,
                params: req.params,
                query: req.query,
            })

            if (!result.success) {
                return next(
                    new ValidationError(
                        result.error.issues.map((issues) => ({
                            field: issues.path.slice(1).join("."),
                            message: issues.message,
                        }))
                    )
                )
            }
            const { body, params, query } = result.data as Parsed

            if (body !== undefined) req.body = body;
            if (params !== undefined) req.params = params;
            if (query !== undefined) res.locals.query = query;

            next()
        } catch (error) {
            next(error)
        }
    }
}