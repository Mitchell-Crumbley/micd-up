import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import { Circle } from 'rc-progress';
// import { getActivity } from '../helpers/data/activityData';

export default function ProgressBar() {
  // const [activity, setActivity] = useState([]);
  // const { firebaseKey } = useParams();

  // useEffect(() => {
  //   getActivity(firebaseKey).then(setActivity);
  // }, []);

  const testData = [
    { bgcolor: '#ef6c00', completed: 53 },
  ];

  return (
<div className="progress-container">
{testData.map((item, taco) => (
  <>
      <div className="text-center">Test
      <Circle key={taco} percent={item.completed} strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }} />
      </div>
      <div className="text-center">Writing 50%
      <Circle percent='50' strokeWidth="4" strokeColor={{
        '0%': '#ffe601',
        '100%': '#108ee9',
      }} />
      </div>
      <div className="text-center">Open Mics 75%
      <Circle percent="70" strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#ff0000',
      }} />
      </div>
   </>
))}
</div>
  );
}

ProgressBar.propTypes = {
  activity: PropTypes.array,
  user: PropTypes.any,
  firebaseKey: PropTypes.string
};
