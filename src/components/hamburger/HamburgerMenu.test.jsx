import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import HamburgerMenu from './HamburgerMenu';
import { AVATAR } from "utils/assets";
import * as firebaseAuth from "firebase/auth";
import '@testing-library/jest-dom/vitest';
import React from 'react';

// Mock the hooks and firebase
vi.mock('hooks/useRenderHeadermenu', () => ({
  default: () => [<li key="1">Menu Item 1</li>, <li key="2">Menu Item 2</li>]
}));

vi.mock('hooks/useTranslations', () => ({
  default: () => ({
    profileDropdown: {
      signOut: 'Sign Out'
    }
  })
}));

vi.mock('utils/firebase', () => ({
  default: 'mocked-auth'
}));

vi.mock('firebase/auth', async () => {
  const actual = await vi.importActual('firebase/auth');
  return {
    ...actual,
    signOut: vi.fn().mockImplementation(() => Promise.resolve(undefined))
  };
});

describe('HamburgerMenu Component', () => {
  const mockRef = { current: document.createElement('div') };
  
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    // Reset the mockRef element's className before each test
    // mockRef.current.className = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should be hidden when hamburgerMenuOpen is false', () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: false }),
        user: () => null
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    const menu = mockRef.current;
    expect(menu.className).toContain('xs:hidden');
    expect(menu.className).not.toContain('xs:flex');
  });

  it('should be visible when hamburgerMenuOpen is true and user is logged in', () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: true }),
        user: () => ({ uid: '123', email: 'test@test.com' })
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    const menu = mockRef.current;
    expect(menu.className).toContain('xs:flex');
    expect(menu.className).not.toContain('xs:hidden');
  });

  it('should display user information when user is logged in', () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: true }),
        user: () => ({ 
          uid: '123', 
          email: 'test@test.com', 
          displayName: 'Test User',
          photoURL: 'https://example.com/photo.jpg'
        })
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    const userName = screen.getByText('Test User');
    const avatar = screen.getByAltText('avatar');
    
    expect(userName).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/photo.jpg');
  });

  it('should use default avatar when photoURL is not available', () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: true }),
        user: () => ({ 
          uid: '123', 
          email: 'test@test.com', 
          displayName: 'Test User',
          photoURL: null
        })
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toHaveAttribute('src', AVATAR);
  });

  it('should call signOut when logout button is clicked', async () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: true }),
        user: () => ({ uid: '123', email: 'test@test.com' })
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    const logoutButton = screen.getByText('Sign Out');
    fireEvent.click(logoutButton);

    expect(firebaseAuth.signOut).toHaveBeenCalledTimes(1);
    expect(firebaseAuth.signOut).toHaveBeenCalledWith('mocked-auth');
  });

  it('should render menu items from useRenderHeadermenu', () => {
    const store = configureStore({
      reducer: {
        config: () => ({ hamburgerMenuOpen: true }),
        user: () => ({ uid: '123', email: 'test@test.com' })
      }
    });

    render(
      <Provider store={store}>
        <HamburgerMenu innerRef={mockRef} />
      </Provider>
    );

    expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
    expect(screen.getByText('Menu Item 2')).toBeInTheDocument();
  });
});