
import Router from "koa-router";

import {ValidationError} from "domain/models/errors/validationError";
import {getPlaces} from "./places";

const log = require("log")("places:routes");

export function initializeRoutes(app, router) {

    router.get("/api/places", getPlaces);

    app.use(errorHandlerMiddleware);
    app.use(router.routes());
}

async function errorHandlerMiddleware(ctx, next) {
    try {
      await next();
    } catch (err) {
        if (err instanceof ValidationError) {
            ctx.status = 400;
            ctx.body = {
                status: 400,
                title: "Validation error(s) occurred.",
                detail: err.message,
                fields: err.fields,
            };
        } else {
            ctx.status = 500;
            ctx.body = {
                status: 500,
                title: "An error occurred.",
            };
        }
        ctx.app.emit("error", err, ctx);
    }
}
