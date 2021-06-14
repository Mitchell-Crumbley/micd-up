import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form } from 'reactstrap';
import { getShowcase } from '../helpers/data/showcaseData';
import ShowcaseCards from '../components/ShowcaseCards';

export default function Search({ setShowcases, user }) {
  const [searchShows, setSearchShows] = useState([]);
  const [param, setParam] = useState('');

  const getShowcaseData = () => {
    getShowcase(param).then((resp) => setSearchShows(resp.items));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParam('');
    getShowcaseData();
  };

  const handleUserInput = (e) => {
    setParam(e.target.value);
  };

  return (
    <div>
      <h1>Search</h1>
      <Form className = "form" onSubmit={handleSubmit}>
        <Input id='param' placeholder="showcase title" value={param} onChange={handleUserInput}>
        </Input>
        <Button
        type="submit"
        outline color="dark">
          Submit
      </Button>
      </Form>
      {searchShows.map((showcaseObj) => (
        <ShowcaseCards key={showcaseObj.firebaseKey}
        setShowcases={setShowcases}
        user={user}
        {...showcaseObj}
        />
      ))}
    </div>
  );
}

Search.propTypes = {
  setShowcases: PropTypes.func,
  user: PropTypes.any
};
