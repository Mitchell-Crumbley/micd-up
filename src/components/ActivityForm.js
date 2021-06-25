import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createActivity, updateActivity } from '../helpers/data/activityData';

const ActivityForm = ({
  formTitle,
  user,
  firebaseKey,
  activityName,
  time,
  notes,
  setActivities
}) => {
  const history = useHistory();
  const [activity, setActivity] = useState({
    activityName: activityName || '',
    time: parseInt(time, 10) || 0,
    notes: notes || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid || null,
  });

  const handleNumberInput = (e) => {
    setActivity((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.valueAsNumber
    }));
  };

  const handleInputChange = (e) => {
    setActivity((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'openMic' ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.firebaseKey) {
      updateActivity(activity, user).then(setActivities);
    } else {
      createActivity(activity, user).then(setActivities);
      history.push('/');

      // clear inputs
      setActivity({
        activity: '',
        notes: '',
        time: 0,
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
    <div className='activity-form'>
    <Card body>
      <Form id='addActivityForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="exampleSelect">Select an Activity</Label>
            <Input type="select" name="activityName" onChange={handleInputChange} value={activity.activity}>
              <option value="">Select</option>
              <option>In The Lab</option>
              <option>Showcase</option>
              <option>Networking</option>
              <option>Open Mic</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="Time">Set Time:</Label>
          <Input
            name='time'
            id='time'
            value= {parseInt(activity.time, 10)}
            type='number'
            onChange={handleNumberInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="note">Notes:</Label>
          <Input
            name='notes'
            id='notes'
            value={activity.notes}
            type='text'
            placeholder='Enter a Activity Description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
      </Card>
    </div>
  );
};

ActivityForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  activity: PropTypes.array,
  setActivity: PropTypes.func,
  setActivities: PropTypes.func,
  activityName: PropTypes.string,
  time: PropTypes.number,
  notes: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any,
  className: PropTypes.string,
};

export default ActivityForm;
