import Header from "./Component/header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Upload from "./Component/Upload";
import Home from "./Component/Home";
import List from "./Component/List";
import Profile from "./Component/Profile";
import Table from "./Component/Table";
import {useSelector} from "react-redux";
import {loggedIn} from "./reducers/loginReducer";

function App() {
    const isLoggedIn = useSelector(loggedIn);
    return (
      <BrowserRouter>
          <div className={"w-full h-screen flex flex-col"}>
              <Header />
              <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/upload"} element={isLoggedIn ? <Upload/> : (<Navigate replace to={"/"} />)} />
                  <Route path={"/list"} element={isLoggedIn ? <List /> : (<Navigate replace to={"/"} />)} />
                  <Route path={"/profile"} element={isLoggedIn ? <Profile /> : (<Navigate replace to={"/"} />)} />
                  <Route path={"/csvTable"} element={isLoggedIn ? <Table /> : (<Navigate replace to={"/"} />)}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
