import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";


const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20 pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main;
