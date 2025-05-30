import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';
import '@testing-library/jest-dom/vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        createdBy: 'Created by',
      };
      return translations[key] || key;
    },
  }),
}));

vi.mock('utils/assets', () => ({
  MY_BIO_LINK: 'https://example.com/bio',
  APP_NAME: 'Test App'
}));

describe('Footer', () => {
  it('renders without crashing', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText("© 2025 Test App")).toBeInTheDocument();
    expect(screen.getByText("Created by")).toBeInTheDocument();
    expect(screen.getByText(`© ${currentYear} Test App`)).toBeInTheDocument();
  });

  it('renders the author link with correct attributes', () => {
    render(<Footer />);
    const authorLink = screen.getByText('@keithmchd48');
    
    expect(authorLink).toBeInTheDocument();
    expect(authorLink.tagName).toBe('A');
    expect(authorLink).toHaveAttribute('href', 'https://example.com/bio');
    expect(authorLink).toHaveAttribute('target', '_blank');
    expect(authorLink).toHaveAttribute('rel', 'noreferrer');
    expect(authorLink).toHaveClass('text-brand-orange');
  });
});