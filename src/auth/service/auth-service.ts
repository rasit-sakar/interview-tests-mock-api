import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../repository/auth.repository';

@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

    async isApiKeyValid(apiKey: string): Promise<boolean> {
        return this.authRepository.isApiKeyValid(apiKey);
    }
}
