import { AuthRepository } from '../../../src/auth/repository/auth.repository';
import { AuthService } from '../../../src/auth/service/auth-service';

describe('Auth Service Unit Test', () => {
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

    describe('isApiKeyValid ', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('Should be called once', async () => {
            const authService = new AuthService(authRepository);
            await authService.isApiKeyValid(correctApiKey);
            expect(authRepository.isApiKeyValid).toBeCalledTimes(1);
        });

        it('Should return true when api key is valid', async () => {
            const authService = new AuthService(authRepository);
            const result = await authService.isApiKeyValid(correctApiKey);
            expect(result).toBe(true);
        });

        it('Should return false when api key is not valid', async () => {
            const authService = new AuthService(authRepository);
            const result = await authService.isApiKeyValid('');
            expect(result).toBe(false);
        });
    });
});
