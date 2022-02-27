import createError from "http-errors";
import express from 'express';
import cookieParser from "cookie-parser";
import helmet from "helmet";
import indexRouter from "./routes";
import dbConnect from "./startup/db";
import logger from "./startup/logging";
import dotenv from 'dotenv'


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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log(req)
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;
