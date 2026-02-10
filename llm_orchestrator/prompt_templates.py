BASE_PROMPT = """
You are an AI game designer for neurodiverse children.

Your task:
Generate a math learning game configuration in JSON format only.

Rules:
- Follow the strategy strictly.
- Output only JSON.
- No explanation text.
"""

def build_prompt(user_data, strategy):
    return f"""
{BASE_PROMPT}

User Profile:
Age: {user_data['age']}
Disease: {user_data['disease']}
Emotion: {user_data['emotion']}
Topic: {user_data['topic']}

Teaching Strategy:
{strategy}

Return JSON game configuration.
"""
