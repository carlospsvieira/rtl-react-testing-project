import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testing component <Pokedex.js />', () => {
  test('page must have an h2 element with text "Encountered Pokémon"', () => {
    renderWithRouter(<App />);
    const h2Element = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test('test button with text "proximo pokemon" interaction', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByRole('img', {
      name: /sprite/i,
    });
    const btnNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    userEvent.click(btnNext);
    expect(pokemon).toBeInTheDocument();
  });

  test('component must have filtering buttons', () => {
    renderWithRouter(<App />);
    const btnType = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(btnType[0]);
    expect(btnType[0]).toHaveTextContent(/electric/i);

    const btnAll = screen.getByRole('button', {
      name: /all/i,
    });
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();
  });
});
