import express, {Request, Response, NextFunction} from "express";
import {HttpResponse} from '../tools/http/response'
import Binance from '../services/binance/api'

const router = express.Router();

router.get('/', async function (req: Request, res: Response, next: NextFunction) {

    const binance = new Binance("KEY", "SECRET");
    try {
        const result = await binance.ping();
        return HttpResponse.respond(res, result.data)
    } catch (err) {
        next(err)
    }
});

export default router;
