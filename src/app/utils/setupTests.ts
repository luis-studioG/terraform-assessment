import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import server from '@/api/mocks/server';

import '@testing-library/jest-dom';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

expect.extend(matchers);
beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });

  Object.defineProperty(window, 'IS_REACT_ACT_ENVIRONMENT', {
    writable: true,
    value: true,
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
