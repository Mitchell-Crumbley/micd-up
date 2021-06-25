// import React, { useState } from 'react';

function AverageWritingArray(array) {
  // const number = array.map((i) => Number(i));
  const filteredData = array.filter(({ activityName }) => activityName === 'In The Lab');
  const avg = filteredData.reduce((total, b) => total + parseInt(b.time, 10), 0) / filteredData.length;
  return (avg);
}

function AverageNetworkingArray(array) {
  const filteredData = array.filter(({ activityName }) => activityName === 'Networking');
  const avg = filteredData.reduce((a, b) => a + b.time, 0) / filteredData.length;
  return (avg);
}

function AverageShowcaseArray(array) {
  const filteredData = array.filter(({ activityName }) => activityName === 'Showcase');
  const avg = filteredData.reduce((a, b) => a + b.time, 0) / filteredData.length;
  return (avg);
}

function AverageOpenMicArray(array) {
  const filteredData = array.filter(({ activityName }) => activityName === 'Open Mic');
  const avg = filteredData.reduce((a, b) => a + b.time, 0) / filteredData.length;
  return (avg);
}

export {
  AverageWritingArray, AverageNetworkingArray, AverageShowcaseArray, AverageOpenMicArray
};
