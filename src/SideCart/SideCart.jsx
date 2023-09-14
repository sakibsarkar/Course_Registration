import "./SideCart.css";
import Swal from "sweetalert2";

// ES6 Modules or TypeScript

const SideCart = ({ selectedCourse }) => {
    //calculating total price
    let totalPrice = 0;
    selectedCourse.map(item => totalPrice += item.price)

    // calcultaing total creditHour 
    let TotalCreditHour = 0
    selectedCourse.map(item => TotalCreditHour += item.credit_hour)

    //calculating tota remaining credit
    let remainingCreditHour = 20;
    let TF = true;
    for (let x of selectedCourse) {
        let defrance = remainingCreditHour - x.credit_hour
        if (defrance >= 0) {
            remainingCreditHour = remainingCreditHour - x.credit_hour
           
        }
        else{
            TF = false
        }

    }

    return (
        <div>
            <div className="cartCon">
                <div className="remainingCon">
                    <h1>Credit Hour Remaining {remainingCreditHour} hr</h1>
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