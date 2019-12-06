import React from 'react';

const BenchIndexItem = ({ bench }) => {

  return (
    <li>[{bench.lat}, {bench.lng}] - {bench.description}</li>
  );
};

export default BenchIndexItem;