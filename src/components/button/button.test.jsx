import React from 'react'
import {
  describe, it, expect,
} from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './button'

describe('Normal Button', () => {
  it('Renders correctly', () => {
    render(<Button text="Hola" backgroundColor="white" fontColor="black" />)
    const element = screen.getByText('Hola')
    expect(element.style.color).toBe('black')
    screen.debug()
  })
  it('Renders different colours', () => {
    render(<Button text="RaulAlbiol" backgroundColor="red" fontColor="yellow" />)
    const element = screen.getByText('RaulAlbiol')
    expect(element.style.color).toBe('yellow')
    expect(element.style.backgroundColor).toBe('red')
    screen.debug()
  })
})
