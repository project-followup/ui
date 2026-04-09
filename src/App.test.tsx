import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders counter button with initial value', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  it('increments counter when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    await user.click(button)
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('increments counter multiple times', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    await user.click(button)
    await user.click(button)
    await user.click(button)
    
    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument()
  })

  it('renders React and Vite logos', () => {
    render(<App />)
    
    expect(screen.getByAltText(/react logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/vite logo/i)).toBeInTheDocument()
  })

  it('displays HMR instruction text', () => {
    render(<App />)
    
    expect(screen.getByText(/edit/i)).toBeInTheDocument()
    expect(screen.getByText(/src\/App\.tsx/)).toBeInTheDocument()
  })
})