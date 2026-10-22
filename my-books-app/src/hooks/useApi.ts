import { useEffect, useState } from "react"
import { buildApiUrl } from "../utils/buildApiUrl";

type ApiResponseType<T> = {
    data: T | null,
    isLoading: boolean,
    error: string | null,
}

type Area = 'public' | 'api';

export const useApi = <T>(endpoint: string, area: Area = 'api' ) => {
    const [apiState, setApiState] = useState<ApiResponseType<T>>({
        data: null,
        isLoading: false,
        error: null,
    });

    useEffect(() => {
        const controller = new AbortController();

        const fetchReaders = async () => {
            setApiState({
                isLoading: true,
                data: null,
                error: null,
            });

            try {
                
                const res = await fetch(area === 'api' ? buildApiUrl(endpoint) : endpoint, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error('Bład pobierania uzytkownikow');
                }
                const data: T = await res.json();

                if (!controller.signal.aborted) {
                    setApiState((prevState) => ({
                        ...prevState,
                        data,
                        error: null,
                    }));
                }
            } catch(e: unknown) {
                if (!controller.signal.aborted) {
                    const errorMsg: string = e instanceof Error ? e.message : e as string;
                    setApiState((prevState) => ({
                        ...prevState,
                        error: errorMsg,
                        data: null,
                    }))
                }
            } finally {
                setApiState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                }))
            }
        }

        fetchReaders();
        
        return () => {
            controller.abort();
        }
    }, [])

    return apiState;
}