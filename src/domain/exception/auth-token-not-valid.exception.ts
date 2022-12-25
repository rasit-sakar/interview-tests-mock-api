import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthTokenNotValidException extends HttpException {
    constructor() {
        super('Authentication Token Not Valid', HttpStatus.UNAUTHORIZED);
    }
}
