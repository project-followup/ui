import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { BrowserLocalStorageService } from './localStorageService';

describe('BrowserLocalStorageService', () => {
    let service: BrowserLocalStorageService;

    beforeEach(() => {
        service = new BrowserLocalStorageService();
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should store entry in local storage', () => {
        service.setItem('testKey', { name: 'Test' });
        const storedItem = localStorage.getItem('testKey');
        expect(storedItem).toBe(JSON.stringify({ name: 'Test' }));
    });

    it('should retrieve entry from local storage', () => {
        localStorage.setItem('testKey', JSON.stringify({ name: 'Test' }));
        const item = service.getItem<{ name: string }>('testKey');
        expect(item).toEqual({ name: 'Test' });
    });

    it('should return null for non-existing key', () => {
        const item = service.getItem('nonExistingKey');
        expect(item).toBeNull();
    });

    it('should remove entry from local storage', () => {
        localStorage.setItem('testKey', JSON.stringify({ name: 'Test' }));
        service.removeItem('testKey');
        const storedItem = localStorage.getItem('testKey');
        expect(storedItem).toBeNull();
    });
});
