import express, {Request, Response, NextFunction} from "express";
import {HttpResponse} from '../tools/http/response'

const router = express.Router();


function getBinanceData() {
    return new Promise((resolve, reject) => {
        reject(new Error("Curl error!"))
    });
}


router.get('/', async function (req: Request, res: Response, next) {


   return HttpResponse.respond(res,"OK")

});

export default router;
