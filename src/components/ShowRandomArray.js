import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import shuffleArray from '../helpers/data/RandomArray';

const RandomShowArray = ({
  showcases,
}) => {
  const shuffledPosts = shuffleArray(showcases);
  return (
    <ul>
      {shuffledPosts.slice(0, 5).map((showcaseObj) => (
  <VerticalTimeline
      key={showcaseObj.firebaseKey}
      firebaseKey={showcaseObj.firebaseKey}
      uid={showcaseObj.uid}
      {...showcaseObj}>
   <VerticalTimelineElement
      className="vertical-timeline-element--left"
      date={showcaseObj.time}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       >
      <h3 className="vertical-timeline-element-title"> {showcaseObj.showcaseName}</h3>
      <h4 className="vertical-timeline-element-subtitle">{showcaseObj.time}</h4>
      <p>
      {showcaseObj.details}
      </p>
  </VerticalTimelineElement>

   <VerticalTimelineElement
      className="vertical-timeline-element--right"
      date={showcaseObj.time}
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
      <h3 className="vertical-timeline-element-title">{showcaseObj.showcaseName}</h3>
      <h4 className="vertical-timeline-element-subtitle">{showcaseObj.time}</h4>
      <p>
      {showcaseObj.details}
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
      ))}
    </ul>
  );
};

RandomShowArray.propTypes = {
  showcases: PropTypes.array,
  firebaseKey: PropTypes.string,
  time: PropTypes.string,
  showcaseName: PropTypes.string,
  details: PropTypes.string,
  imgUrl: PropTypes.string,
  openMic: PropTypes.bool,
  user: PropTypes.any,
  setShowcases: PropTypes.func,
  uid: PropTypes.any,
  venues: PropTypes.array,
  venueID: PropTypes.string,
  venueName: PropTypes.string
};

export default RandomShowArray;
