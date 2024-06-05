import { render, screen } from '@testing-library/react';
import App from './App';

test('test First React test case', () => {
  render(<App />);

  // Removed trailing space from the regex
  const text = screen.getByText(/First React test case/i);
  const text2 = screen.getByText("Raja");

  expect(text).toBeInTheDocument();

  expect(text2).toBeInTheDocument();

  



});
