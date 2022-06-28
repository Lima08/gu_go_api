import { ERROR_BOOKS, HTTP_STATUS_CODE } from 'src/constants';
import { ITypeormErrorPayload } from 'src/interfaces';
import { TypeormError } from 'src/utils';

export class BookCreateError extends TypeormError {
  constructor(context: any) {
    const errorPayload: ITypeormErrorPayload = {
      message: ERROR_BOOKS.MESSAGE.CREATE,
      statusCode: HTTP_STATUS_CODE.INTERNAL_SERVER,
      context,
    };

    super(errorPayload);
  }
}
