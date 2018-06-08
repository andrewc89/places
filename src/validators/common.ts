
import joi = require("joi");

import {ValidationError, FieldValidation} from "models/domain/errors";

/**
 * Process a joi validation error object. Convert the joi validation errors to a
 * list of field validation objects.
 * @param {any} error - The joi validation error object.
 * @returns {Array<FieldValidation>} - The list of field validation objects.
 */
export function processJoiError(error): FieldValidation[] {
    const message = "Validation error(s) occurred.";
    const fields = error.details.map(detail => {
        return {
            field: detail.path.join("."),
            message: detail.message,
        };
    });

    return fields;
}

/**
 * Convert the list of field validation objects to use the user friendly
 * validation error messages in the map object.
 * @param {Array<FieldValidation>} fields - The not user friendly field validation
 *  objects.
 * @param {any} errorMap - The error map object, mapping a model field to a user
 *  friendly validation error message.
 * @returns {Array<FieldValidation>} - The list of field valdation objects
 *  containing user friendly validation error messages.
 */
export function getUserFriendlyErrors(fields: FieldValidation[], errorMap: any): FieldValidation[] {

    const defaultMessage = "An error occurred submitting the field.";

    const friendlyMessages = fields.map(field => {

        let errorMessage: string;
        const splitField = field.field.split(".");

        // If the errorMap object has an entry for the field for which an error occurred...
        if (errorMap.hasOwnProperty(field.field)) {
            errorMessage = errorMap[field.field];
        }
        // If an error occurred in a sub-property of the model but the errorMap
        // object has an entry for the parent field...
        // ex. An error occured at field 'locations.0.type' and there is a
        // 'locations' entry in errorMap.
        else if (errorMap.hasOwnProperty(splitField[0])) {
            errorMessage = errorMap[splitField[0]];
        }
        // Otherwise, use the default message. This shouldn't ever really happen.
        // If it does, it is because some field is not being accounted for in
        // validation.
        else {
            errorMessage = defaultMessage;
        }

        return {
            field: field.field,
            message: errorMessage,
        };

    });

    return friendlyMessages;
}

/**
 * Validate the specified model with the specified schema.
 * @param {T} model - The model to validate.
 * @param {any} schema - The joi validation schema.
 * @param {any} errorMap - The error map object, mapping a model field to a user
 *  friendly validation error message.
 * @param {boolean} userFriendlyMessages - Include user friendly messages in the
 *  field validation objects returned. Defaults to false.
 * @param {boolean} throwValidationError - Throw a validation error containing
 *  the field validation objects instead of just returning them. Defaults to true.
 * @throws {ValidationError} - A validation error containing the field validation
 *  objects containing the field validation error messages.
 */
export function validateModel<T>(
    model: T,
    schema: any,
    errorMap: any,
    userFriendlyMessages: boolean = false,
    throwValidationError: boolean = true): FieldValidation[] {

    let errors: FieldValidation[];
    const {error, value} = joi.validate(model, schema, {abortEarly: false});

    if (error) {
        errors = processJoiError(error);

        if (userFriendlyMessages) {
            errors = getUserFriendlyErrors(errors, errorMap);
        }

        if (throwValidationError) {
            throw new ValidationError("Validation error(s) occurred.", errors);
        }
    }

    return errors;
}
