import deleteIcon from "./icons8-delete-32.png";
import editIcon from "./icons8-edit-64.png";
import {useDispatch} from "react-redux";
import {deleteCsv, updateCsv} from "../reducers/reducer";
import {Link} from "react-router-dom";
import {useState} from "react";

const listItem = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editing, setEditing] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [updatedName, setName] = useState(props.name);

    const deleteItem = (name) => {
        // console.log("deleted",name);
        dispatch(deleteCsv(name));
    }
    const editInfo = (name) => {
        // console.log("edited",name);
        setEditing(editing => !editing);
    }
    const updateInfo = () =>{
        dispatch(updateCsv({id: props.id, name: updatedName, date: new Date().toLocaleString()}));
        setEditing(editing => !editing);
    }
    const changeName = (e) => {
        setName(e.target.value);
    }
    return(
            <div className={"myWidth rounded rounded-l mx-3 my-1 h-16 bg-gray-200 flex justify-between flex-row"} >
                {
                    editing === true ?
                        <div className={"my-1 flex flex-row w-80 h-full"}>
                            <input className={"w-48 inputClass text-xl h-10 my-2 mx-2 outline-none rounded rounded-l"} type={"text"} defaultValue={props.name} onChange={(e) => changeName(e) }/>
                            <button className={"text-xl outline-none w-14 bg-white mx-2 h-10 my-2 rounded rounded-l"} onClick={() => updateInfo()}>
                                OK
                            </button>
                        </div>
                    :
                        <div className={"my-4 w-48 mx-2"}>
                            <Link to={"/csvTable"} state={{nameOfListItem: props.name, jsonData: props.jsonData, dataType: props.fileType, keysForData: Object.keys(props.jsonData[0])}} className={"my-2 text-xl"}>{props.name}</Link>
                        </div>
                }
                <div className={"w-1/2 flex flex-row"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"text-xl my-1 font-medium"}>Records</h1>
                        <h1 className={"text-lg font-light"}>{props.records}</h1>
                    </div>
                    <div className={"flex w-80 mx-12 flex-col"}>
                        <h1 className={"text-xl my-1 font-medium"}>Created At</h1>
                        <h1 className={"text-lg font-light w-full"}>{props.createdAt}</h1>
                    </div>
                    <div className={"flex w-80 mx-2 flex-col"}>
                        <h1 className={"text-xl my-1 font-medium"}>Modified At</h1>
                        <h1 className={"text-lg font-light w-full"}>{props.modifiedAt}</h1>
                    </div>
                </div>
                <div className={"w-48 my-2 flex flex-row justify-evenly"}>
                    <button onClick={()=>deleteItem(props.name)}>
                        <img src={deleteIcon} alt={'delete'} className={"hover:w-10 hover:h-10 w-8 my-1 h-8"}/>
                    </button>
                    <button onClick={() => editInfo(props.name)}>
                        <img src={editIcon} alt={'edit'} className={"hover:w-10 hover:h-10 w-8 my-1 h-8"}/>
                    </button>
                </div>
            </div>
    )
}
export default listItem;