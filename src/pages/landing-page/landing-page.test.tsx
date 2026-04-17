import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LandingPage } from './landing-page'
import { describe, expect, it } from 'vitest'
import { AuthProvider } from '@shared/components/auth-provider'

function renderLandingPage() {
  return render(
    <AuthProvider>
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    </AuthProvider>
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

  it('renders a sign-in link pointing to the identity provider', () => {
    renderLandingPage()
    const link = screen.getByRole('button', { name: /sign in/i })
    expect(link).toBeTruthy();
  })

  it('renders the "Get started" section heading', () => {
    renderLandingPage()
    expect(screen.getByRole('heading', { level: 2, name: /get started/i })).toBeInTheDocument()
  })
})
