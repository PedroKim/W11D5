import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    // this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    const benchItems = benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));

    if (!benches) return null;

    return (
      <ul>{benchItems}</ul>
    )
  }
}