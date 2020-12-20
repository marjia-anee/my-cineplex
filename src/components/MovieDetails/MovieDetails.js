import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = (props) => {
      console.log(props);

      const {_id, name, img} = props.movie;



      return (
            <div className=" col-md-3">
                  <h3 style={{marginTop: '50px'}} className="text">{name}</h3>
                <img style={{ height: '250px', width: '220px', marginBottom: '10px' }} src={img} alt="" />
                <br/>
                
                <Link to={`/movie/${_id}`}> <button className="btn btn-primary">Book Now</button> </Link>

        </div>
      );
};

export default MovieDetails;