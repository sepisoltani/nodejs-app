import mongoose from 'mongoose'
import logger from './logging'

export default function () {
    mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongo:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=${process.env.MONGODB_AUTH_DB}`).then(() => logger.info(`Connected to database ${process.env.MONGODB_DATABASE}`)).catch((err) => {
        console.log(logger.error(err.message))
    });
}