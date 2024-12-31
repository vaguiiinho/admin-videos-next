import '@testing-library/jest-dom';
import 'whatwg-fetch'; // Para a API Fetch
import { TextEncoder, TextDecoder } from 'util';

// Mock do BroadcastChannel
global.BroadcastChannel = jest.fn().mockImplementation((name: string) => {
  return {
    name,
    postMessage: jest.fn(),
    close: jest.fn(),
    onmessage: null,
    onmessageerror: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
});

// Definir os polyfills para o ambiente de teste
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
