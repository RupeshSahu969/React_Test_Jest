import { render, screen } from '@testing-library/react';

import App from './App';

test('getAllByRole', () => {

  render(<App />);

  const btns = screen.getAllByRole("button");

  btns.forEach((btn) => {

    expect(btn).toBeInTheDocument();

    expect(btn).toBeInTheDocument();
    
  });


});
