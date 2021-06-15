import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from 'reactstrap';
// import GitHubLogo from '../assets/GitHubLogo.png';

const typeTextStyle = {
  width: '550px',
  height: '120px',
  bottom: '-350px',
  color: 'white',
  fontSize: '25px',
};

const HomeStyle = {
  color: 'white',
};
export default function Home({ user, showcases }) {
  return (
    <div style={HomeStyle}>
      { user
        ? <h1 className="stack-top">Hello, {user.fullName}</h1>
        : <h1 className="stack-top">Please Sign In!</h1>
      }
    {/* <img src={user.profileImage} circular avatar size='small' className='navbar-profile-image'/> */}
    <h1 className="stack-top">Some Jokes</h1>
    <div style={typeTextStyle}>
      <Typewriter
       options={{
         strings: ['"Why do books have an appendix? It feels like we can take those out."', '"I tried donating blood last week but they kept asking where I got it from."', '"This morning my shoes were tied, now the left one is winning."', '"If a police office falls down and no one is around to see it, do they get backup?"'],
         autoStart: true,
         loop: true,
         delay: 40,
         pauseFor: 2500,
         deleteSpeed: 20
       }}
        />
    </div>
    <Button color='danger' onClick={console.warn('Sort Coming')}>Sort Me</Button>
    <h1 className="stack-top">My Week!</h1>
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
    date={showcaseObj.time}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={GitHubLogo}
  >
    <h3 className="vertical-timeline-element-title"> {showcaseObj.showcaseName}</h3>
    <h4 className="vertical-timeline-element-subtitle">{showcaseObj.time}</h4>
    <p>
    {showcaseObj.details}
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
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
      </div>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any,
  showcases: PropTypes.array.isRequired
};
