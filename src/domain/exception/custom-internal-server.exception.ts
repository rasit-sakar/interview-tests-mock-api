import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomInternalServerException extends HttpException {
    constructor() {
        super('Custom Internal Server Exception', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
