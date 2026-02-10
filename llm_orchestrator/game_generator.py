from rule_engine import decide_strategy
from disease_profiles import DISEASE_PROFILES
from prompt_templates import build_prompt
from llm_api import call_llm

def generate_game(user_data, performance):
    profile = DISEASE_PROFILES[user_data["disease"]]
    strategy = decide_strategy(profile, user_data["emotion"], performance)

    prompt = build_prompt(user_data, strategy)

    response = call_llm(prompt)

    return response
