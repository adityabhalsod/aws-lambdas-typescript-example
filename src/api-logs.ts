import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(request: Request, response: Response, next: NextFunction) {
    let payload = ''

    const now = new Date();
    const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const SHOW_PAYLOAD =
        typeof process.env.SHOW_PAYLOAD === 'undefined'
            ? false
            : JSON.parse(process.env.SHOW_PAYLOAD)

    if (SHOW_PAYLOAD) {
        if (request.headers) {
            payload += `\n------------------------REQUEST HEADERS---------------------\n${JSON.stringify(request.headers, null, 4)}\n------------------------------------------------------------`
        }

        if (request.query) {
            payload += `\n------------------------REQUEST QUERY-----------------------\n${JSON.stringify(request.query, null, 4)}\n------------------------------------------------------------`
        }

        if (request.body) {
            payload += `\n------------------------REQUEST BODY------------------------\n${JSON.stringify(request.body, null, 4)}\n------------------------------------------------------------`
        }
    }
    console.log(`${date} - ${time} - ${request.method} ${request.path} ${payload}`);
    next();
}
