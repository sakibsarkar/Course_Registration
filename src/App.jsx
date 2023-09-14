import "./App.css";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import SideCart from "./SideCart/SideCart";
import { useState } from "react";

function App() {

  const [selectedCourse, setselectedCourse] = useState([])
  const handleAddCourseToCart = (course) => {
    let selectedCourses = [...selectedCourse, course]
    let filteredCouse = selectedCourses.filter((item, index) => selectedCourses.indexOf(item) == index) //removing the same same courses from the array 
    
    
    setselectedCourse(filteredCouse)

  }

  return (
    <>
      <Header></Header>
      <div className="content">
        <Courses handleAddCourseToCart={handleAddCourseToCart}></Courses>
        <SideCart selectedCourse={selectedCourse}></SideCart>
      </div>

    </>
  )
}

export default App
