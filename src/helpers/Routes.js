import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import ShowcaseView from '../views/ShowcaseView';
import VenueView from '../views/VenueView';
import AddVenue from '../views/AddVenue';
import AddShowcase from '../views/AddShowcase';
import SingleShowcase from '../views/SingleShowcase';
import SingleVenue from '../views/SingleVenue';
import RandomShowArray from '../components/ShowRandomArray';
import AddActivity from '../views/AddActivity';
import ActivityView from '../views/ActivityView';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  user: PropTypes.any,
  component: PropTypes.any
};
export default function Routes({
  user, showcases, setShowcases, setVenues, venues, setShowcaseVenue, setVenueShowcases, activity, setActivities
}) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} showcases={showcases} setShowcases={setShowcases} activity={activity} setActivities={setActivities}/>} />
      <PrivateRoute
        user={user}
        path='/showcases'
        component={() => <ShowcaseView user={user} venues={venues} setVenues={setVenues} showcases={showcases} setShowcases={setShowcases}/>}
        />
      <PrivateRoute
        user={user}
        path='/venues'
        component={() => <VenueView user={user} venues={venues} setVenues={setVenues}/>}
        />
      <PrivateRoute
        user={user}
        path='/activity'
        component={() => <ActivityView user={user} activity={activity} setActivities={setActivities}/>}
        />
      <PrivateRoute
        user={user}
        path='/add-venue'
        component={() => <AddVenue user={user} venues={venues} setVenues={setVenues}/>}
        />
      <PrivateRoute
        user={user}
        path='/add-showcase'
        component={() => <AddShowcase user={user} showcases={showcases} setShowcases={setShowcases} venues={venues}/>}
        />
        <PrivateRoute
        user={user}
        path='/random-show'
        component={() => <RandomShowArray user={user} showcases={showcases} setShowcases={setShowcases}/>}
        />
        <PrivateRoute
        user={user}
        path='/add-activity'
        component={() => <AddActivity user={user} activity={activity} setActivities={setActivities}/>}
        />
      <Route
        path='/showcase/:id'
        component={() => <SingleShowcase setShowcaseVenue={setShowcaseVenue}/>} />
              <Route
        path='/venue/:id'
        component={() => <SingleVenue setVenueShowcases={setVenueShowcases}/>} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setShowcases: PropTypes.func.isRequired,
  showcases: PropTypes.array.isRequired,
  setVenues: PropTypes.func.isRequired,
  setShowcaseVenue: PropTypes.func,
  venues: PropTypes.array.isRequired,
  setVenueShowcases: PropTypes.func,
  setActivities: PropTypes.func,
  activity: PropTypes.array.isRequired,
};
