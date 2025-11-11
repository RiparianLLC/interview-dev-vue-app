import { describe, it, expect, beforeEach } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

// Example test to demonstrate testing setup
describe('Example Test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should work', () => {
    expect(true).toBe(true)
  })
})

