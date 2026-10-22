import { useParams } from "react-router"

export const BookPage = () => {
    const { id } = useParams();

    return (
        <div>
            Ksiązka, ktora Cie interesuje ma id: {id}
        </div>
    )
}