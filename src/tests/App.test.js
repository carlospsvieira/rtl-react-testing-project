import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
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
    });
    expect(linkFavorite).toBeInTheDocument();
  });

  test('on click link home must be redirected to "/"', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', {
      name: /home/i,
    });
    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('on click link about must be redirected to "/about"', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', {
      name: /about/i,
    });
    userEvent.click(linkAbout);
    expect(history.location.pathname).toBe('/about');
  });

  test('on click link favorite pokemon must be redirected to "/favorites"', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(linkFavorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('on click unknown pages are redirected to page not found', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/carlos');
    });
    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFound).toBeInTheDocument();
  });
});
