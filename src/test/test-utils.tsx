import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Custom render function that adds any providers your app needs
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }