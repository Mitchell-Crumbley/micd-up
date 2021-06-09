import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createVenue, updateVenue } from '../helpers/data/venueData';

const VenueForm = ({
  formTitle,
  user,
  firebaseKey,
  venueName,
  location,
  venueImg,
  setVenues,
}) => {
  const [venue, setVenue] = useState({
    venueName: venueName || '',
    location: location || '',
    venueImg: venueImg || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid || null,
  });

  const handleInputChange = (e) => {
    setVenue((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'openMic' ? e.target.checked : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (venue.firebaseKey) {
      updateVenue(venue, user).then(setVenues);
    } else {
      createVenue(venue, user).then(setVenues);
      history.push('/venues');

      // clear inputs
      setVenue({
        venueName: '',
        details: '',
        time: '',
        venueImg: '',
        location: '',
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
    <div className='venue-form'>
    <Card body>
      <Form id='addVenueForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="venueName">Title:</Label>
          <Input
            name='venueName'
            id='venueName'
            value={venue.venueName}
            type='text'
            placeholder='Enter a Venue Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            name='location'
            id='location'
            value={venue.location}
            type='text'
            placeholder='Enter a Venue Description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="venueImg">Venue Image:</Label>
          <Input
            name='venueImg'
            id='venueImg'
            value={venue.venueImg}
            type='text'
            placeholder='Enter an Image URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
      </Card>
    </div>
  );
};

VenueForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setVenues: PropTypes.func,
  venueName: PropTypes.string,
  venueImg: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any,
  className: PropTypes.string,
  location: PropTypes.string,
};

export default VenueForm;
