import {selected} from "../reducers/reducer";
import ListItem from "./listItem";
import {useSelector} from "react-redux";
const List = () => {
    const selectedListItems = useSelector(selected);
    return(
        <div className={"w-screen bg-gray-300 flex flex-col align-middle h-full"}>
            <div className={"my-8 mx-8"}>
                {
                    selectedListItems.length === 0 ? <div className={"text-3xl"}>EmptyList! First Upload Something</div> : selectedListItems.map(item => {
                        return <ListItem key={item.id} {...item} />
                    })
                }
            </div>
        </div>
    )
}
export default List;