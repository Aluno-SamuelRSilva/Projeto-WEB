import {pathsTOModuleNameMapper} from 'ts-jest'
import {compilerOption} from './tsconfig.json'

export default {
    moduleFileExtenions: ['js', 'json', 'ts'],
    moduleNameMapper:pathsTOModuleNameMapper(
        compilerOption.paths,{
            prefix: '<rootDir>/'
        }),
        testRegex: '.*\\.."spec\\.ts$',
        transform: {
            '^.+\\(t|j)s$': 'ts-jest',
        },
        collectCoverageFrom: ['**/*.(t|s)s'],
        coverageDirectory: '../coverage',
        testEnvironment: 'node',
}