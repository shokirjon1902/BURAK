export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZRED = 401,
  FORBIDDIN = 403,
  NOT_FOUND = 404,
  IMTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong",
  NO_DATA_FOUND = "No data is found",
  CREATE_FAILED = "create is failed",
  UPDATE_FAILED = "Update is failed",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
