import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function ShowcaseTimeline({ user, showcases }) {
  return (
<div className="timeline-container">
    {showcases.map((showcaseObj) => (
    <VerticalTimeline
      key={showcaseObj.firebaseKey}
      firebaseKey={showcaseObj.firebaseKey}
      user={user}
      uid={showcaseObj.uid}
      {...showcaseObj}>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={GitHubLogo}
  >
    <h3 className="vertical-timeline-element-title"> {showcaseObj.showcaseName}</h3>
    <h4 className="vertical-timeline-element-subtitle">{showcaseObj.time}</h4>
    <p>
    {showcaseObj.details}
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    ))}
      </div>
  );
}

ShowcaseTimeline.propTypes = {
  user: PropTypes.any,
  showcases: PropTypes.array.isRequired
};
