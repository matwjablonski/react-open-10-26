import { useEffect } from "react";

type WindowTitleChangerProps = {
    booksAmount: number;
}

export const WindowTitleChanger = ({ booksAmount = 0 }: WindowTitleChangerProps) => {
    useEffect(() => {
        console.log(`Twój zbiór liczy ${booksAmount} książek`);
        document.title = `Twój zbiór liczy ${booksAmount} książek`;

        return () => {
            document.title = 'Moja biblioteka';
        }
    }, [booksAmount])

    return null;
}