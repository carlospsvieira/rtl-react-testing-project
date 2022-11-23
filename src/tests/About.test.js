import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('testing route About', () => {
  test('page must have information about Pokedex', () => {
    renderWithRouter(<About />);
    const aboutInfo = screen.getByText(
      /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    expect(aboutInfo).toBeInTheDocument();
  });

  test('page must have an h2 element with text "About Pokédex"', () => {
    renderWithRouter(<About />);
    const h2Element = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test('page must have an img element with an specific src', () => {
    renderWithRouter(<About />);
    const imgElement = screen.getByRole('img', {
      name: /pokédex/i,
      src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
      class: 'pokedex-image',
    });
    expect(imgElement).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
