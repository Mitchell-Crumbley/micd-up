import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import { Circle } from 'rc-progress';
// import AnimatedNumber from 'react-animated-number';
import {
  AverageNetworkingArray, AverageOpenMicArray, AverageShowcaseArray, AverageWritingArray
} from '../helpers/data/AverageArray';
// import AverageArray from '../helpers/data/AverageArray';
// import { getActivity } from '../helpers/data/activityData';

export default function ProgressBar({
  firebaseKey,
  activity,
}) {
  // const [activity, setActivity] = useState([]);
  // const { firebaseKey } = useParams();

  // useEffect(() => {
  //   getActivity(uid).then(setActivity);
  // }, []);

  return (
<div className="progress-container" key={firebaseKey}>
  <>
      <div className="text-center">Writing {AverageWritingArray(activity)}%
      <Circle percent={AverageWritingArray(activity)} strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }} />
      </div>
      <div className="text-center">Networking {AverageNetworkingArray(activity)}%
      <Circle percent={AverageNetworkingArray(activity)} strokeWidth="4" strokeColor={{
        '0%': '#ffe601',
        '100%': '#108ee9',
      }} />
      </div>
      <div className="text-center">Showcase {AverageShowcaseArray(activity)}%
      <Circle percent={AverageShowcaseArray(activity)} strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#ff0000',
      }} />
      </div>
      <div className="text-center">Open Mic {AverageOpenMicArray(activity)}%
      <Circle percent={AverageOpenMicArray(activity)} strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#ff0000',
      }} />
      </div>
   </>
</div>
  );
}

ProgressBar.propTypes = {
  activity: PropTypes.array,
  user: PropTypes.any,
  uid: PropTypes.any.isRequired,
  time: PropTypes.string,
  notes: PropTypes.string,
  activityName: PropTypes.string,
  firebaseKey: PropTypes.string
};
