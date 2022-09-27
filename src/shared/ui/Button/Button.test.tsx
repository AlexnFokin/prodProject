import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('test button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('test button with theme', () => {
    render(<Button
      theme={ThemeButton.CLEAR}
      // eslint-disable-next-line i18next/no-literal-string
    >TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
