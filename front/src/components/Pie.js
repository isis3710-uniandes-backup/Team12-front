import React from 'react';
import * as d3 from 'd3';
import Slice from './Slice';
export default class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = d3.schemeCategory10;
      this.renderSlice = this.renderSlice.bind(this);
      this.state = {
        hoveredSlice:null
      }
    }

  
    render() {
      let {x, y, data, categories} = this.props;
      let pie = d3.pie();
      return (
        <g>
          <g transform={`translate(${x}, ${y})`}>
            {pie(data).map(this.renderSlice)}
          </g>
          <g transform={`translate(${x + + this.props.innerRadius + this.props.outerRadius }, ${y - this.props.outerRadius*2/3})`}>
            <text>Total: {data.length}</text>
          </g>
          
          <g transform={`translate(${x + this.props.innerRadius + this.props.outerRadius}, ${y})`}>
            
            <text width={`${this.props.innerRadius}px`} height={`${this.props.innerRadius}px`} fill="darkRed">
              <tspan>
                {this.state.hoveredSlice===null? "": categories[this.state.hoveredSlice]['name'].toString()}
              </tspan>
            </text>
          </g>
          <g transform={`translate(${x + this.props.innerRadius + this.props.outerRadius}, ${y + this.props.outerRadius/4})`}>
            <text>
              <tspan>
                {this.state.hoveredSlice===null? "": `${categories[this.state.hoveredSlice]['subcategories'].length} subcategorias`}
              </tspan>              
            </text>

          </g>
        </g>
        
      );
    }
  
    renderSlice(value, i) {
      let {innerRadius, outerRadius, cornerRadius, padAngle} = this.props;
      return (
        <Slice key={i}
               innerRadius={innerRadius}
               outerRadius={outerRadius}
               cornerRadius={cornerRadius}
               padAngle={padAngle}
               value={value}
               label={value.data}
               fill={this.colorScale[i]} 
               cat={i}
               onMouseOverCallback={datum => this.setState({hoveredSlice: datum})}
               onMouseOutCallback={ datum=>this.setState({hoveredSlice: null})}/>
      );
    }
  }