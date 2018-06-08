
import {CustomError} from "domain/models/errors/customError";

export class GoogleApiError extends CustomError {

    constructor(message: string) {
        super(message);
    }
}
