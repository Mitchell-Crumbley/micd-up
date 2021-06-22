import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShowcaseCards from '../components/ShowcaseCards';

export default function ShowcaseView({
  showcases, user, setShowcases, venues
}) {
  const [search, setSearch] = useState('');
  const [filterShow, setFilterShow] = useState('');

  useEffect(() => {
    setFilterShow(
      showcases.filter((showcase) => showcase.showcaseName.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, showcases]);

  return (
    <div>
        <div className="form-group mb-4 d-flex justify-content-center">
         <input type="search" id="search" placeholder="Search by shows name..." aria-describedby="button-addon" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
        </div>
        { filterShow.length === 0
          ? <div className="d-flex flex-column justify-content-center">
                <h5 className="text-center my-3">No Shows found with that name!</h5>
            </div>
          : <>
        {filterShow.map((showcaseObj) => (
          <ShowcaseCards
            key={showcaseObj.firebaseKey}
            firebaseKey={showcaseObj.firebaseKey}
            user={user}
            uid={showcaseObj.uid}
            setShowcases={setShowcases}
            venues={venues}
            {...showcaseObj}
          />
        ))}
        </>
        }
    </div>
  );
}

ShowcaseView.propTypes = {
  showcases: PropTypes.array,
  setShowcases: PropTypes.func.isRequired,
  venues: PropTypes.array,
  user: PropTypes.any,
};
