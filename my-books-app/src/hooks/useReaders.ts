import { useQuery } from "@tanstack/react-query";
import type { Reader } from "../types/reader";

const apiUrl = 'https://jsonplaceholder.typicode.com/';

const fetchReaders = async () => {
    const res = await fetch(`${apiUrl}users`);
    if (!res.ok) {
        throw new Error('Bład pobierania uzytkownikow');
    }
    const data: Reader[] = await res.json();

    return data;
}

export const useReaders = () => {
    return useQuery({
        queryFn: fetchReaders,
        queryKey: ['readers']
    });
}
