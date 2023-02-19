import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { loggerMiddleware } from './api-logs';

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

// Middleware
app.use(loggerMiddleware);

app.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
