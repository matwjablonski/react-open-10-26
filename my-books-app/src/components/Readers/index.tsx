import type { Reader } from "../../types/reader";
import { ReadersList } from "../ReadersList";
import { useApi } from "../../hooks/useApi";

const Readers = () => {
    const { isLoading, data: readers, error} = useApi<Reader[]>('users');

    if (isLoading) {
        return <p>Trwa ładowanie danych</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return readers && <ReadersList readers={readers} />
}

export default Readers;