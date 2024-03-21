import {render, screen} from '@testing-library/react';
import Header from "./Header";

describe("Header tests", () => {
    test('renders projects link in header', () => {
        render(<Header/>);
        const linkElement = screen.getByText(/projects/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders contact me link in header', () => {
        render(<Header/>);
        const linkElement = screen.getByText(/contact me/i);
        expect(linkElement).toBeInTheDocument();
    });
});
