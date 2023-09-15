import "./SideCart.css";
import Swal from "sweetalert2";

// ES6 Modules or TypeScript

const SideCart = ({ selectedCourse,reamainCredit }) => {
    //calculating total price
    let totalPrice = 0;
    selectedCourse.map(item => totalPrice += item.price)

    // calcultaing total creditHour 
    let TotalCreditHour = 0
    selectedCourse.map(item => TotalCreditHour += item.credit_hour)

    //calculating tota remaining credit
   

    return (
        <div>
            <div className="cartCon">
                <div className="remainingCon">
                    <h1>Credit Hour Remaining {reamainCredit} hr</h1>
                </div>

                <div className="course">
                    <h1>Course Name</h1>
                </div>

                <div className="myCourses">
                {selectedCourse.map((item, index) => <p key={item.course_id}>{index + 1} {item.course_name}</p>) }

                </div>

                <div className="creditCon">
                    <h2>Total Credit Hour : {TotalCreditHour}</h2>
                </div>

                <div className="totalCon">
                    <h1>Total Price: {totalPrice} USD</h1>
                </div>
            </div>
        </div>

    );

}



export default SideCart;