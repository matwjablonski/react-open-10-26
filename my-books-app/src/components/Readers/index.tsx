import { useEffect, useState } from "react";
import type { Reader } from "../../types/reader";
import { ReadersList } from "../ReadersList";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const Readers = () => {
    const [readers, setReaders] = useState<Reader[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchReaders = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(apiUrl, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error('Bład pobierania uzytkownikow');
                }
                const data: Reader[] = await res.json();

                if (!controller.signal.aborted) {
                    setReaders(data);
                }
            } catch(e: unknown) {
                if (!controller.signal.aborted) {
                    if (e instanceof Error) setError(e.message);
                    else setError(e as string);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchReaders();
        return () => {
            controller.abort();
        }
    }, [])

    if (isLoading) {
        return <p>Trwa ładowanie danych</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return <ReadersList readers={readers} />
}

export default Readers;