import { HttpException, HttpStatus } from '@nestjs/common';

export class SiteInfoNotFoundException extends HttpException {
    constructor() {
        super('Site info not found', HttpStatus.NOT_FOUND);
    }
}
