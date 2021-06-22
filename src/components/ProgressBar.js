import React from 'react';
import { Circle } from 'rc-progress';

export default function ProgressBar() {
  return (
<div className="progress-container">
      <div className="text-center">Networking 25%
      <Circle percent="10" strokeWidth="4" strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }} />
      </div>
      <div className="text-center">Writing 50%
      <Circle percent="50" strokeWidth="4" strokeColor={{
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
</div>
  );
}
