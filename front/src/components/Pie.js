import React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';
export default class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = d3.schemeCategory10;
      this.renderSlice = this.renderSlice.bind(this);
    }

  
    render() {
      let {x, y, data} = this.props;
      let pie = d3.pie();
      return (
        <g transform={`translate(${x}, ${y})`}>
          {pie(data).map(this.renderSlice)}
        </g>
      );
    }
  
    renderSlice(value, i) {
      let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
      console.log(value)
      return (
        <Slice key={i}
               innerRadius={innerRadius}
               outerRadius={outerRadius}
               cornerRadius={cornerRadius}
               padAngle={padAngle}
               value={value}
               label={value.data}
               fill={this.colorScale[i]} />
      );
    }
  }