import { useState } from "react";
import type { Reader } from "../../types/reader"

type ReadersListProps = {
    readers: Reader[];
}

export const ReadersList = ({ readers }: ReadersListProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <p>W naszej aplikacji jest aktywnych {readers.length} czytelników</p>
            <button
                onClick={() => {setIsExpanded((v) => !v)}}
            >{isExpanded ? 'Ukryj' : 'Zobacz'} liste czytelników</button>
            {isExpanded && <ul>
                {
                    readers.map(reader => (
                        <li>
                            <h4>{reader.name} ({reader.username})</h4>
                            <p>{reader.email}</p>
                            <p>{reader.website}</p>
                        </li>
                    ))
                }    
            </ul>}
        </>
    )
}