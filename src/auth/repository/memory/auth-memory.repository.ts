import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../auth.repository';
import { apiKeys } from './apkeys';

@Injectable()
export class AuthMemoryRepository extends AuthRepository {
    async isApiKeyValid(apiKey: any): Promise<boolean> {
        return apiKeys.includes(apiKey);
    }
}
