import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const BookingDetails = ({ seatNumber, selectSeat }) => {

    const [bookingInfo, setBookingInfo] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('https://stark-refuge-81426.herokuapp.com/regDetails?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setBookingInfo(data));

    }, [])

    const deleteTask = (_id) => {
        fetch(`https://stark-refuge-81426.herokuapp.com/regDetailsDelete/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(deleteTask)
        })
            .then(response => response.json())
            .then(result => {
                alert('deleted')
            })
    }

      return (
            <div className="row m-5">
            <div className="">
                {bookingInfo.map(register =>
                    <div className="mt-5">
                        <h5>{register.name}</h5>
                        <p>User Name: {register.email}</p>
                        <button type="button" className="btn btn-primary" 
                        onClick={() => deleteTask(register._id)}>Delete</button>
                    </div>
                )}

            </div>

            {/* <div>
            <SeatDetails></SeatDetails>
            </div> */}
            

        </div>
      );
};

export default BookingDetails;