import "./App.css";
import Courses from "./Courses/Courses";
import Header from "./Header/Header";
import SideCart from "./SideCart/SideCart";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {

  const [selectedCourse, setselectedCourse] = useState([])
  const [reamainCredit,setRemainCredit] = useState(20)
  const handleAddCourseToCart = (course) => {

    if (selectedCourse.includes(course)) {
      toast.error("This course has already been added")
    }
    else{
     let mycredit =  reamainCredit - course.credit_hour
     if(mycredit >= 0){
        setRemainCredit(mycredit)
        let selectedCourses = [...selectedCourse, course]
          setselectedCourse(selectedCourses)
      }
      else{
        toast.error("You dont have enough credit remaining")
      }
      
     
      
    }

  }

  return (
    <>
      <Toaster />
      <Header></Header>
      <div className="content">
        <Courses handleAddCourseToCart={handleAddCourseToCart}></Courses>
        <SideCart reamainCredit={reamainCredit} selectedCourse={selectedCourse}></SideCart>
      </div>

    </>
  )
}

export default App
