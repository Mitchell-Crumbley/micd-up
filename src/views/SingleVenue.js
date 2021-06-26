import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import {
  Card, CardImgOverlay, Button, CardText, CardTitle, CardImg
} from 'reactstrap';
import { getSingleVenue } from '../helpers/data/venueData';
import { getShowcaseVenue } from '../helpers/data/showcaseData';

const HomeStyle = {
  color: 'white',
  textAlign: 'center',
};

export default function SingleVenue() {
  const [venue, setVenue] = useState({});
  const [venueShowcases, setVenueShowcases] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSingleVenue(id).then(setVenue);
    getShowcaseVenue(id).then((data) => setVenueShowcases(data));
  }, []);

  return (
    <div className="m-4 venue-container">
      <Button tag={Link} to='/venues' color="danger">Go Back to All Venues</Button>
      <Card className="m-4 venue-card" inverse>
        <div className="img-div">
          <CardImg className="card-img-venue" width="100%" src={venue.venueImg} alt={venue.venueName} />
        </div>
        <div className="overlay"></div>
        <CardImgOverlay>
        <div className="card-content">
          <CardTitle style={HomeStyle} tag="h5">{venue.venueName}</CardTitle>
          <CardText style={HomeStyle}>{venue.venueName}</CardText>
        </div>
        </CardImgOverlay>
      </Card>
      <h2 style={HomeStyle}>Shows belongs to {venueShowcases.showcaseName} board</h2>
      <div className="venue-container">
      {venueShowcases.map((venueShowcasesArray) => (
        <Card className="m-4 venue-card" key={venueShowcasesArray.firebaseKey} inverse>
        <div className="img-div">
          <CardImg className="card-img" width="100%" src={venueShowcasesArray.imgUrl} />
        </div>
        <div className="overlay"></div>
        <CardImgOverlay>
        <div className="card-content">
          <CardTitle tag="h5" style={HomeStyle}>{venueShowcasesArray.showcaseName}</CardTitle>
          <CardText style={HomeStyle}>{venueShowcasesArray.details}</CardText>
        </div>
        </CardImgOverlay>
      </Card>
      ))}
      </div>
    </div>
  );
}

SingleVenue.propTypes = {
  id: PropTypes.string
};
