import createError from "http-errors";
import express from 'express';
import cookieParser from "cookie-parser";
import helmet from "helmet";
import indexRouter from "./routes";
import dbConnect from "./startup/db";
import logger from "./startup/logging";
import dotenv from 'dotenv'
import {HttpResponse} from './tools/http/response'
import {DateClass} from './tools/http/date'


//doenv config init
dotenv.config({path: `.env.${process.env.NODE_ENV}`})
logger.info(`Application environment is ${process.env.NODE_ENV}`)


const app = express();

//middleware modules
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//route modules
app.use('/', indexRouter);


//startup modules
dbConnect();


process.on('uncaughtException', err => {
    logger.error({
        "error": err,
        "message": "Uncaught Exception thrown"
    })
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error({
        "error": "unhandledRejection",
        "message": "Unhandled rejection at " + promise
    });
    process.exit(1);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return HttpResponse.respondNotFound(res)
});


// error handler
app.use(function (err, req, res, next) {
    //log exception
    logger.error({
        message: err.message,
        method: req.method,
        endpoint: req.url,
        body: req.body,
        time: DateClass.getCurrentDatetimeString(),
    })
    return HttpResponse.respondInternalServerError(res)
});

module.exports = app;
