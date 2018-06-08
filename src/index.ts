
import Koa = require("koa");
import Router = require("koa-router");

import {initializeRoutes} from "api/routes";
import {CustomError} from "domain/models/errors/customError";

import config from "config";

const log = require("log")("places");

const app = new Koa();
const router = new Router();

// TODO: Should the stack be logged for known errors?
app.on("error", (err, ctx) => {
    const defaultMessage = `An error occurred at ${ctx.originalUrl}:`;
    if (err instanceof CustomError) {
        log.error(`${defaultMessage} %s`, err.toString());
    }
    else {
        log.error(`${defaultMessage} %s`, err.stack);
    }
});

initializeRoutes(app, router);

app.listen(config.port);
