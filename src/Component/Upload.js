// import "antd/dist/antd.css";
import 'antd/dist/antd.min.css';
import {Upload} from "antd";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveCsv} from "../reducers/reducer";
import csvToJson from "csvtojson";

const UploadFun = () => {
    const [csvFile, setFile] = useState(null);
    // const [csvString, setCsvString] = useState("");
    const [dataSetName, setDatasetName] = useState("");
    const dispatch = useDispatch();

    const uploadFile = async () => {
        const reader = new FileReader();
        reader.readAsText(csvFile);
        // console.log(csvFile);
        reader.onload = function (e) {
            const csvString = e.target.result.toString();
            csvToJson().fromString(csvString).then(json => {
                // json.forEach(item => {
                //     console.log(item);
                // })
                dispatch(saveCsv(
                    {
                        jsonData: json,
                        fileType: csvFile.type === 'text/csv' ? 'csv' : 'xlsx',
                        id: Date.now(),
                        name: dataSetName,
                        records: json.length,
                        createdAt: new Date().toLocaleString(),
                        modifiedAt: new Date().toLocaleString()
                    }
                ));
            })
        }
        // csvToJson().fromString(csvString).then(json => {
        //     // json.forEach(item => {
        //     //     console.log(item);
        //     // })
        //     dispatch(saveCsv(
        //         {
        //             jsonData: json,
        //             id: Date.now(),
        //             name: dataSetName,
        //             records: json.length,
        //             createdAt: Date.now(),
        //         }
        //     ));
        // })
        // console.log(jsonArray);
    }

    return (
        <div className={"w-full bg-gray-300 h-full grid place-items-center"}>
            <div className={"w-1/2 flex flex-col justify-center h-fit"}>
                <div className={"inputClass self-center w-full h-48 grid place-items-center bg-gray-200"}>
                    <div className={"w-1/2"}>
                        <Upload.Dragger beforeUpload={e => {
                            setFile(e);
                            return false;
                        }}>
                            <h1>Drag Drop a file to Upload</h1>
                        </Upload.Dragger>
                    </div>
                </div>
                <input onChange={(e)=>setDatasetName(e.target.value)} type={"text"} placeholder={"Dataset Name"}
                       className={"inputClass placeholder:text-xl outline-none self-center my-2 w-full h-20 grid place-items-center bg-gray-200"}/>
                <button onClick={() => uploadFile()}
                        className={"bg-blue-500 text-xl h-10 rounded rounded-l w-48 self-center"}>
                    Upload
                </button>
            </div>
        </div>
    )
}
export default UploadFun;