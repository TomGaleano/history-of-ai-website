import { render, screen } from '@testing-library/react';
import DigitDetector from './DigitDetector';

test('renders DigitDetector component', () => {
  render(<DigitDetector />);
  const canvasElement = screen.getByRole('graphics-document');
  expect(canvasElement).toBeInTheDocument();

  const predictButton = screen.getByRole('button', { name: /predict/i });
  expect(predictButton).toBeInTheDocument();

  const clearButton = screen.getByRole('button', { name: /clear/i });
  expect(clearButton).toBeInTheDocument();
});
