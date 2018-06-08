
import Koa = require("koa");
import Router = require("koa-router");

import {initializeRoutes} from "routes";

import config from "config";

const log = require("log")("places");

const app = new Koa();
const router = new Router();

app.on("error", (err, ctx) => {
    log.error(`An error occurred at ${ctx.originalUrl}: %s`, err.toString());
});

initializeRoutes(app, router);

app.listen(config.port);
