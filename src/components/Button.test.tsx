import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>)
    
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click me' })
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    )
    
    const button = screen.getByRole('button', { name: 'Click me' })
    await user.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies correct CSS classes for variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-medium')
    
    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-secondary btn-medium')
    
    rerender(<Button variant="danger">Danger</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-danger btn-medium')
  })

  it('applies correct CSS classes for sizes', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-small')
    
    rerender(<Button size="medium">Medium</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-medium')
    
    rerender(<Button size="large">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-large')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary btn-medium custom-class')
  })

  it('sets correct button type', () => {
    const { rerender } = render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    
    rerender(<Button type="reset">Reset</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
    
    rerender(<Button>Default</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('sets disabled attribute and aria-disabled when disabled', () => {
    render(<Button disabled>Disabled</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-disabled', 'true')
  })

  it('uses default props correctly', () => {
    render(<Button>Default</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn btn-primary btn-medium')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).not.toBeDisabled()
  })
})