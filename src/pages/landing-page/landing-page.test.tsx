import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LandingPage } from './landing-page'
import { describe, expect, it } from 'vitest'
import { AuthContext } from '@shared/types/auth'
import { ConfigContext } from '@shared/types/configuration'

function renderLandingPage() {
  return render(
    <ConfigContext.Provider value={{ keycloak: { url: 'http://localhost', realm: 'test', clientId: 'test-client' } }}>
      <AuthContext.Provider value={{ isAuthenticated: false, isLoading: false, user: null, keycloak: null, login: () => {}, logout: () => {}, hasRole: () => false, hasAnyRole: () => false, getToken:() => 'TOKEN' }}>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </AuthContext.Provider>
    </ConfigContext.Provider>
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
