import { render, screen } from '@testing-library/react';

import App from './App';

test('test case for multiple input fields', () => {

  render(<App />);

  const inputs=screen.getAllByPlaceholderText("enter username")

  expect(inputs[1]).toBeInTheDocument();


});
