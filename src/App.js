import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import LogIn from "./Pages/Authentications/Login/LogIn";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/Home/Homepage/HomePage";
import Reviews from "./Pages/Reviews/Reviews";
import Header from "./Pages/Shared/Header/Header";
import Signup from "./Pages/Authentications/Signup";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import RequireAuth from "./Pages/Authentications/RequireAuth/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
