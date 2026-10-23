import { test, expect, vi } from 'vitest';
import { buildApiUrl } from './buildApiUrl';

test('build api url based on env variables', () => {
    vi.stubEnv('VITE_API_URL', 'api.test/');

    expect(buildApiUrl('book')).toBe('api.test/book')

})
