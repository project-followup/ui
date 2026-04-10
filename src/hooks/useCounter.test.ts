import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCounter } from './useCounter'

describe('useCounter Hook', () => {
  it('should initialize with default value of 0', () => {
    const { result } = renderHook(() => useCounter())
    
    expect(result.current.count).toBe(0)
  })

  it('should initialize with custom initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    
    expect(result.current.count).toBe(5)
  })

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter())
    
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.count).toBe(1)
  })

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter(5))
    
    act(() => {
      result.current.decrement()
    })
    
    expect(result.current.count).toBe(4)
  })

  it('should reset count to initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    
    act(() => {
      result.current.increment()
      result.current.increment()
    })
    
    expect(result.current.count).toBe(7)
    
    act(() => {
      result.current.reset()
    })
    
    expect(result.current.count).toBe(5)
  })

  it('should handle multiple operations correctly', () => {
    const { result } = renderHook(() => useCounter(0))
    
    act(() => {
      result.current.increment()
      result.current.increment()
      result.current.decrement()
    })
    
    expect(result.current.count).toBe(1)
  })
})