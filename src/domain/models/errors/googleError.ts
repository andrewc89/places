
import {CustomError} from "domain/models/errors/customError";

export class GoogleError extends CustomError {

    constructor(message: string) {
        super(message);
    }
}
