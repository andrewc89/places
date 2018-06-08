
import {CustomError} from "domain/models/errors/customError";
import {Platform} from "domain/models";

export class IntegrationError extends CustomError {

    platform: Platform;
    userFriendlyMessage?: string;

    constructor(message: string, platform: Platform, userFriendlyMessage?: string) {
        super(message);
        this.platform = platform;
        this.userFriendlyMessage = userFriendlyMessage;
    }
}
