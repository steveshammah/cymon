

import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer Component Test', () => {
    it('should render the footer', () => {
        render(<Footer />)

        const footerLink = screen.getByText(/company/i)

        expect(footerLink).toBeInTheDocument()
    })
})