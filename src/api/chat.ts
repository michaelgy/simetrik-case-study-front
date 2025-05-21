interface ChatResponse {
    response: string;
}

export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error('Failed to get response');
        }

        const data: ChatResponse = await response.json();
        return data.response;
    } catch (error) {
        console.error('Chat error:', error);
        throw error;
    }
} 