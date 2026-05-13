package com.frimmy.backend.recipe;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

    private final ChatClient chatClient;

    public RecipeService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }
}
