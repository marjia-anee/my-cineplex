import React, { useContext, useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';


const Register = () => {

      const history = useHistory();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();

      const [movie, setMovies] = useState([])


      const { register, handleSubmit, watch, errors } = useForm();

      useEffect(() => {
            fetch('https://stark-refuge-81426.herokuapp.com/movie/'+ _id)
                .then(res => res.json())
                .then(data => setMovies(data))
        }, [_id])

      const onSubmit = data => {
            console.log('form submitted', data);
            const submittedItems = {...data, ...movie, registerTime: new Date() }; 

            fetch('https://stark-refuge-81426.herokuapp.com/addReg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submittedItems)
            
        })

        .then(response => response.json())
        .then(data => {
            if (data) {
                history.push('/bookingDetails');
            }
        })
      }


      console.log(watch("example")); // watch input value by passing the name of it


     

      return (
            <div>
             
                 <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Booking Information</h2>

                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error">Name is required</span>}
                        <br/>
                        <select name="gender" ref={register}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                        </select>
                        <br/>

                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                        {errors.email && <span className="error">Email is required</span>}

                        <input name="movie" defaultValue={movie.name} ref={register({ required: true })} placeholder="Movie Name" />
                        {errors.task && <span className="error">Name is required</span>}
                        <br/>
                        <br/>

                        <h4>Available time and date for this movie:</h4>
                        <input name="movie" defaultValue={movie.date} ref={register({ required: true })} placeholder="date" />
                        {errors.task && <span className="error">date is required</span>}
                        <br/>
                        <select name="gender" ref={register}>
                        <option value="time">{movie.time}</option>
                        <option value="time2">{movie.time2}</option>
                        </select>
                        <br/>

                        <button className="reg-button btn btn-primary my-4" type="submit">Submit</button>

                  </form>
            
            </div>
      );
};

export default Register;