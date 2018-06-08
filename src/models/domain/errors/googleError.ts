
import {CustomError} from "models/domain/errors/customError";

export class GoogleError extends CustomError {

    constructor(message: string) {
        super(message);
    }
}
