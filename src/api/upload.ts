export async function uploadFile(file: File): Promise<boolean> {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Upload failed');
        }

        return true;
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
} 