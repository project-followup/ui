# Testing Guide

This application uses a comprehensive testing setup with Vitest, React Testing Library, and related tools.

## Testing Stack

- **[Vitest](https://vitest.dev/)** - Fast unit test framework (built for Vite)
- **[React Testing Library](https://testing-library.com/react)** - Component testing utilities
- **[Jest DOM](https://github.com/testing-library/jest-dom)** - Custom DOM matchers
- **[User Event](https://testing-library.com/docs/user-event/intro)** - User interaction simulation
- **[jsdom](https://github.com/jsdom/jsdom)** - DOM environment for tests

## Available Scripts

```bash
# Run tests in watch mode
npm run test

# Run tests with UI (opens browser interface)
npm run test:ui

# Run all tests once
npm run test:run

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

```
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
├── hooks/
│   ├── useCounter.ts
│   └── useCounter.test.ts
├── utils/
│   ├── helpers.ts
│   └── helpers.test.ts
├── test/
│   └── setup.ts          # Test configuration
├── App.tsx
└── App.test.tsx
```

## Testing Patterns

### Component Testing

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('My Component')).toBeInTheDocument()
  })

  it('handles user interactions', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(screen.getByText('Clicked')).toBeInTheDocument()
  })
})
```

### Hook Testing

```tsx
import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useMyHook } from './useMyHook'

describe('useMyHook', () => {
  it('returns expected values', () => {
    const { result } = renderHook(() => useMyHook())
    
    expect(result.current.value).toBe(0)
  })

  it('updates state correctly', () => {
    const { result } = renderHook(() => useMyHook())
    
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.value).toBe(1)
  })
})
```

### Utility Function Testing

```tsx
import { describe, it, expect } from 'vitest'
import { myUtilityFunction } from './utils'

describe('myUtilityFunction', () => {
  it('returns correct result', () => {
    expect(myUtilityFunction('input')).toBe('expected output')
  })
})
```

### Mocking

```tsx
import { vi } from 'vitest'

// Mock a function
const mockFunction = vi.fn()

// Mock a module
vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' }))
}))

// Mock console methods
const consoleSpy = vi.spyOn(console, 'log')
```

## Best Practices

### 1. Test Behavior, Not Implementation

❌ **Don't do this:**
```tsx
expect(component.state.count).toBe(1)
```

✅ **Do this:**
```tsx
expect(screen.getByText('Count: 1')).toBeInTheDocument()
```

### 2. Use Semantic Queries

Prefer queries that reflect how users interact with your app:

```tsx
// Good: semantic queries
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/email address/i)
screen.getByText(/welcome message/i)

// Avoid: implementation details
screen.getByTestId('submit-button')
screen.getByClassName('btn-primary')
```

### 3. Test User Interactions

```tsx
it('submits form when button is clicked', async () => {
  const user = userEvent.setup()
  render(<LoginForm />)
  
  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.type(screen.getByLabelText(/password/i), 'password123')
  await user.click(screen.getByRole('button', { name: /submit/i }))
  
  expect(screen.getByText(/welcome/i)).toBeInTheDocument()
})
```

### 4. Group Related Tests

```tsx
describe('Button Component', () => {
  describe('when disabled', () => {
    it('does not respond to clicks', () => {
      // test implementation
    })

    it('has correct accessibility attributes', () => {
      // test implementation
    })
  })

  describe('when enabled', () => {
    it('responds to clicks', () => {
      // test implementation
    })
  })
})
```

### 5. Use beforeEach for Setup

```tsx
describe('UserList', () => {
  let mockUsers: User[]

  beforeEach(() => {
    mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ]
  })

  it('displays all users', () => {
    render(<UserList users={mockUsers} />)
    // test implementation
  })
})
```

## Configuration

### Vitest Config (`vitest.config.ts`)

```tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Use global test functions
    environment: 'jsdom',    // DOM environment
    setupFiles: ['./src/test/setup.ts'],  // Setup file
    css: true,              // Process CSS imports
    coverage: {             // Coverage options
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        'dist/',
      ],
    },
  },
})
```

### Test Setup (`src/test/setup.ts`)

```tsx
import '@testing-library/jest-dom'

// Global test setup goes here
// Example: mock fetch, setup test database, etc.
```

## VS Code Integration

For the best development experience, install these VS Code extensions:

- **Vitest** - Run tests from the editor
- **Jest Runner** - Run individual tests
- **Coverage Gutters** - Show coverage in editor

## Debugging Tests

### Run Tests in Debug Mode

```bash
# Debug specific test file
npx vitest run --reporter=verbose src/components/Button.test.tsx

# Debug with browser devtools
npx vitest --ui
```

### Common Issues

1. **Tests timeout**: Increase timeout in vitest config
2. **DOM not available**: Ensure `environment: 'jsdom'` is set
3. **CSS imports fail**: Enable `css: true` in vitest config
4. **Mock not working**: Check mock implementation and import order

## Coverage

Generate and view test coverage:

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory. Open `coverage/index.html` in your browser for a detailed view.

## Continuous Integration

Add this to your CI pipeline:

```yaml
- name: Run tests
  run: npm run test:run

- name: Generate coverage
  run: npm run test:coverage

- name: Upload coverage
  uses: codecov/codecov-action@v3
```