import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthRepository } from './repository/auth.repository';
import { AuthMemoryRepository } from './repository/memory/auth-memory.repository';
import { ApiKeyStrategy } from './services/api-key-strategy';
import { AuthService } from './services/auth-service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: AuthRepository,
            useClass: AuthMemoryRepository,
        },
        AuthService,
        PassportModule,
        ApiKeyStrategy,
    ],
    exports: [AuthService],
})
export class AuthModule {}
