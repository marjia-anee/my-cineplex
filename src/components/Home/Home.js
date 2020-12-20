import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import MovieDetails from '../MovieDetails/MovieDetails';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const Home = () => {

    // const tasks = fakeData;

      const [movie, setMovie] = useState([]);

      const handleAddMovie = () => {
        fetch('https://stark-refuge-81426.herokuapp.com/addMovies', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(fakeData)
      })

      }
      useEffect(() => {
          fetch('https://stark-refuge-81426.herokuapp.com/movies')
              .then(response => response.json())
              .then(data => setMovie(data))
      }, [])

      return (
            <div>
                 <div className="text-center mt-5">
                  <h1> <b>NOW SHOWING</b></h1>
                  <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={true}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 2000,
                        min: 1024
                    },
                    items: 2,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={true}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                >

                <img style={{width: '600px', height: '650px', padding: '50px'}}src="https://wallpapercave.com/wp/wp2162759.jpg" alt=""/>  
                <img style={{width: '600px', height: '650px', padding: '50px'}}src="https://i.pinimg.com/originals/d9/66/fa/d966fa29e7792ad9524328a9437e908c.jpg"alt=""/>  
                <img style={{width: '600px', height: '650px',padding: '50px'}}src="https://i.pinimg.com/474x/e2/a7/91/e2a7910a010b94bdcb5b23550f41cad4.jpg" alt=""/>  
                <img style={{width: '600px', height: '650px',padding: '50px'}}src="https://blog.karachicorner.com/wp-content/uploads/2013/04/large/TheWolverine+movie+posters.jpg" alt=""/>  
                <img style={{width: '600px', height: '650px', padding: '50px'}}src="https://www.joblo.com/assets/images/joblo/posters/2020/06/peninsulaposter1_thumb.jpg" alt=""/>  

        
            </Carousel>
                  <br />

                  </div>
            <div className="row m-3 p-5"> 
                {
                    movie.map(movie => <MovieDetails movie={movie}></MovieDetails>)
                }
            </div>

            <div>
              <button onClick={handleAddMovie}>Add movies</button>
            </div> 
            </div>
      );
};

export default Home;