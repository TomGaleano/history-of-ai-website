# Data Model: ELIZA Chatbot

## Entities

### Conversation Turn

Represents a single exchange in the conversation between the user and ELIZA.

**Attributes**:
- `author`: (string) The author of the message. Either "User" or "ELIZA".
- `message`: (string) The content of the message.

**State Transitions**:
- A new `Conversation Turn` is created for each user input and each ELIZA response.
- The collection of `Conversation Turn` objects represents the full conversation history.
