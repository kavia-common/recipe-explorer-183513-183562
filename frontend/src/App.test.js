import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Explorer text', () => {
  render(<App />);
  // The fallback content contains "Recipe Explorer"; on sign-in route,
  // ensure the iframe title exists as a stable selector.
  const title = screen.getByText(/Recipe Explorer/i);
  expect(title).toBeInTheDocument();
});
