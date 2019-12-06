import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, filters, fetchBenches, updateBounds }) => (
  <div>
    <BenchMap benches={benches} filters={filters} updateBounds={updateBounds} fetchBenches={fetchBenches} />
    <BenchIndex benches={benches} />
  </div>
);

export default Search;