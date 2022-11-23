import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const pokemon = {
  name: 'Pikachu',
  route: 'pokemon/25',
  pSummary: 'This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.',
};

describe('testing component PokemonDetails', () => {
  test('pokemon details are shown on screen', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push(pokemon.route);
    });

    const h2Details = screen.getByRole('heading', {
      name: /details/i,
      level: 2,
    });
    const h2Summary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    const summaryText = screen.getByText(pokemon.pSummary);

    expect(h2Details).toBeInTheDocument();
    expect(h2Summary).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
  });

  test('page must have a section rendering pokemon location with maps', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push(pokemon.route);
    });
    const h2Location = screen.getByRole('heading', {
      name: /game locations of/i,
    });
    expect(h2Location).toBeInTheDocument();

    const pokemonLocation = screen.getAllByAltText('Pikachu location');

    expect(pokemonLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('page must have a label with text "pokemon favoritado?"', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push(pokemon.route);
    });
    const favoriteLabel = screen.getByLabelText(/pokémon favoritado\?/i);

    expect(favoriteLabel).toBeInTheDocument();
  });
});
