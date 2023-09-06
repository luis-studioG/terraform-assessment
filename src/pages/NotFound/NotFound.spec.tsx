import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { NotFound } from '@/pages';

describe('NotFound page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
  });

  it('lost title text', () => {
    const titleElement = screen.getByText('Oops, something went wrong...');
    expect(titleElement).toBeInTheDocument();
  });

  it('lost message text', () => {
    const messageElement = screen.getByText(
      'Sorry, the page you are looking for doesn’t exist or appears to be down. Please try again later.',
    );
    expect(messageElement).toBeInTheDocument();
  });

  it('button to go back', () => {
    const buttonElement = screen.getByText('Back to Pulse');
    expect(buttonElement).toBeInTheDocument();
  });
});
