import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createShowcase, updateShowcase } from '../helpers/data/showcaseData';

const ShowcaseForm = ({
  formTitle,
  user,
  firebaseKey,
  showcaseName,
  time,
  imgUrl,
  details,
  setShowcases,
  openMic,
}) => {
  const [showcase, setShowcase] = useState({
    showcaseName: showcaseName || '',
    details: details || '',
    imgUrl: imgUrl || '',
    time: time || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid || null,
    openMic: openMic || false
  });

  const handleInputChange = (e) => {
    setShowcase((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'openMic' ? e.target.checked : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showcase.firebaseKey) {
      updateShowcase(showcase, user).then(setShowcases);
    } else {
      createShowcase(showcase, user).then(setShowcases);
      history.push('/showcase');

      // clear inputs
      setShowcase({
        showcaseName: '',
        details: '',
        time: '',
        imgUrl: '',
        location: '',
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
    <div className='showcase-form'>
    <Card body>
      <Form id='addShowcaseForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="showcaseName">Title:</Label>
          <Input
            name='showcaseName'
            id='showcaseName'
            value={showcase.showcaseName}
            type='text'
            placeholder='Enter a Showcase Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="details">Description:</Label>
          <Input
            name='details'
            id='details'
            value={showcase.details}
            type='text'
            placeholder='Enter a Showcase Description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Showcase Image:</Label>
          <Input
            name='imgUrl'
            id='imgUrl'
            value={showcase.imgUrl}
            type='url'
            placeholder='Enter an Image URL'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
            type='checkbox'
            name='openMic'
            id='openMic'
            checked={showcase.openMic}
            onChange={handleInputChange}
            />
            Private ?
        </Label>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
      </Card>
    </div>
  );
};

ShowcaseForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setShowcases: PropTypes.func,
  showcaseName: PropTypes.string,
  details: PropTypes.string,
  time: PropTypes.string,
  imgUrl: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any,
  openMic: PropTypes.bool,
  className: PropTypes.string
};

export default ShowcaseForm;
