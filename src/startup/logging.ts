import winston from 'winston'

const logger = winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: 'info'
                }
            ),
            new winston.transports.File(
                {
                    level: 'error',
                    filename: 'logs/error.log'
                }
            )
        ],
        /*
          With winston, it is possible to catch and log uncaughtRejection events from your process.
          With your own logger instance you can enable this behavior when it's created or later on in your applications lifecycle
         */
        rejectionHandlers: [
            new winston.transports.File({filename: 'logs/rejections.log'})
        ]
    },
);
//By default, winston will exit after logging an uncaughtException. If this is not the behavior you want, set it to false
logger.exitOnError = false;

export default logger;


