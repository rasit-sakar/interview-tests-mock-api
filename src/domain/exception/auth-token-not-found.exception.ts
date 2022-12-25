import { HttpException, HttpStatus } from '@nestjs/common';

export class AuthTokenNotFoundException extends HttpException {
    constructor() {
        super('Missing Authentication Token', HttpStatus.UNAUTHORIZED);
    }
}
