import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import { Pokemon } from '../components';
// import userEvent from '@testing-library/user-event';

describe('testing component <Pokemon.js />', () => {
  test('component must render info of a specific pokemon', () => {
    renderWithRouter(<App />);
    const pokeName = screen.getAllByTestId('pokemon-name');
    const pokeType = screen.getAllByTestId('pokemon-type');
    const pokeWeight = screen.getAllByTestId('pokemon-weight');
    const pokemonImg = screen.getAllByAltText(/sprite/i);

    expect(pokeName[0]).toHaveTextContent(/pikachu/i);
    expect(pokeType[0]).toHaveTextContent(/electric/i);
    expect(pokeWeight[0]).toHaveTextContent(/average weight: 6\.0 kg/i);
    expect(pokemonImg[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('url link to pokemon details', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails).toHaveAttribute('href', '/pokemon/25');
  });

  test('on more details click, page renders pokemon details', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });

    userEvent.click(moreDetails);
    expect(history.location.pathname).toBe('/pokemon/25');

    const checkFavorited = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(checkFavorited);
    const starIcon = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});
