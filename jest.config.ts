import type { Config } from 'jest';
import { defaults } from 'jest-config';

const config: Config = {
    roots: ['<rootDir>/test'],
    testMatch: ['<rootDir>/test/unit/**/*.+(ts|js)'],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    testEnvironment: 'node',
    collectCoverageFrom: ['<rootDir>/src/**/**/**'],
};

export default config;
