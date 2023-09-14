import "./SideCart.css";

const SideCart = () => {
    return (
        <div>
            <div className="cartCon">
            <div className="remainingCon">
                <h1>Credit Hour Remaining 20 hr</h1>
            </div>

            <div className="course">
                <h1>Course Name</h1>
            </div>
            
            <div className="myCourses">
                    <p>1 Hello world</p>
                    <p>1 Hello world</p>
                    <p>1 Hello world</p>
                    
                </div>

                <div className="creditCon">
                    <h2>Total Credit Hour : 13</h2>
                </div>

                <div className="totalCon">
                    <h1>Total Price: 4800 USD</h1>
                </div>
        </div>
        </div>
        
    );
};

export default SideCart;