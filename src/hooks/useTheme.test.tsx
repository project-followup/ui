import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import * as types from './useTheme'

describe('useTheme Hook', () => {
    it('should have dark and light themes defined', () => {
        expect(types.availableThemes).toContain('dark');
        expect(types.availableThemes).toContain('light');
    });

    it('should toggle between dark and light themes', () => {
        const { result } = renderHook(() => types.useTheme());
        const initialTheme = result.current.theme;

        act(() => {
            result.current.nextTheme();
        });

        expect(result.current.theme).not.toBe(initialTheme);
    });
});