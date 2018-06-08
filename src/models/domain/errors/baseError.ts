
// SEE: https://github.com/Microsoft/TypeScript/issues/10166#issuecomment-269555496

interface IErrorConstructor {
  new (message: string): Error;
}

export const CustomError = function(message: string) {
  Error.call(this, message);
  Error.captureStackTrace(this);

  this.message = message;
  this.name = this.constructor.name;
} as any as IErrorConstructor;
CustomError.prototype = Object.create(Error.prototype);
