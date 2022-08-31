import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../reducers/loginReducer";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [userName, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigateToUpload = useNavigate();
    const handleSubmit = () => {
        dispatch(login({name: userName, loginTime: new Date().toLocaleString()}));
        navigateToUpload("/list");
        // console.log(userName+" "+password)
    }
    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    return (
        <div className={"w-full h-full bg-gray-300 shadow shadow-lg shadow-gray-700 backdrop-blur-3xl backdrop-blur h-full grid place-items-center"}>
            <div className={"w-1/4 h-1/2 w-full md:bg-gray-200 grid place-items-center justify-center rounded rounded-l"}>
                <input type={"text"} onChange={(e) => updateUsername(e)} placeholder={"Username"} className={"inputClass placeholder:text-xl w-48 outline-none rounded rounded-l h-10"}/>
                <input type={"password"} placeholder={"Password"} className={"inputClass w-48 outline-none rounded rounded-l h-10"}/>
                <button className={"bg-blue-500 text-xl h-10 rounded rounded-l w-36 self-center"} onClick={()=>handleSubmit()}>LogIn</button>
            </div>
        </div>
    )
}
export default Home;