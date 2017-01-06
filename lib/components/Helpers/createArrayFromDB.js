import React from 'react';

const createArrayFromDB = (object) => {
  const FBKeys = object ? Object.keys(object) : [];
  return FBKeys.map((key) => {
    const singleRecord = object[key];
    singleRecord['firebaseId'] = key;
    return singleRecord;
  })
}

export default createArrayFromDB
