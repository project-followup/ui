import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LandingPage } from './landing-page'
import { describe, expect, it } from 'vitest'

function renderLandingPage() {
  return render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  )
}

describe('LandingPage', () => {
  it('renders the application title', () => {
    renderLandingPage()
    expect(screen.getByRole('heading', { level: 1, name: /project followup/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    renderLandingPage()
    expect(screen.getByText(/Plan sprints, track/)).toBeInTheDocument()
  })

  it('renders the kanban board image', () => {
    renderLandingPage()
    expect(screen.getByAltText(/kanban board with sticky notes/i)).toBeInTheDocument()
  })

  it('renders the team meeting image', () => {
    renderLandingPage()
    expect(screen.getByAltText(/team collaborating during a sprint planning meeting/i)).toBeInTheDocument()
  })

  it('renders a sign-in link pointing to the identity provider', () => {
    renderLandingPage()
    const link = screen.getByRole('link', { name: /sign in/i })
    expect(link).toHaveAttribute('href', 'http://localhost:4001/auth')
  })

  it('renders the "Get started" section heading', () => {
    renderLandingPage()
    expect(screen.getByRole('heading', { level: 2, name: /get started/i })).toBeInTheDocument()
  })
})
