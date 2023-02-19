import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} - ${request.method} ${request.path}`);
    next();
}
