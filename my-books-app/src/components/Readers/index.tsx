import { ReadersList } from "../ReadersList";
// import { useApi } from "../../hooks/useApi";
import { useReaders } from "../../hooks/useReaders";

const Readers = () => {
    // const { isLoading, data: readers, error} = useApi<Reader[]>('users');
    const {isLoading, isError, error, data: readers} = useReaders()

    if (isLoading) {
        return <p>Trwa ładowanie danych</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return readers && <ReadersList readers={readers} />
}

export default Readers;