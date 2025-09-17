import React from 'react';
import { render, screen } from '@testing-library/react';
import DecadeView from './DecadeView';
import { describe, it, expect } from 'vitest';

describe('DecadeView', () => {
  it('renders a message when no decade is selected', () => {
    render(<DecadeView />);
    expect(screen.getByText('Select a decade to see the details.')).toBeInTheDocument();
  });

  it('renders the decade details', () => {
    const decade = {
      title: 'The 1950s: The Dawn of AI',
      milestoneModels: 'The Turing Test, Logic Theorist, and the first neural networks.',
      codingFocus: 'Focus on symbolic reasoning and the beginnings of machine intelligence.',
      interactiveToolShowcase: 'A simulation of the Logic Theorist program.',
    };
    render(<DecadeView decade={decade} />);
    expect(screen.getByText('The 1950s: The Dawn of AI')).toBeInTheDocument();
    expect(screen.getByText('The Turing Test, Logic Theorist, and the first neural networks.')).toBeInTheDocument();
  });
});
