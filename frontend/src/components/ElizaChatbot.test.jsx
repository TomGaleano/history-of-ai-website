import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ElizaChatbot from './ElizaChatbot';
import { describe, it, expect, vi } from 'vitest';
import * as api from '../services/api';

vi.mock('../services/api');

describe('ElizaChatbot', () => {
  it('should send a message and display the response', async () => {
    const mockReply = 'Tell me more about that.';
    api.askEliza.mockResolvedValue({ data: { reply: mockReply } });

    render(<ElizaChatbot />);

    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);

    const userMessage = await screen.findByText('User:');
    expect(userMessage.parentElement).toHaveTextContent('User: Hello');

    const elizaMessage = await screen.findByText('ELIZA:');
    expect(elizaMessage.parentElement).toHaveTextContent('ELIZA: Tell me more about that.');
  });
});
