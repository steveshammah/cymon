import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header Component Test', () => {
    it('should render the header', () => {
        render(<Header />)

        const headerText = screen.getByText(/HealthCloud/i)

        expect(headerText).toBeInTheDocument()
    })
})