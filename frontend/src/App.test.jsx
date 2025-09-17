import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { getDecades } from './services/api';
import { describe, it, expect, vi } from 'vitest';

vi.mock('./services/api');

const mockDecades = {
  "1950s": {
    "id": "1950s",
    "title": "The 1950s: The Dawn of AI",
    "milestoneModels": "The Turing Test, Logic Theorist, and the first neural networks.",
    "codingFocus": "Focus on symbolic reasoning and the beginnings of machine intelligence.",
    "interactiveToolShowcase": "A simulation of the Logic Theorist program.",
  },
  "1960s": {
    "id": "1960s",
    "title": "The 1960s: The Rise of Expert Systems",
    "milestoneModels": "Shakey the robot, ELIZA, and the development of Lisp.",
    "codingFocus": "Development of specialized programming languages for AI.",
    "interactiveToolShowcase": "A chatbot inspired by ELIZA.",
  },
};

describe('App', () => {
  it('renders the default decade and allows switching between decades', async () => {
    getDecades.mockResolvedValue({ data: mockDecades });
    render(<App />);

    // Check that the default decade is rendered
    await waitFor(() => {
      expect(screen.getByText('The 1950s: The Dawn of AI')).toBeInTheDocument();
    });

    // Click on the 1960s button
    fireEvent.click(screen.getByText('1960s'));

    // Check that the 1960s content is rendered
    await waitFor(() => {
      expect(screen.getByText('The 1960s: The Rise of Expert Systems')).toBeInTheDocument();
    });
  });
});
