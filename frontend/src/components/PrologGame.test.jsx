import React from 'react';
import { render, screen } from '@testing-library/react';
import PrologGame from './PrologGame';
import { describe, it, expect } from 'vitest';

describe('PrologGame', () => {
  it('renders the three panels', () => {
    render(<PrologGame />);
    expect(screen.getByTestId('story-guide-panel')).toBeInTheDocument();
    expect(screen.getByTestId('prolog-interpreter-panel')).toBeInTheDocument();
  });
});