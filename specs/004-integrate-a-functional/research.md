# Research: ELIZA Chatbot Integration

## 1. User Input Character Limit

- **Decision**: A character limit of 512 characters will be enforced for user input.
- **Rationale**: This prevents overly long inputs that could strain the backend or be used for abuse, while still allowing for reasonable user messages.
- **Alternatives Considered**: No limit was considered but rejected to prevent potential performance and security issues.

## 2. Handling of Non-Alphanumeric Inputs

- **Decision**: The ELIZA chatbot will provide a generic, non-committal response to inputs containing only symbols, emojis, or patterns it cannot recognize.
- **Rationale**: Implementing specific logic for all types of non-alphanumeric input is complex and provides little value for this feature. A generic response is sufficient to handle these edge cases gracefully.
- **Alternatives Considered**: Attempting to interpret or respond to emojis and symbols was rejected due to high implementation complexity for low user value.

## 3. Conversation State Persistence

- **Decision**: The conversation history will not be persisted between sessions or page reloads.
- **Rationale**: The goal of the feature is a simple, interactive demonstration of ELIZA. Session persistence adds complexity (local storage, state management) that is not required to meet the core user story. Each visit will be a new, fresh interaction.
- **Alternatives Considered**:
  - **Session Storage**: Persisting the conversation in session storage was considered but rejected to maintain simplicity.
  - **Local Storage**: Persisting across browser sessions was rejected as it is out of scope for this simple feature.
