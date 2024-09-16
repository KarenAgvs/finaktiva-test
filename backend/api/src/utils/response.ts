class ResponseModel {
  status: boolean;
  data: any;
  message: string | null;

  constructor(
    status: boolean,
    data: any = null,
    message: string | null = null
  ) {
    this.status = status;
    this.data = data;
    this.message = message;
  }

  static success(data: any, message: string | null = null): ResponseModel {
    return new ResponseModel(true, data, message);
  }

  static error(message: string, data: any | null = null): ResponseModel {
    return new ResponseModel(false, data, message);
  }
}

export default ResponseModel;
