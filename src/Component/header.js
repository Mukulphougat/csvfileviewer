import cogLogo from "./cognida_logo_white.png"
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className={"flex flex-row h-12 bg-black justify-between w-full"}>
            <Link to={"/"}><img src={cogLogo} alt={"logo"} className={"my-2 mx-2 h-8"} /></Link>
            <div className={"flex my-2 flex-row justify-around"}>
                <Link to={"/upload"} className={"mx-4 active:text-blue-900 text-xl text-white"}>Upload</Link>
                <Link to={"/list"} className={"mx-4 active:text-blue-900 text-xl text-white"}>List</Link>
                <Link to={"/profile"} className={"mx-4 active:text-blue-900 text-xl text-white"}>Profile</Link>
            </div>
        </div>
    )
}
export default Header;