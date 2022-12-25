export abstract class AuthRepository {
    abstract isApiKeyValid(apiKey: string): Promise<boolean>;
}
