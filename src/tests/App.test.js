import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testing component App', () => {
  test('first link must have text "Home"', () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });
    expect(linkHome).toBeInTheDocument();
  });

  test('second link must have text "About"', () => {
    renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', {
      name: /about/i,
    });
    expect(linkAbout).toBeInTheDocument();
  });

  test('third link must have text "Favorite Pokémon"', () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', {
      name: /favorite pokémon/i,
    })
    expect(linkFavorite).toBeInTheDocument();
  });
});
