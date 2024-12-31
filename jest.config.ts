import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Caminho para sua aplicação Next.js, para carregar o next.config.js e arquivos .env
  dir: './',
});

// Configuração personalizada do Jest
const customJestConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configuração de ambiente adicional
  moduleNameMapper: {
    // Mapeamento para o alias @/
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

// Exporta a configuração Jest gerada
export default createJestConfig(customJestConfig);
