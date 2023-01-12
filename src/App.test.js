import { render, screen } from '@testing-library/react';
import App from './App';

test('renders clock components', () => {
  const view = render(<App />);
  expect(view).toBeTruthy()
});
