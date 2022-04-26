import { ItemCount } from "./ItemCount"


export const ItenListContainer = () => {

    const initial = 1
    const stockInitial = 9
    const onAdd = () => {

    }
    return (
        <ItemCount stockInitial={stockInitial} initial={initial} onAdd={onAdd}  />
    )
}