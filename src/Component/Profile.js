import logo from "./icons8-user-male-skin-type-5-80.png"
import {useDispatch, useSelector} from "react-redux";
import {loginTime, logout, userName} from "../reducers/loginReducer";
const Profile = () => {
    const username = useSelector(userName)
    const logTime = useSelector(loginTime)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(logout({loggedIn: false}));
    }
    return(
        <div className={"w-full bg-gray-300 h-full grid place-items-center"}>
            <div className={"md:w-2/6 h-1/2 w-full grid place-items-center rounded rounded-l h-2/3 bg-gray-200"}>
                <div className={"flex h-full flex-col w-full justify-center place-items-center"}>
                    <div className={"w-48 h-48 rounded rounded-b-full rounded-t-full border border-4 border-blue-400 shadow shadow-lg shadow-blue-300"}>
                        <img src={logo} className={"my-8 mx-8 w-28 h-28"} alt={"ProfileImage"}/>
                    </div>
                    <div className={"my-5 w-full flex flex-row justify-center"}>
                        <h1 className={"text-3xl font-light"}>User: {username}</h1>
                    </div>
                    <div className={"my-5 w-full flex flex-row justify-center"}>
                        <h1 className={"text-3xl font-light"}>Login Time: {logTime}</h1>
                    </div>
                </div>
                <button onClick={()=>handleSubmit()} className={"bg-blue-500 text-xl h-10 rounded rounded-l w-36 self-center"}>
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Profile;