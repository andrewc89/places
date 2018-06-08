
const log = require("log")("places:mapperHelpers");

/**
 * Maps json data to type T.
 *
 * @param {any} data - The json data to map.
 * @param {new(): T} - The type to which to map the data.
 * @returns {T} The mapped object.
 */
export function map<T>(data: any, type: { new (): T; }): T {
    const mappedObject = createInstance(type);
    copyObject(data, mappedObject);

    return mappedObject;
}

/**
 * Maps an array of json data to an array of type T.
 *
 * @param {any} data - The json data to map.
 * @param {new(): T} - The type to which to map the data.
 * @param {function} callback - The optional callback function to execute on
 * each item in the json array. This function, if defined, will be executed
 * instead of the generic map function.
 * @returns {Array<T>} - An array of the mapped objects.
 */
export function mapArray<T>(data: any[], type: { new (): T; }, callback?: (d: any) => T): T[] {

    const mappedArray: T[] = new Array<T>();

    data.forEach((datum) => {
        let mappedObject;
        if (callback) {
            mappedObject = callback(datum);
        }
        else {
            mappedObject = map(datum, type);
        }
        mappedArray.push(mappedObject);
    });

    return mappedArray;
}

function createInstance<T>(type: { new (): T; }): T {
    return new type();
}

function copyObject<T>(copyFrom: T, copyTo: T): T {
    for (const key in copyFrom) {
        // NOTE: https://github.com/hapijs/hapi/issues/3280
        if (Object.prototype.hasOwnProperty.call(copyFrom, key)) {
            try {
                copyTo[key] = copyFrom[key];
            } catch (err) {
                log.error(`An error occurred while copying from ${typeof(copyFrom)} ${typeof(copyTo)}: %j`, err);
            }

        }
    }

    return copyTo;
}
