import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';
import { describe, it, expect, vi } from 'vitest';

describe('NavBar', () => {
  it('renders the navigation bar with buttons for each decade', () => {
    const decades = ['1950s', '1960s', '1970s'];
    render(<NavBar decades={decades} />);
    decades.forEach((decade) => {
      expect(screen.getByText(decade)).toBeInTheDocument();
    });
  });

  it('calls the onSelectDecade function when a button is clicked', () => {
    const decades = ['1950s', '1960s', '1970s'];
    const onSelectDecade = vi.fn();
    render(<NavBar decades={decades} onSelectDecade={onSelectDecade} />);
    fireEvent.click(screen.getByText('1960s'));
    expect(onSelectDecade).toHaveBeenCalledWith('1960s');
  });

  it('highlights the selected decade', () => {
    const decades = ['1950s', '1960s', '1970s'];
    render(<NavBar decades={decades} selectedDecade="1960s" />);
    expect(screen.getByText('1960s')).toHaveStyle('font-weight: bold');
    expect(screen.getByText('1950s')).toHaveStyle('font-weight: normal');
  });
});
