import { AuthRepository } from '../../../src/auth/repository/auth.repository';
import { AuthService } from '../../../src/auth/services/auth-service';

describe('Auth Service Unit Test', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('isApiKeyValid ', () => {
        let correctApiKey: string;
        let authRepository: AuthRepository;

        beforeAll(() => {
            correctApiKey = 'asdasdsad';
            authRepository = jest.mocked<AuthRepository>({
                isApiKeyValid: jest.fn(async (apiKey) => {
                    return apiKey == correctApiKey;
                }),
            });
        });

        it('Should called once', async () => {
            const authService = new AuthService(authRepository);
            await authService.isApiKeyValid(correctApiKey);
            expect(authRepository.isApiKeyValid).toBeCalledTimes(1);
        });

        it('Should return true', async () => {
            const authService = new AuthService(authRepository);
            const result = await authService.isApiKeyValid(correctApiKey);
            expect(result).toBe(true);
        });

        it('Should return false', async () => {
            const authService = new AuthService(authRepository);
            const result = await authService.isApiKeyValid('');
            expect(result).toBe(false);
        });
    });
});
