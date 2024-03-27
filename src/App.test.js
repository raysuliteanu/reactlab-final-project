import {render, screen} from '@testing-library/react';
import App from './App';

test('has "hello" text', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Hello, I am Pete!/i);
    expect(linkElement).toBeInTheDocument();
});
