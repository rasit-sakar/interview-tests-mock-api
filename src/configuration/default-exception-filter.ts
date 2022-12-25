import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { CustomInternalServerException } from 'src/domain/exception/custom-internal-server.exception';
import { ExceptionResponse } from 'src/domain/model/exception-response.model';

@Catch()
export class DefaultExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const response: ExceptionResponse = {
            message: '',
            status: 500,
        };

        if (exception instanceof HttpException) {
            response.message = exception.message;
            response.status = exception.getStatus();
        } else {
            //Handles internal server errors
            const customException = new CustomInternalServerException();
            response.message = customException.message;
            response.status = customException.getStatus();
            console.error(exception); // Additional logging, monitoring and telemetry actions could be implemented.
        }

        httpAdapter.reply(ctx.getResponse(), { message: response.message }, response.status);
    }
}
