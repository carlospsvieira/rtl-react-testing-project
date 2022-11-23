import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

describe('testing component <FavoritePokemon.js />', () => {
  test('page must have text "No favorite pokemon found" in case there is not a favorite pokemon, otherwise all favorite pokemons', () => {
    renderWithRouter(<FavoritePokemon />);
    const notFavorite = screen.getByText(/no favorite pokémon found/i);
    expect(notFavorite).toBeInTheDocument();
  });
});
