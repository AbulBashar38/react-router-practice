import { Button } from "react-bootstrap";
import { Route, Router, Routes } from "react-router-dom";
import Chart from "./component/Chart/Chart";
import Home from "./component/Home/Home";
import Shop from "./component/Shop/Shop";
import NotFound from "./component/NotFound/NotFound";
import "./styles.css";
import Friends from "./component/Friends/Friends";
import FriendDetails from "./component/FriendDetails/FriendDetails";
import Header from "./component/Header/Header";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
