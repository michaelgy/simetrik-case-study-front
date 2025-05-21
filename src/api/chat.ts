import { API_BASE_URL } from '~/constants';

interface ChatResponse {
    response: string;
}

interface ChatError {
    error: string;
}

const threadId = crypto.randomUUID();
console.log("threadId", threadId);

export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await fetch(`${API_BASE_URL}/text_chat_agent_api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ thread_id: threadId, message }),
        });

        const data = await response.json();

        if (!response.ok) {
            const errorData = data as ChatError;
            throw new Error(errorData.error || 'Failed to get response');
        }

        const responseData = data as ChatResponse;
        return responseData.response;
    } catch (error) {
        console.error('Chat error:', error);
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
        }
        throw error;
    }
} 