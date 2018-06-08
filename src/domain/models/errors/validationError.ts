
import {CustomError} from "domain/models/errors/customError";

export class ValidationError extends CustomError {

    fields: FieldValidation[];

    constructor(message: string, fields?: FieldValidation[]) {
        super(message);
        this.fields = fields;
    }

    toString(): string {
        return `${this.message} ${JSON.stringify(this.fields)}`;
    }
}

export class FieldValidation {
    field: string;
    message: string;
}
