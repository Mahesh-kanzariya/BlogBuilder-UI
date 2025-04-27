
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";


function App() {

  return (
    <>
    <ScrollToTop/>
      <Outlet />
    </>
  )
}

export default App
