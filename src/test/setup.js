import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Cleans up the the elements that were rendered
afterEach(() => {
  cleanup()
})
