import {Link, useLocation} from "react-router-dom";
import backLogo from "./icons8-back-50.png"
const Table = (props) => {
    const location = useLocation()
    // const [keys, setKeys] = useState([]);
    const {nameOfListItem, jsonData, dataType} = location.state;
    // const getOnlyKeys = () => {
    //     // Object.keys(jsonData[0])
    //     Object.keys(jsonData[0])
    // }
    return (
        <div className={"myWidth mx-4 h-full flex flex-col"}>
            {/*<h2>{Object.keys(jsonData[0])}</h2>*/}
            {/*<button onClick={getOnlyKeys}>Get Only Keys</button>*/}
            <div className={"flex my-2 w-full flex-row justify-between"}>
                <Link to={"/list"}><img src={backLogo} className={"w-6 h-6"} alt={"backToList"}/></Link>
                <div>
                    <span className={"text-lg font-thin"}>Selected Dataset</span>: <span className={"font-medium"}>{nameOfListItem}.{dataType}</span>
                </div>
            </div>
            <table className={"my-4"}>
            <tbody className={"w-full"}>
                <tr className={"bg-gray-300 rounded rounded-l my-1 h-10 flex flex-row"}>
                    {
                        Object.keys(jsonData[0]).map((key, index) => {
                            return <td key={index} className={"mx-1 my-2 font-medium w-full"}>{key}</td>
                        })
                    }
                </tr>
                {jsonData.map((item, i) => {
                        return (
                            <tr className={"border rounded rounded-l my-1 h-fit flex flex-row border-1"} key={i}>
                                {
                                    Object.keys(jsonData[0]).map((key, index) => {
                                        return <td key={index} className={"my-2 h-fit text-sm w-full"}>{item[key]}</td>
                                    })
                                }
                                {/*<div className={"mx-2 "}>{item.Gender}</div>*/}
                                {/*<div className={"mx-2 "}>{item.Married}</div>*/}
                                {/*<div className={"mx-2 "}>{item.Education}</div>*/}
                            </tr>
                        )
                    }
                )}
            </tbody>
            </table>
        </div>
    )
}
export default Table;