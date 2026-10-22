export const buildApiUrl = (endpoint: string) => 
    `${import.meta.env.VITE_API_URL}${endpoint}` 