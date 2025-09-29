import re

def get_eliza_response(user_message: str) -> str:
    """Generates a response from ELIZA based on the user's message."""
    user_message = user_message.lower()

    if re.search(r'\b(hello|hi)\b', user_message):
        return "Hello. How are you feeling today?"

    if re.search(r'\b(i am|i\'m) sad\b', user_message):
        return "I am sorry to hear that you are sad. What is making you feel this way?"

    if re.search(r'\b(i am|i\'m) happy\b', user_message):
        return "That is great to hear. What is making you so happy?"

    if re.search(r'\b(i need|i want)\b', user_message):
        return "Why do you need that?"

    if re.search(r'\b(why don\'t you|why can\'t i)\b', user_message):
        return "Why do you think that is?"

    if re.search(r'\b(i can\'t)\b', user_message):
        return "How do you know you can't?"

    if re.search(r'\b(are you)\b', user_message):
        return "What if I am?"

    if re.search(r'\b(what)\b', user_message):
        return "Why do you ask?"

    if re.search(r'\b(because)\b', user_message):
        return "Is that the real reason?"

    if re.search(r'\b(yes|no)\b', user_message):
        return "You seem very certain. Can you tell me more?"

    return "Tell me more about that."
