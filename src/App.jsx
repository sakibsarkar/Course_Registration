import "./App.css";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import SideCart from "./SideCart/SideCart";

function App() {


  return (
    <>
      <Header></Header>
      <div className="content">
      <Courses></Courses>
      <SideCart></SideCart>
      </div>
      
    </>
  )
}

export default App
