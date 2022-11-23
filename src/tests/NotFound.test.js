import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('testing component <NotFound.js />', () => {
  test('page must have an h2 element with text "Page requested not found"', () => {
    renderWithRouter(<NotFound />);
    const h2Element = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test('page must have an img element with specific src', () => {
    renderWithRouter(<NotFound />);
    const imgElement = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
      src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    });
    expect(imgElement).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
