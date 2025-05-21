import { API_BASE_URL } from '~/constants';

export async function uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`${API_BASE_URL}/file_processor_api`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        const x = await response.json();
        return JSON.stringify(x);
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
} 