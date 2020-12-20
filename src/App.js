import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import BookingDetails from './components/BookingDetails/BookingDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
    <Router>
        <Switch>
          <Route path="/home">
          <Header></Header>
          <Home></Home>
          </Route>
          <PrivateRoute path="/movie/:_id">
            <Header></Header>
            <Register></Register>
          </PrivateRoute>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
          </Route>
          <Route path="/bookingDetails">
            <Header></Header>
            <BookingDetails></BookingDetails>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

      </UserContext.Provider>

  );
}

export default App;
