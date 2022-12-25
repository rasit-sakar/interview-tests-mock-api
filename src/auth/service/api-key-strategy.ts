import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';
import { AuthTokenNotFoundException } from 'src/domain/exception/auth-token-not-found.exception';
import { AuthTokenNotValidException } from 'src/domain/exception/auth-token-not-valid.exception';
import { AuthService } from './auth-service';

/**
 * Global x-api-key header validation
 */
@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
    constructor(private readonly authService: AuthService) {
        super({ header: 'X-API-KEY', prefix: '' }, true, async (apiKey, done) => {
            return this.validate(apiKey, done);
        });
    }

    /**
     * Validates incoming api key with Auth Service
     */
    async validate(apiKey: string, done: (error: Error, data) => void): Promise<void> {
        if (!apiKey) {
            done(new AuthTokenNotFoundException(), null);
        }
        const isApiKeyValid = await this.authService.isApiKeyValid(apiKey);
        if (!isApiKeyValid) {
            done(new AuthTokenNotValidException(), null);
        }

        done(null, true);
    }
}
