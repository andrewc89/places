
import {createLogger, format, transports} from "winston";

import config from "config";

function getLogger(label) {

    const logFormat = format.printf((info) => {
        return `${info.timestamp} [${info.label}]:${info.level} ${info.message}`;
    });

    const logger = createLogger({
        level: "debug",
        format: format.combine(
            format.colorize(),
            format.label({label}),
            format.timestamp(),
            format.splat(),
            logFormat,
        ),
        transports: [
            // Write to all logs with level `debug` and below to `combined.log`.
            new transports.File({ filename: "/var/log/places/api.log" }),

            // Write all logs error (and below) to `error.log`.
            new transports.File({ filename: "/var/log/places/api_error.log", level: "error" }),
        ],
    });

    // If we're running in a local development environment or in debug...
    if (["dev", "development", "debug"].indexOf(config.env.toLowerCase()) > -1) {
        logger.add(new transports.Console());
    }

    return logger;
}

module.exports = getLogger;
