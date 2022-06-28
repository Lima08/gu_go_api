import { ITypeormErrorPayload } from 'src/interfaces';

export class TypeormError extends Error {
  public statusCode: number;
  constructor(typeormErrorPayload: ITypeormErrorPayload) {
    super();
    this.message = typeormErrorPayload.message;
    this.statusCode = typeormErrorPayload.statusCode;
  }
}
