import "./Courses.css";
import Course from "../Course/Course";
import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {

    const[courses,setCourses] = useState([])
    useEffect(()=>{
        fetch("courseData.json")
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])

    return (
        <div className="container">
            {
                courses.map((course)=><Course key={course.course_id} course={course}></Course>)
            }
            
        </div>
    );
};

export default Courses;