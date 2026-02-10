def decide_strategy(profile, emotion, performance):
    strategy = profile.copy()

    if emotion == "bored":
        strategy["pace"] = "faster"
        strategy["reward_frequency"] = "very_high"

    if emotion == "anxious":
        strategy["pace"] = "slower"
        strategy["visual_style"] = "very_calm"
        strategy["timer"] = False

    if performance["error_rate"] > 0.5:
        strategy["complexity"] = "very_low"

    return strategy
