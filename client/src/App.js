import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import "react-toastify/dist/ReactToastify.css";
import Selection from "./pages/selection/Selection";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.User);
  const isKnownPath = [
    "/",
    "/signup",
    "/home",

    "/about-us",
    "/selection",
  ].includes(pathname);
  return (
    <>
      {isKnownPath && isAuth && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/home"
          element={isAuth ? <Home /> : <PageNotFound />}
        />

        <Route
          exact
          path="/about-us"
          element={isAuth ? <AboutUs /> : <PageNotFound />}
        />
        <Route
          exact
          path="/selection"
          element={isAuth ? <Selection /> : <PageNotFound />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
