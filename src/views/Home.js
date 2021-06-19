import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Button } from 'reactstrap';
import RandomShowArray from '../components/ShowRandomArray';
// import { RandomShows } from '../helpers/data/RandomArray';
// import ShowRandomShows from '../components/ShowRandomArray';
// import RandomShows from '../helpers/data/RandomArray';
// import { getShowcase } from '../helpers/data/showcaseData';
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
  const [editing, setEditing] = useState(false);
  // const [allRandomShows, setAllRandomShows] = useState([]);
  // const [showRandoms, setShowRandoms] = useState(false);

  // const handleClick = () => {
  //   setShowRandoms(true);
  //   setAllRandomShows(allRandomShows[RandomShows]);
  // };

  const handleHomeButton = (type) => {
    switch (type) {
      case 'sort':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No button clicked');
    }
  };

  // useEffect(() => {
  //   getShowcase(user.uid)
  //     .then((showcases) => {
  //       setAllRandomShows(showcases);
  //     });
  // }, []);

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
    {/* <RandomShows showcases={showcases}/> */}
    <Button color='danger' onClick={() => handleHomeButton('sort')} >Random Week</Button>
    <h1 className="stack-top">My Week!</h1>
    {
    editing && <RandomShowArray
              showcases={showcases}
              user={user}
            />
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any,
  showcases: PropTypes.array.isRequired,
};
