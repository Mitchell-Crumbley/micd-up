import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import {
  Card, CardImgOverlay, Button, CardText, CardTitle, CardImg
} from 'reactstrap';
import { getSingleShowcase } from '../helpers/data/showcaseData';

export default function SingleShowcase() {
  const [showcase, setShowcase] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleShowcase(id).then(setShowcase);
  }, []);

  return (
    <div className="m-4 showcaseVenue-container">
      <Button tag={Link} to='/showcases' color="danger">Go Back to All Showcases</Button>
      <Card className="m-4 showcaseVenue-card" inverse>
        <div className="img-div">
          <CardImg className="card-img-showcase" width="100%" src={showcase.imgUrl} alt={showcase.showcaseName} />
        </div>
        <div className="overlay"></div>
        <CardImgOverlay>
        <div className="card-content">
          <CardTitle tag="h5">{showcase.showcaseName}</CardTitle>
          <CardText>{showcase.details}</CardText>
          <CardText>{showcase.time}</CardText>
        </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

SingleShowcase.propTypes = {
  id: PropTypes.string
};
